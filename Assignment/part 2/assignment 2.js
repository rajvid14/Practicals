//function declaration
// function percentageOfWorld1(population) {
//     const worldPopulation = 7900;
//     const percentage = (population * 100) / worldPopulation;
//     return percentage
// }

// const per = percentageOfWorld1(140.6)
// const per1 = percentageOfWorld1(300)
// const per2 = percentageOfWorld1(500)

// console.log(per, per1, per2);

//function expression
const percentageOfWorld1 = function (population) {
    const percentage = (population * 100) / 7900
    return percentage
}

const per = percentageOfWorld1(140.6)
const per1 = percentageOfWorld1(1200)
const per2 = percentageOfWorld1(500)
console.log(per, per1, per2);