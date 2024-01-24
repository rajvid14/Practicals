const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let calcAverageDolphins = calcAverage(44, 23, 71);
console.log(calcAverageDolphins);
let calcAverageKoalas = calcAverage(65, 54, 49);
console.log(calcAverageKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins are winner (${calcAverageDolphins} vs. ${calcAverageKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log("koalas are winners");
    }
    else {
        console.log("no ine is winner!!");
    }
}

console.log(checkWinner(calcAverageDolphins, calcAverageKoalas));

// test 2
calcAverageDolphins = calcAverage(85, 54, 41);
console.log(calcAverageDolphins);
calcAverageKoalas = calcAverage(23, 34, 27);
console.log(calcAverageKoalas);



console.log(checkWinner(calcAverageDolphins, calcAverageKoalas));

