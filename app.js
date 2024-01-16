console.log("Working");

const person = {
  name: "Gerald",
  age: 52,
  favouriteColour: "blue",
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.favouriteColour);

person.favouriteFood = "Pizza";
console.log(person);

const car = {
  make: "Nissan",
  model: "Quashquai",
  colour: "Black",
};
console.log(`A lovely example of a ` + car.make, car.model, "in " + car.colour);

const book = {
  title: "The worm",
  author: "Gerald Baalham",
  pages: 427,
};
console.log(
  `The latest in his series ` + book.author,
  "makes this epic " + book.pages,
  `pages of pure gold with ` + book.title,
  "."
);
