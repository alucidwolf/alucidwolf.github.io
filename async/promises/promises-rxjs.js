import Rx from "rxjs/Rx";
import { observeOn } from "rxjs/operators";

let Observable = Rx.Observable;
let resultA, resultB, resultC;

async function addAsync(num1, num2) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const res = num1 + num2;
      return Observable.fromPromise(res);
    }, 1000);
  });
}

async function addAll() {
  try {
    console.log("before");

    let res1 = await addAsync(1, 2)
      .do(x => (resultA = x))
      .flatMap(x => addAsync(x, 3))
      .do(x => (resultB = x))
      .flatMap(x => addAsync(x, 4))
      .do(x => (resultC = x))
      .subscribe(x => {
        console.log("total " + x);
        console.log(resultA, resultB, resultC);
      });

    console.log("after");
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await addAll();
})();
