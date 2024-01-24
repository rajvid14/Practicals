const populations = [140.6, 1448, 270, 1365]

console.log(populations.length == 4);




const percentageOfWorld = function (population) {
    return (population * 100 / 1000);
}

const percentage = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2])];
console.log(percentage);



