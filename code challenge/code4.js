const bill1 = 430;
// const bill2 = 40;
// const bill3 = 430;

const tip = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`The bill is ${bill1} the tip was ${tip}, and the total value is ${bill1 + tip}`);