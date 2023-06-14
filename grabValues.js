Object.grabValues = (obj) => {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
};

const object = {
  name: "JohnDoe",
  id: 123,
  age: 20,
};

const values = Object.grabValues(object);
console.log(values);
