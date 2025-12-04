import generateName from "sillyname";

const sillyname = generateName();
console.log(`My name is ${sillyname}`);

import superheroes, { randomSuperhero } from "superheroes";

var superhero = randomSuperhero(); //using the named export
console.log(`I am ${superhero}`);

var hero = superheroes[Math.floor(Math.random() * superheroes.length)]; // using the default export
console.log(`I'm ${hero}`);
