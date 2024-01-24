const markMass = 78;
const markHeight = 1.69;


const johnMass = 92;
const johnHeight = 1.95;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi);
console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);

// ! challenge 2
if (markHigherBMI) {
    console.log("mark's BMI is higher than john's!");
}
else {
    console.log("John's BMI is higher than mark's!");
}

// using template literal
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBmi} is higher than john's ${johnBmi}!`);
}
else {
    console.log(`Mark's BMI ${markBmi} is higher than john's ${johnBmi}!`);
}

// !chellenge 3
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

let dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
let koalasAverage = ((koalas1 + koalas2 + koalas3) / 3);

console.log(dolphinsAverage);
console.log(koalasAverage);

if (dolphinsAverage >= koalasAverage) {
    console.log("dolphins are winners!!");
}
else if (dolphinsAverage == koalasAverage) {
    console.log("here is the draw between two team!!");
}
else {
    console.log("koalas are winners!!");
}

//bonus1
let dolphinScore = (97 + 112 + 101) / 3;
let koalasScore = (109 + 95 + 123) / 3;
console.log(dolphinScore, koalasScore);

if (dolphinScore > koalasScore && dolphinScore >= 100) {
    console.log("dolphin is winner!!");
}
else if (koalasScore > dolphinScore && koalasScore >= 100) {
    console.log("koalas is winner!");
}
else {
    console.log("both is winner");
}

//bonus 2
dolphinScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 106) / 3;
console.log(dolphinScore, koalasScore);

if (dolphinScore > koalasScore && dolphinScore >= 100) {
    console.log("dolphin is winner!!");
}
else if (koalasScore > dolphinScore && koalasScore >= 100) {
    console.log("koalas is winner!");
}
else if (dolphinScore === koalasScore && dolphinScore >= 100 && koalasScore >= 100) {
    console.log("both is winner");
}
else {
    console.log("no one is winner!!")
}
