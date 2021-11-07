# Use State and Set State
Types are discovered by default: when a `useState` is set to a string, TS expects it to always be a string.  

## Declaring useState types explicitly
```js
let [sauce, makeSauce] = useState<string>('none');
```
Declaring the type can be done, above as a `string`.

## Null or Val - a use-case for fetchingData
```js
// mock data element type
const UserType = {
  name: string,
  age: number
}

/*
  set type declaration to...
  - array of users: with data
  - empty array: good fetch, no data
  - null: onLoad
*/
let [users, setUsers] = useState<UserType[] | [] | null>;
```