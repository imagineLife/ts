# TS React and Restricting Props
We can use TypeScript to restrict which props are passed
```ts

type CommonButtonPropsTypes = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
}

type BtnPrimaryPropsType = ButtonProps & { 
  children: string;
  primary: boolean;
  secondary?: never;
  warning?: never;
 }
type BtnSecondaryPropsType = ButtonProps & { 
  children: string;
  primary?: never;
  secondary: boolean;
  warning?: never;
 }

function Button({
  children,
  primary = false,
  secondary = false,
  warning = false
}: BtnPrimaryPropsType | BtnSecondaryPropsType){
  return (<button>button here...</button>)
}

<Button primary>Sauce</Button>
<Button secondary>Juice</Button>
```