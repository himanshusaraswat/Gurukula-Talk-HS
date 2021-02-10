import { log } from "./2-create-promise";
// Basic
export const getFruit = async name => {
  const fruits = {
    pineapple: `It's a pineapple`,
    peach: `It's a peach`,
    strawberry: `It's a strawberry`
  };

  return fruits[name];
};

getFruit('peach').then(console.log);

// Async + Await

const makeSmoothie = async () => {
  const a = await getFruit('pineapple');
  const b = await getFruit('strawberry');

  return [a, b];
};

const makeSmoothie2 = () => {
  let a;
  return getFruit('pineapple')
    .then(v => {
      a = v;
      return getFruit('strawberry');
    })
    .then(v => [a, v]);
};

//Testing placeholders - Feel free to expand 
makeSmoothie().then(res=>log(res))
makeSmoothie2().then(res=>log(res))
