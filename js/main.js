class Trampoline {
    constructor() {
        this.width = 20;
        this.heigth = 5;
        this.positionX = 50 - this.width / 2;
        this.positionY = 0
        this.domElement = null;

        this.createDomElement();
    }

    createDomElement() {
        this.domElement = document.createElement("div");

        this.domElement.id = "trampoline";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.heigth + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement)
    }
    moveRight() {
        this.positionX += 1
        this.domElement.style.left = this.positionX + "vw"
    }
    moveLeft() {
        this.positionX -= 1
        this.domElement.style.left = this.positionX + "vw"
    }
}


class Monkey {
    constructor() {
        this.width = 8;
        this.heigth = 8;
        this.positionX = 50 - this.width / 2;
        this.positionY = trampoline.heigth;
        this.directionY = 1;
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
        this.domElement.style.height = this.heigth + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement)
    }

    monkeyJump() {
        this.positionY += this.speedY;
        this.positionX += this.speedX * this.directionX;
        if (this.positionX >= 100 || this.positionX <= 0) {
            this.directionX *= -1;
        }
        if (this.positionY >= 100) {
            this.speedY *= -1;
        }
        this.domElement.style.left = this.positionX + "vw";
        return this.domElement.style.bottom = this.positionY + "vh";
    }
}

//create bed-trampoline
const trampoline = new Trampoline();

//create 5 monkeys
const monkey1 = new Monkey();
const monkey2 = new Monkey();
const monkey3 = new Monkey();
const monkey4 = new Monkey();
const monkey5 = new Monkey();

//move trampoline according to keyboard
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        trampoline.moveLeft();
    } else if (e.code === 'ArrowRight') {
        trampoline.moveRight();
    }
});

//make monkeys jump
setInterval(() => {
    monkey1.monkeyJump();
    if (trampoline.positionX < monkey1.positionX + monkey1.width &&
        trampoline.positionX + trampoline.width > monkey1.positionX &&
        trampoline.positionY < monkey1.positionY + monkey1.heigth &&
        trampoline.positionY + trampoline.heigth > monkey1.positionY
    ) {
        console.log("jump again");
        monkey1.speedY *= -1;
        monkey1.monkeyJump();
    }
}, 150);

setInterval(() => {
    monkey2.monkeyJump();
    if (trampoline.positionX < monkey2.positionX + monkey2.width &&
        trampoline.positionX + trampoline.width > monkey2.positionX &&
        trampoline.positionY < monkey2.positionY + monkey2.heigth &&
        trampoline.positionY + trampoline.heigth > monkey2.positionY
    ) {
        console.log("jump again");
        monkey2.speedY *= -1;
        monkey2.monkeyJump();
    }
}, 180);

setInterval(() => {
    monkey3.monkeyJump();
    if (trampoline.positionX < monkey3.positionX + monkey3.width &&
        trampoline.positionX + trampoline.width > monkey3.positionX &&
        trampoline.positionY < monkey3.positionY + monkey3.heigth &&
        trampoline.positionY + trampoline.heigth > monkey3.positionY
    ) {
        console.log("jump again");
        monkey3.speedY *= -1;
        monkey3.monkeyJump();
    }
}, 90);

setInterval(() => {
    monkey4.monkeyJump();
    if (trampoline.positionX < monkey4.positionX + monkey4.width &&
        trampoline.positionX + trampoline.width > monkey4.positionX &&
        trampoline.positionY < monkey4.positionY + monkey4.heigth &&
        trampoline.positionY + trampoline.heigth > monkey4.positionY
    ) {
        console.log("jump again")
        monkey4.speedY *= -1;
        monkey4.monkeyJump();
    }
}, 110);

setInterval(() => {
    monkey5.monkeyJump();
    if (trampoline.positionX < monkey5.positionX + monkey5.width &&
        trampoline.positionX + trampoline.width > monkey5.positionX &&
        trampoline.positionY < monkey5.positionY + monkey5.heigth &&
        trampoline.positionY + trampoline.heigth > monkey5.positionY
    ) {
        console.log("jump again");
        monkey5.speedY *= -1;
        monkey5.monkeyJump();
    }
}, 250);

//create down counter for game over


let counter = 5
//contar o número de macacos dentro de jogo
//o número de macacos em jogo é o número de monkeys com positionY>0
//se chegar a 0, perdi o jogo
if (counter === 0) {
    console.log("game over")
}


