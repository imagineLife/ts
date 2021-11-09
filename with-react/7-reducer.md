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
```