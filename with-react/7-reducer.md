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




// 3. With Types, with coordinating type+payload type combo
// SOME payloads are required as numbers, others are not present 

// One Action type def, no payload
type SimpleActionType = {
  type: 'INCREMENT' | 'DECREMENT'
}

// One Action Type, required number payload
type ComplexActionType = {
  type: 'SET',
  payload: number
}

// Setting The Action Type to be either Simple or Complex
// MARRYING the required payload to each defined type
type ActionType = SimpleActionType | ComplexActionType;

type StateType = {
  value: number
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "SET":
      // No more `action.payload || 0`
      return { value: action.payload };
  }
};
```