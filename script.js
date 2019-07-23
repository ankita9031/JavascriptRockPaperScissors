/*document.querySelectorAll('.image').forEach(function(element){
    element.addEventListener('click',function(){
    alert('Hi');})
});*/

var uiController = (function(){
    var data = {
        compChoice : 0,
        playerChoice : 0
    };
    
    var displayComputerChoice =  function(){
            let src = "";
            if(data.compChoice == 1){
                src = "images/rock.PNG";
            }else if(data.compChoice == 2){
                src = "images/paper.PNG";
            }else if(data.compChoice == 3){
                src= "images/scissor.PNG";
            }
            document.querySelector('#compImages').innerHTML = '';
            document.querySelector('#compImages').insertAdjacentHTML('afterbegin',`<img src=${src}>`)
    }
    
    var getPlayerChoice = function(src){
        if(src.includes('rock')){
            data.playerChoice = 1;
        }
        else if(src.includes('paper')){
            data.playerChoice = 2;
        }
        else if(src.includes('scissor')){
            data.playerChoice = 3;
        }
    }
    
    return {
        displayPlayerChoice : function(){
            var e = this.parentElement;
            this.parentElement.innerHTML = '';
            var img = this.firstChild.getAttribute('src');
            e.insertAdjacentHTML('afterend',`<img src=${img}>`); 
            displayComputerChoice();
            getPlayerChoice(img);
        },
        getComputerChoice : function(){
            data.compChoice = Math.ceil(Math.random() * 3);
            document.querySelector('#compImages').insertAdjacentHTML('afterbegin',`<img src='images/choice.png'>`)
        },
        getChoices : function(){
            return data;
        }
    }
})();

var scoreController = (function(){
    return {
        getWinner : function(compCh,playerCh){
           if((playerCh == 1 && compCh == 2) || (playerCh == 2 && compCh == 3) || (playerCh == 3 && compCh == 1)){
               return "Computer";
           }else if((playerCh == 1 && compCh ==3) || ( playerCh == 2 && compCh == 1) || ( playerCh ==3 && compCh == 2)){
               return "Player";
           }
        }
    }
})();

var controller = (function(uiCtrl,scoreCtrl){
    //1. Get the choice of computer
   uiCtrl.getComputerChoice();
    //2. Get the choice of player
    //3. Display choice of player
    //4. Display choice of computer
    var setUpEventListeners = function(){
        document.querySelectorAll('.image').forEach(element => element.addEventListener('click',uiCtrl.displayPlayerChoice));
    };
    //5. Calculate the winner
     var data = uiCtrl.getChoices();
            var winner = scoreCtrl.getWinner(0,0);
            //6. Display the winner
           console.log(winner);
   
   return {
       init : function(){
           uiCtrl.getComputerChoice();
           setUpEventListeners();
            var data = uiCtrl.getChoices();
            var winner = scoreCtrl.getWinner(0,0);
            //6. Display the winner
           console.log(winner);
            
       }
   }
})(uiController,scoreController);

controller.init();
/*(function(){
    const choice = Math.ceil(Math.random() * 3);
    let src = "";
    if(choice == 1){
        src = "images/rock.PNG";
    }else if(choice == 2){
        src = "images/paper.PNG";
    }else if(choice == 3){
        src= "images/scissor.PNG";
    }
    document.querySelector('#compImages').insertAdjacentHTML('afterbegin',`<img src=${src}>`)
}());

document.querySelectorAll('.image').forEach( element => element.addEventListener('click', ()=> {
    var e = element.parentElement;
    element.parentElement.innerHTML = '';
    var img = element.firstChild.getAttribute('src');
    e.insertAdjacentHTML('afterend',`<img src=${img}>`);
}))*/;