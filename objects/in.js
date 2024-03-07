const animal = {
  speak() {
    return `${this.name} makes a sound`;
  }
};

const dog = {
  name: 'Doggo'
};

Object.setPrototypeOf(dog, animal);

Object.prototype.customIn = function customIn(key) {
  if (this.hasOwnProperty(key)) {
    return true;
  }

  const prototype = Object.getPrototypeOf(this);
  if (prototype) {
    return prototype.customIn(key);
  }

  return false;
};

console.log(dog.customIn('name'));
console.log(dog.customIn('speak'));
console.log(dog.customIn('toString'));
console.log(dog.customIn('never'));

console.log('name' in dog);
console.log('speak' in dog);
console.log('toString' in dog);
console.log('never' in dog);
