# Children
```js
import * as React from "react";

const Box = ({ children }) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple" }}>
      {children}
    </section>
  );
};

export default function Application() {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
}
```

Reviewing typing the `children` through many options...
- `React.ElementType` wont render text as a child
- `JSX.Element` wont render multiple children
- `JSX.Element[]` wont render text, but will render multiple children
- `React.Children` is looking to map through the children
- `React.ReactChild` wont render multiple children
- `React.ReactNode | React.ReactNode[]` works!!