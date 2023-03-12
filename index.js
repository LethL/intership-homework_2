// task1
function sum(a) {
  let counter = a;

  function scopeSum(b) {
    return sum(a + b);
  }
  scopeSum.toString = scopeSum.valueOf = () => counter;
  return scopeSum;
}
let res = +sum(2)(3)(5);
console.log(res);


// task2
const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort(arr));


// task3
(function() {
    let promise = Promise.resolve();
    setTimeout(() => {
        promise.then(() => alert("микрозадача 1"));
        document.querySelector('body').style.background = "red";
    }, 2000)
    setTimeout(() => {
        promise.then(() => alert("микрозадача 2"));
        promise.then(() => alert("микрозадача 3"));
    }, 5000)
    setTimeout(() => {
        promise.then(() => alert("микрозадача 4"));
        document.querySelector('body').style.background = "black";
    }, 9000)
})()
