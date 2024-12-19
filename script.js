//We will create the logic of the game

//the declaration of the variables

//Generate a random number=> 

 let randomNumber=Math.floor(Math.random()*100)+1;  //random generator command-variable(it can change)

 //we save elements from "p"
 const guesses=document.querySelector(".guesses");  //constant-it can't change
 const lastResult=document.querySelector(".lastResult");
 const low0rHi=document.querySelector(".low0rHi");

 //We save the reference of elements from "input" with the specified classes

 const guessSubmit=document.querySelector(".guessSubmit");
 const guessField=document.querySelector(".guessField");

 //we save number pf attempts and a generate variable
 //reset button


 let guessCount=1;
 let resetButton; //for creating a reference to the button


 //function
 //there are block of codes that are reusable, we need to write them just one time
 //we can run it over and over again
 //it can repeat the code as many times as needed
 function checkGuess(){
   //conditionals
   //these are the instructions that check a comparison
   //will perform one action or another depending on whether is true or false#
   /* if(condition){when the condition is true
      execution
      when the condition is true
      execution} else { when the condition is false
      execution}*/

   let userGuess=Number(guessField.value);
   //we check if the entered number is equal to the random number

   if(userGuess===randomNumber){
    lastResult.textContent=" WIN 👑";
    lastResult.style.backgroundColor="green";
    low0rHi.textContent="";
    setGameOver();
   } else if(guessCount===10){
    lastResult.textContent = "Game Over 💀";
    setGameOver();
   }
   else {
    lastResult.textContent="Incorrect";
    lastResult.style.backgroundColor="red";
    //we check if the number introduced is higher or lower than the random number
    //we help the player ==>
    if(userGuess<randomNumber){
      low0rHi.textContent="the number is lower";
    }else if(userGuess>randomNumber){low0rHi.textContent="the number is higher";

    }

   }
   guessCount++;
   guessField.value="";
   guessField.focus();
 }
guessSubmit.addEventListener("click",checkGuess);
function setGameOver(){
  guessField.disabled=true;
  guessSubmit.disabled=true;
  resetButton=document.createElement("button");
  resetButton.textContent="try again";
  resetButton.style.backgroundColor="black";
  resetButton.style.color="red";
  resetButton.style.padding="10px";
  resetButton.style.border="1px solid red";
  resetButton.style.borderRadius="5px";
  document.body.append(resetButton);
  resetButton.addEventListener("click",resetGame);
}

function resetGame(){
  guessCount=1;
  const resetParas=document.querySelectorAll(".resultParas p");
  for(let i=0;i<resetParas.length;i++)
  {resetParas[i].textContent="";
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled=false;
  guessSubmit.disabled=false;
  guessField.value="";
  guessField.focus();

  lastResult.style.backgroundColor="black";

  randomNumber=Math.floor(Math.random()*100)+1;
}