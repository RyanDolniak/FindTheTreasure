const { findTheTreasure } = require('./findTheTreasure.js');
const prompt=require("prompt-sync")({sigint:true});





let startingPostion = [2];
let direction = "";
let instructions = [6];

//starting postion
console.log("Starting Postion X: ");
startingPostion[0] = prompt();
console.log("Starting Postion Y: ");
startingPostion[1] = prompt();

/*for( let c = 0; c<startingPostion.length; c++) {
    console.log(startingPostion[c]);
}*/

//starting direction (North, South, East, West)
console.log("Starting Direction: ");
direction = prompt();

//instructions (forward, down, left, right)
console.log("Instructions: ");
for( let j = 0; j<6; j++){
    instructions[j] = prompt();
}

findTheTreasure(startingPostion, direction, instructions);
