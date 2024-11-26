

document.addEventListener('DOMContentLoaded',function(){
    console.log('okk.....')
    let buttons=document.getElementsByTagName('button')
    for(let button of buttons){
        button.addEventListener('click',function(){
            //console.log('clicked')
            //console.log(this)
            if(this.getAttribute("data-type")==="submit"){
                alert('You clicked submit')
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


function checkAnswer(){
   

}
/**
 * gets operands and oprator directly from dom
 */
function calculateCorrectAnswe(){
    let operand1=parseInt(document.getElementById('operand1').innerText)
    let operand2=parseInt(document.getElementById('operand2').innerText)
    let operator=parseInt(document.getElementById('operator').innerText)

    if(operator==='+'){
        return [operand1+operand1,"addition"]
    }else{
        alert(`Unimplemented oprator ${operator}`);
        throw `Unimplemented oprator ${operator}, Aborting`;
    }
}

function incrementScore(){
    
}

function incrementwrongAnswer(){
    
}

function checkAnswer(){
    
}

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