# Context with TS
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