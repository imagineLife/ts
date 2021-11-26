# Higher Order Components and TS
```ts
// the hoc, passing data to the anonymous child component
// v1 with any
const withCharacter = (Component) => {
  return Component
}



// HOC applied to child component
const CharWithInfo = withCharacter(CharacterInfo);

function App(){
  const [char, setChar] = React.useState<CharType | null>(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    fetchChars().then(c => {
      setCharacter(c)
      setLoading(false);
    })
  }, [])

  return(
    <main>
      {loading && <Loading />}

      // WITHOUT hoc
      // {char && loading === false && <CharacterInfo character={char} />}

      // WITH HOC
      {char && loading === false && <CharWithInfo />}
    </main>
  )
}





// v2
// moves state management into hoc
//  renders loading by itself
const withCharacter = (Component) => {
  const [char, setChar] = React.useState<CharType | null>(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    fetchChars().then(c => {
      setCharacter(c)
      setLoading(false);
    })
  }, [])

  if(loading) return <Loading />
  return <Component character={char}/>
}



// HOC applied to child component
const CharWithInfoAndLoading = withCharacter(CharacterInfo);

function App(){
  return(
    <main>
      <CharWithInfoAndLoading />
    </main>
  )
}





// v3 WITH TYPES!
// define types
/*
  - withCharacter must render a component that must have a 'character' prop
  - ts + jsx workaround is a trailing comma inside the <T,>
  - React.Component will "find out" what props are in the component that are passed
*/
type WithCharPropsType = {
  character: CharType
}

function withCharacter<T>(Component: React.ComponentType<T>) => {
  // return a new fn component
  return (props: Omit<T, keyof WithCharPropsType>) => {
    const [char, setChar] = React.useState<CharType | null>(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      fetchChars().then(c => {
        setCharacter(c)
        setLoading(false);
      })
    }, [])

    if(loading) return <Loading />
    return <Component character={char}/>
  }
}



// HOC applied to child component
const CharWithInfoAndLoading = withCharacter(CharacterInfo);

function App(){
  return(
    <main>
      <CharWithInfoAndLoading />
    </main>
  )
}
```

Another example
- a `withCurUser` HOC
  - passes user info
  - accepts a `salutaiton` prop passed "manually"
  - returns the `NameTag` component
```ts

// STARTING PLACE
type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

const currentUser = {
  displayName: "J Mascis",
  accountId: "123",
  isVerified: true
};

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag salutation="Howdy" user={currentUser} />;

// export default Application;







// WITH HOT TS detail

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

const currentUser = {
  displayName: "J Mascis",
  accountId: "123",
  isVerified: true
};

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

// HOC and HOC type defs
type withCurUserPropsType = {
  user: UserModel
}

function withCurUser<T extends withCurUserPropsType>(Component: React.ComponentType<T>){
  return (props: Omit<T, keyof withCurUserPropsType>) => {
    return <Component {...props as T} user={currentUser} />
  }
}

const NameTagWithUser = withCurUser(NameTag);
const Application = () => <NameTagWithUser salutation="Howdy"/>;

export default Application;

```