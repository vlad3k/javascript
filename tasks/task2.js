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
  family: ["mom", "dad"]
};

const me = {
  name: "San",
  gender: "Male",
  hair: {
    c: "short"
  },
  hobbies: ["golf", "tennis"],
  family: ["wife", "kids", "dog"]
};

function isObject(variable) {
  return typeof variable === 'object' && variable !== null;
}

function deepMerge(target, source) {
  const result = { ...target };

  for (let prop in source) {
    const sourceValue = source[prop];

    if (Array.isArray(sourceValue) && Array.isArray(result[prop])) {
      result[prop] = [ ...result[prop], ...sourceValue ];
    }
    else if (isObject(sourceValue) && !Array.isArray(sourceValue)) {
      result[prop] = { ...deepMerge(result[prop], sourceValue) };
    }
    else {
      result[prop] = source[prop];
    }
  }

  return result;
}

console.log(deepMerge(defaultPerson, me));
