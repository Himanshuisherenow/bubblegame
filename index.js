


var time = 6;
var scoreIs = 0;
var hitrn  ;
let timex = document.querySelector("#timeval")


function makeBubble(){
    var clutter ="";
for(var i = 1;i <= 152; i++){

    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {

    var timer = setInterval(
    
        function(){
            if(time > 0){
                time--;
                timex.textContent = time;
            }else{
                clearInterval(timer)
                let last = document.querySelector("#pbtm");
                last.innerHTML= `<h1>GAME OVER</h1>you can play again`;
                last.style.fontSize = '60px';
                
              
                
                timex.textContent = 60;
            }
        },1000);
}
function increase(){
    scoreIs += 10;
    document.querySelector("#score").textContent = scoreIs;

}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#number").textContent = hitrn;
}
 
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickednum = Number(dets.target.textContent);//you will get dets.target detail  here div which have clicked
   if(clickednum === hitrn){
    increase();
    makeBubble();
    getNewHit();
   }
});

runTimer();
makeBubble();
getNewHit();
some();


