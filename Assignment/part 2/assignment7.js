const myCountry = {
    country: "india",
    capital: "delhi",
    language: "hindi",
    population: 140.6,
    neighbours: ["chinna", "dubai", "france"]
};
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring country and a capital called ${myCountry.capital}`);
myCountry.population += 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry.population);