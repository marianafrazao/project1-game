class Trampoline {
    constructor() {
        this.width = 20;
        this.height = 5;
        this.positionX = 50 - this.width / 2;
        this.positionY = 0
        this.domElement = null;

        this.createDomElement();
    }

    createDomElement() {
        this.domElement = document.createElement("div");

        this.domElement.id = "trampoline";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement)
    }
    moveRight() {
        if(this.positionX < 100 - this.width){
        this.positionX += 5
        this.domElement.style.left = this.positionX + "vw"
        }
    }
    moveLeft() {
        if(this.positionX > 0){
            this.positionX -= 5
            this.domElement.style.left = this.positionX + "vw"
        }     
    }
}


class Monkey {
    constructor() {
        this.width = 8;
        this.height = 8;
        this.positionX = 50 - this.width / 2;
        this.positionY = trampoline.height;
        this.directionX = Math.random() < 0.5 ? 1 : -1;
        this.speedX = 1;
        this.speedY = 3;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement("div");

        this.domElement.className = "monkey";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement)
    }

    monkeyJump() {
        this.positionY += this.speedY;
        this.positionX += this.speedX * this.directionX;
        if (this.positionX >= (100-this.width) || this.positionX <= 0) {
            this.directionX *= -1;
        } else if (this.positionY >= (100-this.height)) {
            this.speedY *= -1;
        } 
        this.domElement.style.left = this.positionX + "vw";
        return this.domElement.style.bottom = this.positionY + "vh";
    }
}

//create bed-trampoline
const trampoline = new Trampoline();

//move trampoline according to keyboard
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        trampoline.moveLeft();
    } else if (e.code === 'ArrowRight') {
        trampoline.moveRight();
    }
});

//create 5 monkeys
const monkeys = Array.from({ length: 5 }, () => new Monkey()); 

//create counter of monkeys still in game 
//set counter based on the number of monkeys
let counter = monkeys.length; 
console.log(counter);

//display the counter
const displayCounter = document.querySelector(".counter-display");
displayCounter.positionX = 0;
displayCounter.positionY = 0;
function updateDisplayCounter(){
    displayCounter.innerText = `Monkeys left: ${counter}`;
}
updateDisplayCounter();

//set intervals of monkeys jumps
const intervals = [40, 90, 70, 100, 50]; 

//make monkeys jump
monkeys.forEach((monkey, index) => {
    setInterval(() => {
        monkey.monkeyJump();
        if (
            trampoline.positionX < monkey.positionX + monkey.width &&
            trampoline.positionX + trampoline.width > monkey.positionX &&
            trampoline.positionY < monkey.positionY + monkey.height &&
            trampoline.positionY + trampoline.height > monkey.positionY
        ) {
            //console.log("jump again");
            monkey.speedY *= -1;
            monkey.monkeyJump();
        } else if (monkey.positionY < -8) {
            //fall
            monkey.domElement = null;
            counter--;
            updateDisplayCounter();

            if (counter > 0) {
                // increase monkey speed
                console.log("......incREASE SPEED FOR ALL M........");

                monkeys.forEach((element) => {
                    if (element.speedY >= 0) {
                        element.speedY += 4;
                    } else if (element.speedY <= 0);
                        element.speedY -= 4;
                });
            } else {
                // gameover
                location.href = "gameover.html"
            }
        }
    }, intervals[index]);
}
);





