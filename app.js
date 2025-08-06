let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice  = () => {
    const options = ["rock", "paper", "scissor"];
      const randomId = Math.floor(Math.random()* 3);
      return options[randomId];
    //rack,paper,scissor

} ;
 const  drawGame = () => {
    console.log("game was draw.");
     msg.innerText ="GAME DRAW! PLAY AGAINNNNNNNNNN";
      msg.style.backgroundColor ="#008000";
 }; 
    
     const showwinner  =(userwin ,userchoice,compchoice) => {
        if(userwin){
            userScore++;
            userScorePara.innerText = userScore;
            console.log("you win");
            msg.innerText ='YOU WIN!!!!!! Your ${userchoice}  beats ${compchoice}';
            msg.style.backgroundColor ="#ffc0cb";
        } else{
            compScore++;
            compScorePara.innerText = compScore;
            console.log("you lose");
            msg.innerText='YOU LOSEEEEEEEEEE.Your ${compchoice}  beats ${userchoice}';
             msg.style.backgroundColor ="#0000ff";
        }
     }

const playGame = (userchoice ) => {
    console.log (" user choice=" , userchoice);
    // generate computer choice
    const compchoice =genCompChoice();
        console.log (" comp choice=" , compchoice);

        if (userchoice === compchoice) {
            //draw game
            drawGame();
        } else{
            let userwin = true;
            if(userchoice ==="rock"){
                //scissor,paper
                userwin = compchoice === "paper" ? false: true;
            } else if (userchoice === "paper"){
                // rock, scissors 
               userwin = compchoice === "scissors" ? false :true ;
            } else { 
                // rock, paper
                 userwin = compchoice ===" rock" ? false : true;
            }
            showwinner(userwin ,userchoice,compchoice);
        }

};

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
    console.log("choice was clicked " , userchoice);
     playGame(userchoice) ;
    });
});


       
    

    