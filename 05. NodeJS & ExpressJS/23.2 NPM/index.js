// CommonJS ==> var generateName = require("sillyname");

// Sillyname NPM
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// Superhero NPM
import superheroName from "superheroes";
var name = superheroName.random();

console.log(`I am ${name}!`);