let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_Score=document.querySelector("#user-score");
const comp_Score=document.querySelector("#comp-score");

const getcompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawGame=() =>{
    console.log("Game was draw");
    msg.innerText="Game was draw,Play again.";
     msg.style.backgroundColor=" rgb(2, 2, 49)";
}
 const showWinner=(userWin,userChoice,compChoice) =>{
        if(userWin){
            userScore++;
            user_Score.innerText=userScore ;
            console.log("You win !");
            msg.innerText=`You win !.your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            compScore++;
            comp_Score.innerText=compScore;
            console.log("You lose !")
            msg.innerText=`You lost !.${compChoice} beats your ${userChoice}`;
             msg.style.backgroundColor="red";
        }
    };
const playGame=(userChoice) =>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice=getcompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice===compChoice){
          drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //copm gen scissers or paper
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // rock,scissors
          userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,scissors
            userWin=compChoice==="rock"?false:true;
        }
         showWinner(userWin,userChoice,compChoice);
    }

   
    };
choice.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice,);
       
    })
});