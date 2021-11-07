# Working With HTML Events
When building an input element, leverage the TS figure-outer for event callback functions!!
Instead of putting the fn outside of the form, putting the fn inline means the type param for the event object is not needed - TS 'figures it out' without an explicit type description:
```ts

// instead of this
function inputChange(e: React.ChangeEvent<HTMLInputElement>){
  return doSomething(e.target.value)
}

// Just put the fn inline, no type def needed
<input onChange={e => { doSomething(e.targe.value) }}>
```