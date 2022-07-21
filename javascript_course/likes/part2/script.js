var likes=[3,5,11];
var paragraphs=[
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];
function addlike(id){
    likes[id]++;
    console.log(document.querySelector("#post1"));


    paragraphs[id].innerHTML=likes[id]+" like(s)";
}