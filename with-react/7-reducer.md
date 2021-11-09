# Reducers and TypeScript

```ts
// example reducer
// 1. No Types
function storeReducer(state, action){
  let reducerObj = {
    'UPDATE_NUMBER_OF_PEOPLE': (newVal) => ({
      ...state,
      numberOfPeople: newVal
    }),
    'UPDATE_SLICES_PER_PERSON': (newVal) => ({
      ...state,
      slicesPerPerson: newVal
    }),
    'UPDATE_SLICES_PER_PIE': (newVal) => ({
      ...state,
      slicesPerPie: newVal
    })
  }

  return reducerObj[action.type](action.payload)
}

// 2. With Types

// action.types
type StateTypesType = | 'UPDATE_NUMBER_OF_PEOPLE'
  | 'UPDATE_SLICES_PER_PERSON'
  | 'UPDATE_SLICES_PER_PIE'

//action types, inclusive of above types
type ActionType = {
  type: StateTypesType,
  payload: number
}

// state type
type StateType = {
  numberOfPeople: number,
  slicesPerPerson: number,
  slicesPerPie: number
}

// Reducer... With Types
function storeReducer(state: StateType, action: ActionType){
  let reducerObj = {
    'UPDATE_NUMBER_OF_PEOPLE': (newVal) => ({
      ...state,
      numberOfPeople: newVal
    }),
    'UPDATE_SLICES_PER_PERSON': (newVal) => ({
      ...state,
      slicesPerPerson: newVal
    }),
    'UPDATE_SLICES_PER_PIE': (newVal) => ({
      ...state,
      slicesPerPie: newVal
    })
  }
  
  return reducerObj[action.type](action.payload)
}
```