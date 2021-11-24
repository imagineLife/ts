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

```