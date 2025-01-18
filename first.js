let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreDetails=document.querySelector("#user-score");
const compScoreDetails=document.querySelector("#comp-score");

const genCompChoice= () => {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=() => {
msg.innerText="Game Was Draw.Play Again";
msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreDetails.innerText=userScore;

        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else {
        compScore++;
        compScoreDetails.innerText=compScore;

        console.log("You Lose");
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice) => {
   console.log("User Choice=",userChoice);
   //generate computer choice
   const compChoice=genCompChoice();
   console.log("Computer Choice=",compChoice);

if(userChoice===compChoice){
    //draw game
    drawGame();
} else {
    let userWin=true;
    if(userChoice==="rock") {
        //paper,scissors
        userWin = compChoice === "paper" ? false : true ;
    } else if (userChoice === "paper") {
        //scissors,rock
        userWin = compChoice === "scissors" ? false : true ;
    } else {
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice) =>{
   choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id"); 
        playGame(userChoice);
    });
});