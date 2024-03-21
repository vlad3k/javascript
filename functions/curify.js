const add = (a, b, c) => a + b + c;

function currify(cb) {
  return function curried(...args) {
    if (args.length >= cb.length) {
      return cb(...args);
    }
    return (...newArgs) => curried(...args, ...newArgs);
  }
}

const currifiedFunction = currify(add);

const result1 = currifiedFunction(1)(2)(3);
const result2 = currifiedFunction(1, 2)(3);
const result3 = currifiedFunction(1, 2, 3);
console.log(result1, result2, result3);

