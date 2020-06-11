var timer,timeLimit , textLength , randomText , userText , score , mistackes ;
score = 0 ;
mistackes = 0;
document.querySelector('.btn-start').addEventListener('click',start);
document.querySelector('.btn-new').addEventListener('click',start);

 function start(){
      score = 0 ;
      document.querySelector('#player-name').textContent = "Player Name : " +document.querySelector("input[name='player-name']").value ;
      timeLimit = document.querySelector(".time-limit").value;
      textLength = document.querySelector(".text-length").value;
      if (!timeLimit) timeLimit = 10 ;
      if (!textLength) textLength = 3 ;
      document.querySelector('#initial-page').classList.toggle("hidden");
      document.querySelector('#original-game').classList.toggle("hidden")
      play(timeLimit , textLength);
}


function play(timeLimit , textLength) {
    clearTimeout(timer)
    document.querySelector('#user-text').value = '';
    randomText = generateRandomText(textLength);
    document.querySelector("#text").textContent = randomText;
    document.querySelector("#text").style.background = "white";
    document.addEventListener('keypress', checkKey);
    timer =   setTimeout(function(){
      alert(document.querySelector('#player-name').textContent+"\nTIME IS UP  \nYour score is : "+ score +"\nYour mistackes : "+mistackes);
      window.location.reload();
    },timeLimit*1000);
}

function checkKey(e) {
   if (e.keyCode==13){
     e.preventDefault();
     return checkDataWith(randomText);
   }
}

function checkDataWith(randomText) {
   userText = document.querySelector("#user-text").value;
   if (userText === randomText) {
     score += 5;
     play(timeLimit , textLength);
   }else {
     mistackes ++;
     play(timeLimit , textLength);
   }
   return ;
}

function generateRandomText(textLength){
   var randomString = '';
   var randomAscii;
   for(var i = 0; i < textLength; i++) {
      randomAscii = Math.floor((Math.random() * 95) + 32);
      randomString += String.fromCharCode(randomAscii);
   }
   return randomString;
}
