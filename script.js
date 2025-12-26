let userscore= 0;
let compscore= 0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector(".msg-container");
const genCompChoice= () =>{
    const options =["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame =()=>{
    console.log("game was draw");
    msg.innerText="game draw! play again";
    msg.style.backgroundColor="yellow";

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText= userscore++;
        msg.innerText="user win";
        console.log("you win");
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        compScorePara.innerText=compscore++;
        console.log("you lose");
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }

};
const playGame=(userChoice)=>{
    //generate computerchoice
    
    console.log("user choice=",userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice=",compChoice);
    if( userChoice=== compChoice){
        //draw game
        console.log("game draw!play again");
        drawGame();
    }
    else{
        let userWin =true;//it will track user winning
        if(userChoice==="rock"){
            //scissor,paper
            userWin= compChoice==="paper"? false: true;

        }else if(userChoice==="paper"){
            //rock,scissor
            userWin= compChoice==="scissor"? false:true;
        }
        else{
            //paper,rock
            userWin= compChoice==="rock"? false:true;
            showWinner(userWin);

        }

    }

};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was made",userChoice);
        playGame(userChoice);
    });
})