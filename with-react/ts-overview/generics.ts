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
  next: Link<T>
}