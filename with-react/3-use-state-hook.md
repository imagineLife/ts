# Use State and Set State
Types are discovered by default: when a `useState` is set to a string, TS expects it to always be a string.  

## Declaring useState types explicitly
```js
let [sauce, makeSauce] = useState<string>('none');
```
Declaring the type can be done, above as a `string`.