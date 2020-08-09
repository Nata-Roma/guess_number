let min = 1,
    max = 10,
    secretNumber = getRandomNum(min, max),
    // secretNumber = 3,
    guessesLeft = 3;

const   userNumber = document.querySelector("#number"),
        minNum = document.querySelector(".min-num"),
        maxNum = document.querySelector(".max-num"),
        btn = document.querySelector('.submit'),
        message  = document.querySelector('.message'),
        game = document.querySelector('.row');

minNum.textContent = min;
maxNum.textContent = max;

// Math Random secret number
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// Play again
game.addEventListener('mousedown', function(e) {
    if(e.target.classList.contains('play-again')) {
        window.location.reload();
    }
})

btn.addEventListener('click', function() {

    let guess = parseInt(userNumber.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === secretNumber) {
        gameOver(true, `${secretNumber} is correct, YOU WIN!`);
    } else {
        guessesLeft--;
        if(guessesLeft === 0) {
            gameOver(false, `Game Over, you lost. The correct number was ${secretNumber}`);
            
        } else {
            userNumber.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            userNumber.value = '';
        }
    }
});


function setMessage(text, color) {
    message.style.color = color;
    message.textContent = text;
}

function gameOver(won, message) {

    won ? color = 'green' : color = 'red';
    userNumber.disabled = true;
    userNumber.style.borderColor = color;
    setMessage(message, color);
    btn.value = 'Play Again';
    btn.classList.add('play-again');
}