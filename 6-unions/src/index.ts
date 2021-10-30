function errOrVal(): |['error', Error]|['success', {obj:'dummy val'}]{
  // mock a random response
  const goodRes = Math.random() > .5
  if(goodRes){
    return ['success', {obj:'dummy val'}]
  }else{
    ['error', new Error('bad res')]
  }
}

const [res, val] = errOrVal();
console.log({res, val})

// leveraging type-guards via "Discriminated unions"

if(res === 'error'){
  // do err handling
  return;
}

console.log('not an error')