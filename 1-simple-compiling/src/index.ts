// resolves a promise after a time
function resolveAfterTime(n: number){
  return new Promise(res => setTimeout(res, n));
};

// calls resolveAfterTime, then add 2 vals
export async function addNumbersWithPromise(a: number, b: number, c: number){
  await resolveAfterTime(c);
  return a + b
};

// run it
(async () => {
  console.log(await addNumbersWithPromise(2,7,500));
})