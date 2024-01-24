// !assignment 1
let country = "India";

let continent = "Asia";

let population = 130.76;

console.log("My country Name: " + country);
console.log("continent of india is:" + continent);
console.log("population of indisa is:" + population);

//!assignment 2 
let isIsland = false;
let language;

console.log(typeof isIsland);

console.log(typeof population);

console.log(typeof country);

console.log(typeof language);

// !assignment 3
language = "chinease";
country = "china";

// !assignment 4
let peopleInCountry = population / 2;
console.log(peopleInCountry);
console.log(peopleInCountry++);

const finelandPopulation = 6;
console.log(population > finelandPopulation);

const avgPopulation = 33;
console.log(population < avgPopulation);

const description = country + " is in " + continent + ",and its " + population + " million people speak " + language;
console.log(description);

// !assignment 5

const desc = `${country} is in ${continent} , and its ${population} million people speak ${language}`;
console.log(desc);

// !assignment 6
if (population > avgPopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million 
 below average`,
    )
}

// !assignment 7
console.log('9' - '5'); //4
console.log('19' - '13' + +'17');//617
console.log('19' - '13' + 17);
console.log(!'123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);



