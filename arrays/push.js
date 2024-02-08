const arr = [1, 2, 3];
const newItems = [4, 5, 6];

Array.prototype.customPush = function(...items) {
  for (let item of items) {
    this[this.length] = item;
  }

  return this.length;
};

console.log(arr.customPush(...newItems));
console.log(arr);
