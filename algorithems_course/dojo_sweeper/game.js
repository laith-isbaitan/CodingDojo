var theDojo_old = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var theDojo = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var dojoDiv = document.querySelector("#the-dojo");
function render(theDojo) {
    //setting ninjas in dojo
    var ninjas_pos=[];
    var ninjas_left=10;
    while( ninjas_left != 0){
        var pos_i = Math.floor(Math.random() * (9 - 0) + 0);
        var pos_j = Math.floor(Math.random() * (9 - 0) + 0);
        if (ninjas_pos.indexOf([pos_i,pos_j]) == -1) {
            ninjas_pos.push([pos_i,pos_j]);
            theDojo[pos_i][pos_j] = 1;
            ninjas_left--;
        }
    }
    //setting buttons
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

function howMany(i, j, element) {
    if(theDojo[i][j] == 1){
        document.querySelector("h2").innerHTML="GAME OVER !!!!";
        var btns=document.querySelectorAll('button');
        for (let b = 0; b  < btns.length; b++) {
            btns[b].disabled=true;
        }
        setTimeout(function(){
            window.location.reload(1);
        }, 3000);
    }else{
        let ninjas=0;
        let possabilities=[[-1,-1],[0,-1],[1,-1],
                            [-1,0],[0,0],[1,0],
                            [-1,1],[0,1],[1,1]];
            for (let k = 0; k < possabilities.length; k++) {
                let x=possabilities[k][0];
                let y=possabilities[k][1];
    
                if(typeof (theDojo[i+y])!== 'undefined' && typeof (theDojo[i+y][j+x]) !== 'undefined'){
                    ninjas +=theDojo[i+y][j+x];
                }
            }
        console.log(ninjas);
        element.innerHTML=ninjas;
    }
}

// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    
