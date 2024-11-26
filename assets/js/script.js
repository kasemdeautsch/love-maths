

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
                alert(`You clicked ${gameType}`)
            }
        });
    }
});

/**
  The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    let num1=Math.floor(Math.random()*25) + 1;
    let num2=Math.floor(Math.random()*25) + 1;
    let num3=Math.floor(Math.random()*25) + 1;
}


function checkAnswer(){
   

}

function calculateCorrectAnswe(){
    
}

function incrementScore(){
    
}

function incrementwrongAnswer(){
    
}

function checkAnswer(){
    
}

function displayAdditionQuestion(){
    
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivideQuestion(){
    
}