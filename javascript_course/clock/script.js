function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

var sec=document.querySelector("#seconds");
var hour=document.querySelector("#hour");
var min=document.querySelector("#minutes");

function timeofhour(time){
    return((time%43200 /3600)+180) % 360;
}
function timeofmin(time){
    return((time%3600 /60)+180) % 360;
}
function timeofsec(time){
    return ((time%60 +180) % 360);
}
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    sec.style.transform=`rotate(${timeofsec(time)}deg)`;
    min.style.transform=`rotate(${timeofmin(time)}deg)`;
    hour.style.transform=`rotate(${timeofhour(time)}deg)`;
}, 1000);