function Person(name) {
  this.name = name;
}

Person.prototype.introduceSelf = function() {
  console.log('My name is ', this.name);
}

function Professor(name) {
  Person.call(this, name);
}

Object.setPrototypeOf(Professor.prototype, Person.prototype);

Professor.prototype.grade = function(value) {
  console.log('grade ', value);
}

Object.prototype.customHasOwnProperty = function(key) {
  const props = Object.keys(this);
  return props.includes(key);
}

const person = new Person('Elon Musk');
const professor = new Professor('Albert Einstein');

console.log(professor.customHasOwnProperty('introduceSelf'));
console.log(professor.customHasOwnProperty('name'));
console.log(person.customHasOwnProperty('introduceSelf'));
console.log(person.customHasOwnProperty('grade'));
console.log('//');
console.log(professor.hasOwnProperty('introduceSelf'));
console.log(professor.hasOwnProperty('name'));
console.log(person.hasOwnProperty('introduceSelf'));
console.log(person.hasOwnProperty('grade'));

