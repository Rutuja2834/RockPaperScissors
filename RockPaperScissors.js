let userScore= 0;
let compScore = 0;

const choices = document.querySelectorAll(".circle");
let result = document.querySelector("#result");
const y_sc = document.querySelector("#y_sc");
const c_sc = document.querySelector("#c_sc");

const gencompChoice = () => {
    let ch = ["rock","paper","scissors"];
    let a=Math.floor(Math.random()*3);
    return ch[a];
}

const draw = () =>{ 
    result.innerText = "Draw! Try Again"
    result.style.backgroundColor = "blue"
}

const winner = (userWin) =>{
     if(userWin){
          userScore++;
          y_sc.innerText = userScore;
          result.innerText = "You Win"
          result.style.backgroundColor = "green"
     } else{
          compScore++;
          c_sc.innerText = compScore;
          result.innerText = "You Lose"
          result.style.backgroundColor = "red"
     }
};

const game = (userChoice) => {
    compChoice = gencompChoice()
    if(userChoice === compChoice){
        draw();
    }else{
       let userWin = true;
       if(userChoice==="rock"){
         userWin = compChoice === "paper"? false : true;
       }else if(userChoice=="paper"){
         userWin = compChoice === "scissors"? false : true;
       }else{
         userWin = compChoice === "rock"? false : true;
       }
       winner(userWin)
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id");
       game(userChoice);
    });
});


