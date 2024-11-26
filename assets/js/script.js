

document.addEventListener('DOMContentLoaded',function(){
    console.log('okk.....')
    let buttons=document.getElementsByTagName('button')
    for(let button of buttons){
        button.addEventListener('click',function(){
            //console.log('clicked')
            console.log(this.getAttribute("data-type"))
            if(this.getAttribute("data-type")==="submit"){
                //alert('You clicked submit')
                checkAnswer();
            }else{
                let gameType=this.getAttribute("data-type")

                //alert(`You clicked ${gameType}`)
                runGame(gameType)
            }
        });
    }
    runGame('addition')
});

/**
  The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    let num1=Math.floor(Math.random()*25) + 1;
    let num2=Math.floor(Math.random()*25) + 1;
    if(gameType==="addition"){
        displayAdditionQuestion(num1,num2);
    }else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * checks the answer against first element retairned in array
 */
function checkAnswer(){
   let useranswer=parseInt(document.getElementById('answer-box').value);
   console.log(useranswer);
   let calculateAnswer=calculateCorrectAnswe();
   console.log(calculateAnswer[0]);
   let isCorrect = useranswer === calculateAnswer[0];
   if(isCorrect){
    alert("Hey! you got it right! :D");
    incrementScore();
   }else{
    alert(`awww.... you answered ${useranswer}. the correct answer was ${calculateAnswer[0]}!`);
    incrementwrongAnswer();
   }
   runGame(calculateAnswer[1])
}
/**
 * gets operands and oprator directly from dom
 */
function calculateCorrectAnswe(){
    let operand1=parseInt(document.getElementById('operand1').innerText);
    let operand2=parseInt(document.getElementById('operand2').innerText);
    let operator=document.getElementById('operator').innerText;

    if(operator==='+'){
        return [operand1+operand2,"addition"]
    }else{
        alert(`Unimplemented oprator ${operator}`);
        throw `Unimplemented oprator ${operator}, Aborting`;
    }
}
/**
 * gets current score value from dom and incr by1 
 */
function incrementScore(){
   let oldScore= parseInt(document.getElementById('score').innerText);
   document.getElementById('score').innerText = ++oldScore;
}

/**
 * gets current tally of incorrect answer from dom and incr by1 
 */
function incrementwrongAnswer(){
    let oldScore= parseInt(document.getElementById('incorrect').innerText);
   document.getElementById('incorrect').innerText = ++oldScore;
    
}

//function checkAnswer(){
    
//}

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent="+";


}


function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivideQuestion(){
    
}