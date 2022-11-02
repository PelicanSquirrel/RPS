let opt = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3)
    let com_choice = opt[index]
    return com_choice
}

let computer = getComputerChoice()
console.log(computer)