

function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 100);
    let guessCount = 0
    return function guessNumber(guess) {
        if (guess < randomNumber) {
            ++guessCount;
            return (`$(guess) is too low`);
           
        } else if (guess > randomNumber) {
            ++guessCount;
            return `$(guess) is too high`;
        } else {
            ++guessCount;
            console.log(`You win.  You found $(randomNumber) in $(guessCount) guesses`);
        }
    }
    return
    
}

module.exports = { guessingGame };

