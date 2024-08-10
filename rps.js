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
    const result = document.getElementById("commentator");
    const score = document.getElementById("scoreboard");

    rock.addEventListener("click", function(){
        playRound("rock", getComputerChoice());
    });
    paper.addEventListener("click", function(){
        playRound("paper", getComputerChoice());
    });
    scissors.addEventListener("click", function(){
        playRound("scissors", getComputerChoice());
    });

    function deleteButtons(){
        rock.remove();
        paper.remove();
        scissors.remove();
    };

    function announceWinner(winner){
        if(winner === "human"){
            result.textContent = "You have defeated the computer!";
        }else if(winner === "computer"){
            result.textContent = "You have been defeated by the computer!";
        }
    };

    let humanScore = 0;
    let computerScore = 0;

    //Start round
    function playRound(humanChoice, computerChoice){
        //Rock cases
        if (humanChoice === "rock"){
            if(computerChoice === "paper"){
                computerScore++;
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
                if(computerScore < 5 && humanScore < 5){
                    result.textContent = "You lose! Paper beats rock!";
                }else{
                    deleteButtons();
                    if(humanScore === 5) announceWinner("human");
                    else announceWinner("computer");
                }
            }else if(computerChoice === "scissors"){
                humanScore++;
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
                if(computerScore < 5 && humanScore < 5){
                    result.textContent = "You win! Rock beats scissors! ";
                }else{
                    deleteButtons();
                    if(humanScore === 5) announceWinner("human");
                    else announceWinner("computer");
                }
            }else{
                result.textContent = "It's a draw!";
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
            }
        } //Paper cases
        else if(humanChoice === "paper" ){
            if(computerChoice === "scissors"){
                computerScore++;
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
                if(computerScore < 5 && humanScore < 5){
                    result.textContent = "You lose! Scissors beats paper!";
                }else{
                    deleteButtons();
                    if(humanScore === 5) announceWinner("human");
                    else announceWinner("computer");
                }
            }else if(computerChoice === "rock"){
                humanScore++;
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
                if(computerScore < 5 && humanScore < 5){
                    result.textContent = "You win! Paper beats rock!";
                }else{
                    deleteButtons();
                    if(humanScore === 5) announceWinner("human");
                    else announceWinner("computer");
                }
            }else{
                result.textContent = "It's a draw!";
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
            }
        } //Scissors cases
        else if(humanChoice === "scissors"){
            if(computerChoice === "rock"){
                computerScore++;
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
                if(humanScore < 5 && computerScore < 5){
                    result.textContent = "You lose! Rock beats scissors!";
                }else{
                    deleteButtons();
                    if(humanScore === 5) announceWinner("human");
                    else announceWinner("computer"); 
                }
            }else if(computerChoice === "paper"){
                humanScore++;
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
                if(humanScore < 5 && computerScore < 5){
                    result.textContent = "You win! Scissors beats paper!";
                }else{
                    deleteButtons();
                    if(humanScore === 5) announceWinner("human");
                    else announceWinner("computer");
                }
            }else{
                result.textContent = "It's a draw!";
                score.textContent = "You: " + humanScore + " Computer: " + computerScore;
            }
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
