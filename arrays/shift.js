const arr = [1, 2, 3];

Array.prototype.customShift = function() {
  if (!this?.length) return;

  const removedElement = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }

  this.length = this.length - 1;

  return removedElement;
};

console.log('removed element: ', arr.customShift());
console.log('mutated array: ', arr);
