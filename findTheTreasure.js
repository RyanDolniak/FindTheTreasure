function findTheTreasure(startingPostion, direction, instructions) {
    //this.startingPostion = [];
    //this.direction = "";
    //this.instructions = [""];
    //let instructionsCount = this.instructions.length;

    /*for( let c = 0; c<startingPostion.length; c++) {
        console.log(startingPostion[c]);
    }*/


    let XPostion = startingPostion[0];
    let YPostion = startingPostion[1];
    let gridPosition = [2];

    console.log("Starting at (" + startingPostion[0] +", " + startingPostion[1]
            + ") and facing " + direction);


    for(let i = 0; i<instructions.length; i++){
        if(instructions[i] == "Forward"){
            gridPosition = moveForward(XPostion, YPostion, direction)
            XPostion = gridPosition[0];
            YPostion = gridPosition[1];
        }
        else if(instructions[i] == "Right"){
            direction = turnRight(XPostion, YPostion, direction)
        }
        else if(instructions[i] == "Left"){
            direction = turnLeft(XPostion, YPostion, direction)
        }
    }
}

function moveForward(x, y, direction) {
    let gridPosition = [2];

    if(direction == "North"){
        y++;
    }
    else if(direction == "South"){
        y--;
    }
    else if(direction == "East"){
        x++;
    }
    else if(direction == "West"){
        x--;
    }

    console.log("Moving " + direction + " one pace to (" + x + ", "+ y + ")");

    
    gridPosition[0] = x;
    gridPosition[1] = y;

    return gridPosition;
}

function turnRight(x, y, direction) {
    //this.x ='';
    //this.y = '';
    //this.direction = "";

    if(direction == "North"){
        direction = "East";
    }
    else if(direction == "South"){
        direction = "West";
    }
    else if(direction == "East"){
        direction = "South";
    }
    else if(direction == "West"){
        direction = "North";
    }

    console.log("Turning right to face " + direction);

    return direction;
}

function turnLeft(x, y, direction) {
    //this.x ='';
    //this.y = '';//
    //this.direction = "";

    if(direction == "North"){
        direction = "West";
    }
    else if(direction == "South"){
        direction = "East";
    }
    else if(direction == "East"){
        direction = "North";
    }
    else if(direction == "West"){
        direction = "South";
    }

    console.log("Turning left to face " + direction);

    return direction;
}

 module.exports = {
    turnRight,
    turnLeft,
    moveForward,
    findTheTreasure
 }