function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

var sec=document.querySelector("#seconds");
var hour=document.querySelector("#hour");
var min=document.querySelector("#minutes");

function timeofhour(time){
    time %= 43200;
    // because we want out of 12 not 60
    time *= 60/12;
    return(((6*time)/3600)+180) % 360;
}
function timeofmin(time){
    time %= 3600;
    return(((6*time)/60)+180) % 360;
}
function timeofsec(time){
    time %= 60;
    return ((6*time +180) % 360);
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    sec.style.transform=`rotate(${timeofsec(time)}deg)`;
    min.style.transform=`rotate(${timeofmin(time)}deg)`;
    hour.style.transform=`rotate(${timeofhour(time)}deg)`;
}, 1000);