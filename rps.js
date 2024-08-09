//Get computer choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

/*//Get user input
function getHumanChoice(){
    let choice = prompt("Select rock, paper, or scissors.");
    return choice;
}*/

//Play game up to 5
function playGame(){
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const result = document.querySelector("h3");

    rock.addEventListener("click", function(){
        console.log("rock");
        playRound("rock", getComputerChoice());
    });
    paper.addEventListener("click", function(){
        console.log("paper");
        playRound("paper", getComputerChoice());
    });
    scissors.addEventListener("click", function(){
        console.log("scissors");
        playRound("scissors", getComputerChoice());
    });

    let humanScore = 0;
    let computerScore = 0;
    //Start round
    function playRound(humanChoice, computerChoice){
        if(humanScore < 4 && computerScore < 4){
            //Rock cases
            if (humanChoice === "rock"){
                if(computerChoice === "paper"){
                    computerScore++;
                    result.textContent = "You lose! " + "You: " + humanScore + " Computer: " + computerScore;
                }else if(computerChoice === "scissors"){
                    humanScore++;
                    result.textContent = "You win! " + "You: " + humanScore + " Computer: " + computerScore;
                }else{
                    result.textContent = "It's a draw! " + "You: " + humanScore + " Computer: " + computerScore;
                }
            } //Paper cases
            else if(humanChoice === "paper" ){
                if(computerChoice === "scissors"){
                    computerScore++;
                    result.textContent = "You lose! " + "You: " + humanScore + " Computer: " + computerScore;
                }else if(computerChoice === "rock"){
                    humanScore++;
                    result.textContent = "You win! " + "You: " + humanScore + " Computer: " + computerScore;
                }else{
                    result.textContent = "It's a draw! " + "You: " + humanScore + " Computer: " + computerScore;
                }
            } //Scissors cases
            else if(humanChoice === "scissors"){
                if(computerChoice === "rock"){
                    computerScore++;
                    result.textContent = "You lose! " + "You: " + humanScore + " Computer: " + computerScore;
                }else if(computerChoice === "paper"){
                    humanScore++;
                    result.textContent = "You win! " + "You: " + humanScore + " Computer: " + computerScore;
                }else{
                    result.textContent = "It's a draw! " + "You: " + humanScore + " Computer: " + computerScore;
                }
            }
        }else{
            let winner = '';
            if(humanScore === 5) result.textContent = "You win!";
            else result.textContent = "You lose!";

        }
    }
        /*//Game will not end until either user score or computer score gets to 5
        while(humanScore < 5 && computerScore < 5){
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }*/

}

playGame();
