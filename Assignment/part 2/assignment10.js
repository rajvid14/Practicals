const population = [140.6, 250, 500];
const percentageOfWorld = function (population) {
    return (population * 100 / 1000);
}
const percentage2 = [];
for (i = 0; i < population.length; i++) {
    const per = percentageOfWorld(population[i])
    percentage2.push(per)
}
console.log(percentage2);

console.log(population[250].length);