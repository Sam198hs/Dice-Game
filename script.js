
const diceImages= [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]

function rollDice() {

const randomNumber1= Math.floor (Math.random()*6);
const randomNumber2= Math.floor (Math.random()*6);


const img1= diceImages[randomNumber1];
const img2= diceImages[randomNumber2];

const dice1Element = document.querySelector(".Dice_1"); // Use querySelector for clarity
    const dice2Element = document.querySelector(".Dice_2");

    if (dice1Element) { 
        dice1Element.src = img1;
        dice1Element.alt = `Dice ${randomNumber1 + 1}`;
    }

    if (dice2Element) {
        dice2Element.src = img2;
        dice1Element.alt = `Dice ${randomNumber2 + 1}`;
    }

    const resultDiv = document.getElementById("result");
    if (randomNumber1 > randomNumber2) {
    resultDiv.textContent = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
    resultDiv.textContent = "Player 2 wins!";
    } else {
    resultDiv.textContent = "It's a draw!";
    }
}


