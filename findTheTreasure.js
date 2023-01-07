function findTheTreasure(startingPostion, direction, instructions) {
    //this.startingPostion = [];
    //this.direction = "";
    //this.instructions = [""];
    //let instructionsCount = this.instructions.length;
    let XPostion = this.startingPostion[0];
    let YPostion = this.startingPostion[1];


    console.log("Starting at (" + this.startingPostion[0] +", " + this.startingPostion[1]
            + ") and facing " + this.direction);


    for(let i = 0; i<this.instructions.length; i++){
        if(this.instruction = "Forward"){
            moveForward(this.XPostion, this.YPostion, this.direction)
        }
        if(this.instruction = "Right"){
            moveForward(this.startingPostion[0], this.startingPostion[1], this.direction)
        }
        if(this.instruction = "Left"){
            moveForward(this.startingPostion[0], this.startingPostion[1], this.direction)
        }
    }
}

function moveForward(x, y, direction) {
    //this.x ='';
    //this.y = '';
    //this.direction = "";

    if(this.direction = "North"){
        this.y++;
    }
    if(this.direction = "South"){
        this.y--;
    }
    if(this.direction = "East"){
        this.x++;
    }
    if(this.direction = "West"){
        this.x--;
    }

    console.log("Moving " + this.direction + " one pace to (" + x + ", "+ y + ")");
}

function turnRight(x, y, direction) {
    //this.x ='';
    //this.y = '';
    //this.direction = "";

    if(this.direction = "North"){
        this.direction = "East";
    }
    if(this.direction = "South"){
        this.direction = "West";
    }
    if(this.direction = "East"){
        this.direction = "South";
    }
    if(this.direction = "West"){
        this.direction = "North";
    }

    console.log("Turning right to face" + this.direction);
}

function turnLeft(x, y, direction) {
    //this.x ='';
    //this.y = '';//
    //this.direction = "";

    if(this.direction = "North"){
        this.direction = "West";
    }
    if(this.direction = "South"){
        this.direction = "East";
    }
    if(this.direction = "East"){
        this.direction = "North";
    }
    if(this.direction = "West"){
        this.direction = "South";
    }

    console.log("Turning left to face" + this.direction);
}

 module.exports = {
    turnRight,
    turnLeft,
    moveForward,
    findTheTreasure
 }