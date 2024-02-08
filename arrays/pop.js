const arr = [];

Array.prototype.customPop = function () {
  if (!this?.length) return;

  const removedItem = this[this.length - 1];
  this.length = this.length - 1;

  return removedItem;
}

console.log('removed element: ', arr.customPop());
console.log('mutated array: ', arr);
