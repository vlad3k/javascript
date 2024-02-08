const obj  = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    city: 'Toronto'
  }
};

function customFreeze(target) {
  for (let prop in target) {
    Object.defineProperty(target, prop, {
      enumerable: true,
      configurable: false,
      writable: false,
    });
  }

  return target;
}

const frozenObj = customFreeze(obj);

frozenObj.firstName = 'Nikolay';
frozenObj.address.city = 'Ottawa'
delete frozenObj.firstName;

console.log(frozenObj);
