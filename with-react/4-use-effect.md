# A UseEffect "Gotcha"
```ts
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => setTimeout(() => setCount(count + 1), 1000), [count]);

  return <main>{count}</main>;
};
```
the above will return a TS error on the `setTimout` block, reading...`Type 'number' is not assignable to type 'void | (() => void | undefined)`