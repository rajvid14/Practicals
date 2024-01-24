const myCountry = {
    country: "india",
    capital: "delhi",
    language: "hindi",
    population: 140.6,
    neighbours: ["chinna", "dubai", "france"],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring country and a capital called ${this.capital}`
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length == 0 ? true : false;
        return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
