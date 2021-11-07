# Typing CSS in react
```js
import "./styles.css";

import * as React from "react";

// notice the PROP - 'style?: React.CSSProperties'
type BoxProps = { children: React.ReactNode; style?: React.CSSProperties };

// Notice the spreading of the prop `style` in the style attr
const Box = ({ children, style = {} }: BoxProps) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple", ...style }}>
      {children}
    </section>
  );
};

export default function Application() {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box style={{ borderColor: "red" }}>
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
The `React.CSSProperties`. This is how react allows "built-in" props typing.