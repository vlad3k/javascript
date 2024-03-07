const personProto = {
  greet() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

function createPerson(name, age) {
  return Object.create(personProto, {
    name: {
      value: name
    },
    age: {
      value: age
    },
  });
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);

console.log(person1.name);
console.log(person2.age);
person1.greet();
person2.greet();

console.log(person1.greet === person2.greet);
