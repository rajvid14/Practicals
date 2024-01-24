const population = [140.6, 250, 500];
const percentageOfWorld = function (population) {
    return (population * 100 / 1000);
}
const percentage2 = [];
i = 0;
while (i < population.length) {
    const per = percentageOfWorld(population[i])
    percentage2.push(per)
    i++
}
console.log(percentage2);

