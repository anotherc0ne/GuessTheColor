function generateRandomColor() {
    const chars = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomColor += chars[randomIndex];
    }
    return randomColor;
}

function setBackgroundColor() {
    const colorOne = generateRandomColor();
    const colorTwo = generateRandomColor();
    const colorThree = generateRandomColor();
    const colorFour = generateRandomColor();
    document.getElementById("colorOne").style.backgroundColor = colorOne;
    document.getElementById("colorTwo").style.backgroundColor = colorTwo;
    document.getElementById("colorThree").style.backgroundColor = colorThree;
    document.getElementById("colorFour").style.backgroundColor = colorFour;
    return [colorOne, colorTwo, colorThree, colorFour];
}

function checkAnswer(clickedColor, correctColor) {
    const answerMessage = document.getElementById("result");
    if (clickedColor === correctColor) {
        answerMessage.innerHTML = "Correct!";
    } else {
        answerMessage.innerHTML = "Incorrect. Try again!";
    }
}

function convertRGBToHex(color) {
    const rgbValues = color.substring(4, color.length - 1).split(', ');
    const hexValues = rgbValues.map(val => {
        const hex = parseInt(val).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    });
    return '#' + hexValues.join('');
}

function resetGame() {
    const colorValue = document.getElementById("colorValue");
    colorValue.innerHTML = "Current color: ";

    const answerMessage = document.getElementById("result");
    answerMessage.innerHTML = "";

    initializeGame(); // Reinitialize the game with new colors
}

function initializeGame() {
    colors = setBackgroundColor();
    console.log(colors)
    const correctColorIndex = Math.floor(Math.random() * colors.length);
    const correctColor = colors[correctColorIndex]
    console.log(colors[correctColorIndex])
    const colorValue = document.getElementById("colorValue");
    colorValue.innerHTML += correctColor

    const buttons = document.getElementsByClassName('colorButton');
    for (const button of buttons) {
        button.addEventListener('click', function () {
            const clickedColor = convertRGBToHex(this.style.backgroundColor);
            clickedColorUpperCase = clickedColor.toUpperCase();
            console.log(clickedColorUpperCase);
            checkAnswer(clickedColorUpperCase, correctColor);
        });
    }
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', resetGame);
}

window.onload = initializeGame;