const neighbours = ["chinna", "dubai", "france"]
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("probably not a central European country :D ");
}

neighbours[neighbours.indexOf("dubai")] = 'republic of dubai';
console.log(neighbours);

