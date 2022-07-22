function accept_cookie(){
    var foot=document.querySelector("footer");
    foot.remove();
}
function city(element){
    var city=element.innerHTML;
    alert(city+ " displayed an alert");
}
function tempreture(element){
    if(element.value == "F"){
            var change=document.querySelectorAll(".red");
            var change2=document.querySelectorAll(".blue");
            var i=0;
            while(i<4){
                change[i].innerHTML=change[i].innerHTML/2;
                change2[i].innerHTML=change[i].innerHTML/2;
                i++;
            }
    }else{
        var change=document.querySelectorAll(".red");
        var change2=document.querySelectorAll(".blue");
        var i=0;
        while(i<4){
            change[i].innerHTML=change[i].innerHTML*2;
            change2[i].innerHTML=change[i].innerHTML*2;
            i++;
        }
       }
}