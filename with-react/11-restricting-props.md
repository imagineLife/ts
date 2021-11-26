# TS React and Restricting Props
We can use TypeScript to restrict which props are passed
```ts

type CommonButtonPropsTypes = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
}

type BtnPrimaryPropsType = ButtonProps & { primary: boolean }
type BtnSecondaryPropsType = ButtonProps & { secondary: boolean }
```