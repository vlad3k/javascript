const obj  = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    city: 'Toronto'
  }
};

function customKeys(target) {
  const keys = [];

  for (let prop in target) {
    keys.push(prop);
  }

  return keys;
}


console.log(customKeys(obj));
