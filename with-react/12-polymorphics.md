# PolyMorphic Components
Like a button that is really a link. We won't want to maintain a button && a link separately, so a button will both be able to be a button and a link.  

## Extending a button to be a link

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