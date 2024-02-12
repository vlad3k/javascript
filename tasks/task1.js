// 1. Given the following input
//
// const form = {
//   name: "a.b.c",
//   address: "japan",
//   office: "y.z.u.v"
// };
// generate the following output
//
//
// {
//   name: {
//     a: {
//       b: {
//         c: ''
//       }
//     }
//
//   },
//   address: 'japan',
//     office: {
//   y: {
//     z: {
//       u: {
//         v: ''
//       }
//     }
//   }
// }
//
//
// }

const form = {
  name: "a.b.c",
  address: "japan",
  office: "y.z.u.v"
};

function generate(target, separator = '.') {
  const result = { ...target };

  for (let prop in result) {
    const arr = result[prop].split(separator);
    if (arr.length <= 1) continue;
    result[prop] = createNestedObjectFromPath(arr);
  }

  return result;
}

function createNestedObjectFromPath(arr) {
  const result = {};
  let current = result;

  arr.forEach((item, index) => {
    if (index === arr.length - 1) {
      return current[item] = '';
    }

    current[item] = {};
    current = current[item];
  });

  return result;
}

console.log(JSON.stringify(generate(form), null, 2));
