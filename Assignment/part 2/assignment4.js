
const describePopulation = function (country, population) {
    const per = percentageOfWorld(population);

    const description = `${country} has ${population} million people,which is about ${per} of the world`;
    console.log(description);
}

const percentageOfWorld = function (population) {
    return population * 100 / 1000;
}

describePopulation("india", 140);