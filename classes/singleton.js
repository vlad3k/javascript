class Singleton {
  static instance;

  constructor(name, age) {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.name = name;
    this.age = age;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

new Singleton('John', 23);
new Singleton('Zack', 27);

const singletonInstance = Singleton.getInstance();

console.log(singletonInstance.name, singletonInstance.age);
