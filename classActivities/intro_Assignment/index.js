console.log("==========TASK01==========");

/*
## The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

- Store the following into variables: number of children, partner's name, geographic location, job title.
- Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/
const numOfChildren = 10;
const partnerName = "Khadeja";
const geoLocation = "Dubai";
const job = "Software Engineer";

console.log(`You will be a ${job} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`)


console.log("==========TASK02==========");

/*
## The Age Calculator
Want to find out how old you'll be? Calculate it!

- Store your birth year in a variable.
- Store a future year in a variable.
- Calculate your 2 possible ages for that year based on the stored values.
- For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
- Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
*/

const yearOfBirth = 2002;
const futureYear = 2024;

const agePossibilities = [futureYear - yearOfBirth - 1, futureYear - yearOfBirth]

console.log(`I will be either ${agePossibilities[0]} or ${agePossibilities[1]} in ${futureYear}`)

console.log("==========TASK03==========");

/*
## The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

const obj1 = {
    age: 20,
    maxAge: 100,
    amountPerDay: 5
}
const {age, maxAge, amountPerDay} = obj1
console.log(`You will need ${(maxAge - age) * amountPerDay} to last you until the ripe old age of ${maxAge}`)

console.log("==========TASK04==========");

/*
## The Geometrizer
Calculate properties of a circle, using the definitions here.

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/
const radius = 5;

console.log("The circumference is " + Math.round(Math.PI*2*radius));
console.log("The area is " + Math.round(Math.PI * radius * radius));

