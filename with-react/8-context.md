# Context with TS
A Simple "Theme" color provision context...
```ts
// theme-context.tsx
import * as React, { createContext } from 'react';

// lowest-level type
type ThemeType = {
  backgroundColor: string,
  color: string
};

// obj of string-keys + ThemeTypes
type ThemeObjType = {
  [key: string]: ThemeType
}

// state data + type
const defaultThemes: ThemeObjType = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: '#555',
    color: 'white'
  }
}

// The Context && exports
export const ThemeContext = createContext(defaultThemes)

export ThemeProvider = ({children}: {children: React.ReactNode }) => {
  return <ThemeContext.Provider value={defaultThemes}>
    {children}
  </ThemeContext.Provider>
}
```

A State-Management Context...
```ts
// types.tsx
export interface RGBStateType {
  red: number;
  green: number;
  blue: number;
}






/*
  reducer.ts
*/ 
export type AdjustmentActionType = {
  type: 'ADJUST_RED'| 'ADJUST_GREEN' | 'ADJUST_BLUE',
  payload: number
}

/*
  Definition of state gets passed 2x
    - input state param
    - reducer fn return type
*/ 
export const reducer = (
  state: RGBStateType,
  action: AdjustmentActionType
): RGBStateType => {
  let { type, payload } = action;
  if(type === 'ADJUST_RED'){
    return {
      ...state,
      red: payload
    }
  }
  if(type === 'ADJUST_GREEN'){
    return {
      ...state,
      green: payload
    }
  }
  if(type === 'ADJUST_BLUE'){
    return {
      ...state,
      blue: payload
    }
  }
  return state
}




/*
  context file
  context.tsx
*/
import * as react from React;
import { AdjustmentActionType, reducer } from './reducer';
import { RGBStateType } from './types'

// a type that extends the state type PLUS a dispatch fn
interface RGBContextType extends RGBStateType {
  dispatch: React.Dispatch<AdjustmentActionType>
}

// 
export const RGBContext = React.createContext<RGBContextType>(null);
export const RGBContextProvider = ({children}: {children: React.ReactNode }) => {
  const [rgbColors, dispatch] = React.useReducer(reducer, {
    red:0,
    green: 0,
    blue: 0
  })

  return <RGBContext.Provider value={{...rgb, dispatch}}>{children}</RGBContext.Provider>
}
```

