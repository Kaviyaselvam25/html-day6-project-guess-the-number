
var random=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++;
    var guess=parseInt(document.getElementById('guessinput').value);
    if(guess==random){
        display("Wow!! You guess the number in-"+attempt);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Ohh! Too low,give a big one")
    }
    else if(guess>random){
        display("Ahh!! Too high,think a small number");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;
}