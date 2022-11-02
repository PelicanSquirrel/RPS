let opt = ["rock", "paper", "scissors"]


const getUserChoice = () => {
    var user_choice = prompt("Rock, Paper, Scissors: ").toLowerCase()
    console.log(`User: ${user_choice}`)
    return user_choice
}


const getComputerChoice = () => {
    let index = Math.floor(Math.random() * 3)
    let com_choice = opt[index]
    console.log(`Computer: ${com_choice}`)
    return com_choice
}


const rps = (computer, user) => {
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


const game = () => {
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice()
        let user = getUserChoice()
        console.log(rps(computer, user))
    }
}

game()