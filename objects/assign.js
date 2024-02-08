const obj  = { a: 1, b: 2 };
const obj3 = { d: 7, e: 8 };
const obj2 = { c: 5, d: 6 };
const obj1 = { b: 3, c: 4 };

function customAssign(target, ...sources) {
  for (let i = sources.length - 1; i >= 0; i--) {
    console.log(sources[i]);
    for (let prop in sources[i]) {
      target[prop] = sources[i][prop];
    }
  }

  return target;
}

console.log('mutated target obj: ', customAssign(obj, obj1, obj2, obj3));
