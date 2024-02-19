// 3. Check if all the values of leaf objects are the same.
//
//
// const obj = {
//   d: {
//     aa: 1,
//     qq: 1,
//   },
//   a: 1,
//   b: 1,
//   c: {
//     aa: 1,
//   },
//   m: {
//     i: 1,
//   },
// };
//
// Note: In this example, it should return true because value of aa, qq are 1

const objCorrect = {
  d: {
    aa: 1,
    qq: 1,
  },
  a: 1,
  b: 1,
  c: {
    aa: 1,
  },
  m: {
    i: 1,
  },
};

const objWrong = {
  d: {
    aa: 1,
    qq: 2
  },
  a: 1,
  b: 1,
  c: {
    aa: 1
  },
  m:{
    i : 2
  }
};

function compareLeavesAresEqual(target) {
  let firstValue;

  function checkLeaves(node) {
    if (typeof node !== 'object') {
      if (firstValue === undefined) {
        firstValue = node;
      }
      else if (node !== firstValue) {
        return false;
      }
    }
    else {
      for (let prop in node) {
        if (!checkLeaves(node[prop])) {
          return false;
        }
      }
    }

    return true;
  }

  return checkLeaves(target);
}

console.log(compareLeavesAresEqual(objCorrect), compareLeavesAresEqual(objWrong));
