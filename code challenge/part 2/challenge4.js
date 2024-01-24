const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i])
    console.log(tip);
    tips.push(tip)
    totals.push(tip + bills[i])
}
console.log(tips);
console.log(totals);

arr = [12, 14, 15, 85, 78]

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}
let average = calcAverage([2, 3, 6])
console.log(average);
console.log(calcAverage(totals));

const a = 23;
