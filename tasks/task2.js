// 2. Deep merge: Merge the following two objects
//
// const defaultPerson = {
//   name: "Anon",
//   gender: "Female",
//   hair: {
//     color: "brown",
//     cut: "long",
//     size: {
//       front: "big"
//     }
//   },
//   eyes: "blue",
//   family: ["mom", "dad"]
// };
//
//
// const me = {
//   name: "San",
//   gender: "Male",
//   hair: {
//     c: "short"
//   },
//   hobbies: ["golf", "tennis"],
//   family: ["wife", "kids", "dog"]
// };
//
//
//
// // Output:
// {
//   "name": "San",
//   "gender": "Male",
//   "hair": {
//   "color": "brown",
//     "cut": "long",
//     "size": {
//     "front": "big"
//   },
//   "c": "short"
// },
//   "eyes": "blue",
//   "family": [
//   "mom",
//   "dad",
//   "wife",
//   "kids",
//   "dog"
// ],
//   "hobbies": [
//   "golf",
//   "tennis"
// ]
// }


const defaultPerson = {
  name: "Anon",
  gender: "Female",
  hair: {
    color: "brown",
    cut: "long",
    size: {
      front: "big"
    }
  },
  eyes: "blue",
  family: ["mom", "dad"],
  properties: ['house', ['audi', 'bmw'], ['washing machine', ['teddy bear', 'bat']]],
};

const me = {
  name: "San",
  gender: "Male",
  hair: {
    c: "short"
  },
  hobbies: ["golf", "tennis"],
  family: ["wife", "kids", "dog"],
  properties: ['laptop', ['lexus'], ['dishwasher', ['barby', 'bat']]],
};

console.log(deepMerge(defaultPerson, me));

function isObject(variable) {
  return typeof variable === 'object' && variable !== null;
}

function deepMerge(target, source) {
  const result = Object.create(target);

  for (let prop in source) {
    const sourceValue = source[prop];

    if (Array.isArray(sourceValue) && Array.isArray(result[prop])) {
      result[prop] = mergeArray(result[prop], sourceValue);
    }
    else if (isObject(sourceValue) && !Array.isArray(sourceValue)) {
      result[prop] = Object.assign(result[prop], sourceValue);
    }
    else {
      result[prop] = source[prop];
    }
  }

  return result;
}

const arr1 = ['house', ['audi', 'bmw'], ['washing machine', ['teddy bear', 'bat']]];
const arr2 = ['laptop', ['lexus', 'tesla'], ['dishwasher', ['barby', 'bat']]];

// console.log(mergeArray(arr1, arr2));

function mergeArray(target, source) {
  let result = [];
  const maxLength = Math.max(target.length, source.length);

  for (let i = 0; i < maxLength; i++) {
    if (Array.isArray(target[i]) && Array.isArray(source[i])) {
      result.push(mergeArray(target[i], source[i]));
      continue;
    }
    if (target[i]) {
      result.push(target[i]);
    }
    if (source[i] && !target.includes(source[i])) {
      result.push(source[i]);
    }
  }

  return result;
}

// ['house', ['audi', 'bmw'], ['washing machine', ['teddy bear', 'bat']]],
// ['laptop', ['lexus'], ['dishwasher', ['barby', 'bat']]],

// ['house', ['audi', 'bmw', 'lexus'], ['washing machine', 'dishwasher', ['teddy bear', 'barby', 'bat']]],
