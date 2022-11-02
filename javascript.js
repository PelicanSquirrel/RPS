let opt = ["rock", "paper", "scissors"]

function getUserChoice() {
    var user_choice = prompt("Rock, Paper, Scissors: ").toLowerCase()
    console.log(`User: ${user_choice}`)
    return user_choice
}


function getComputerChoice() {
    let index = Math.floor(Math.random() * 3)
    let com_choice = opt[index]
    console.log(`Computer: ${com_choice}`)
    return com_choice
}


function RPS(computer, user) {
    if ((computer === "rock" && user === "scissors") ||
       (computer === "paper" && user === "rock") ||
       (computer === "scissors" && user === "paper")) {
        return `Sorry, ${computer} beats ${user}, you lose.`
    }
    else if (computer === user) {
        return `Ohh, you both picked ${user}. It's a tie!`
    }
    else {
        return `Congrats, ${user} beats ${computer}, you win!`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice()
        let user = getUserChoice()
        console.log(RPS(computer, user))
    }
}

game()