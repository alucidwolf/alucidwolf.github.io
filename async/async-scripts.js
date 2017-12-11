function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  //await happens here in series
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(20).then(v => {
  console.log(v); // prints 70 after 4 seconds.
});

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  //await is happening for both in parallel
  return x + (await p_a) + (await p_b);
}

add2(10).then(v => {
  console.log(v); // prints 60 after 2 seconds.
});
