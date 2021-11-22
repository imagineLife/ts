/*
  Linked List Link
  "T" represents a "generic" type
  ...could be a string
  ...could be a number
  the <T> tells TS that 
  "im going to use this generic in this Type Def"
*/ 
type Link<T> = {
  value: T,
  next?: Link<T>
}

/*
  this will BLOCK connecting of 2 Links with different value types
*/ 

// WONT WORK
// declare 2 links
const linkA: Link<string> = {
  value: 'sauce'
}

const linkB: Link<number> = {
  value : 8675
}

// HERE is where the break will be
linkA.next = linkB;