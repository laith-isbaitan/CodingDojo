var likes=3;
function addlike(){
    var para=document.querySelector("#likes");
    likes++;
    para.innerHTML=likes+" like(s)";
}