let computerNumber
let userNumbers = []
let attemps = 0
let maxGuesses = 10

//gerando o numero sorteado
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function newGame() {
    window.location.reload()
}
function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    if (userNumber <= 100) {
        if (!userNumbers.includes(' ' + userNumber)) {
            userNumbers.push(' ' + userNumber)
            document.getElementById('guesses').innerHTML = userNumbers

            if (attemps < 10) {
                if (userNumber > computerNumber) {
                    document.getElementById('textOutput').innerHTML = 'Your number is too high'
                    document.getElementById('inputBox').value = ''
                    attemps++
                    document.getElementById('attempts').innerHTML = attemps
                } else if (userNumber < computerNumber) {
                    document.getElementById('textOutput').innerHTML = 'Your number is too low'
                    document.getElementById('inputBox').value = ''
                    attemps++
                    document.getElementById('attempts').innerHTML = attemps
                } else {
                    if (attemps > 1) {
                        document.getElementById('textOutput').innerHTML = 'Congratulations! You got the number right in ' + attemps + ' attempts...'
                        document.getElementById('inputBox').setAttribute('readonly', 'readonly')
                    } else {
                        document.getElementById('textOutput').innerHTML = 'Congratulations! You got the number right in ' + attemps + ' attempt...'
                        document.getElementById('inputBox').setAttribute('readonly', 'readonly')
                    }
                }

            } else {
                document.getElementById('textOutput').innerHTML = 'Game Over! You lost... The number was ' + computerNumber
                document.getElementById('inputBox').setAttribute('readonly', 'readonly')
                document.getElementById('inputBox').value = ''
            }
        } else {
            document.getElementById('textOutput').innerHTML = 'You already guessed this number'
        }
    } else {
        document.getElementById('textOutput').innerHTML = 'Please enter a number between 1 and 100'
    }
}
