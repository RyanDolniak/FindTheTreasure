import { findTheTreasure } from 'findTheTreasure.js'


let startingPostion = [];
let direction = "";
let instructions = [6];

//starting postion
console.log("Starting Postion X: ");
startingPostion[0] = prompt();
console.log("Starting Postion Y: ");
startingPostion[1] = prompt();

//starting direction (North, South, East, West)
console.log("Starting Direction: ");
direction = prompt();

//instructions (forward, down, left, right)
console.log("Instructions: ");
for( let j = 0; j<6; j++){
    instructions[j] = promt();
}

findTheTreasure(startingPostion, direction, instructions);
