var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

function howMany(i, j, element) {
    let ninjas=0;
    // var x=theDojo;
    let possabilities=[[-1,-1],[-1,0],[-1,1],
                        [0,-1],[0,0],[0,1],
                        [1,-1],[1,0],[1,1]];
        for (let k = 0; k < possabilities.length; k++) {
            let x=possabilities[k][0];
            let y=possabilities[k][1];
            let x1= j+x;
            let y1= i+y;
            // console.log(i+" "+j);
            console.log(x+" "+y);
            console.log(x1+" "+y1);

            console.log(theDojo[i+x][j+y]);
            if(typeof (theDojo[x1][y1]) === 'undefined'){
                console.log("hi")
            }else if(typeof (theDojo[i+x][j+y]) !== 'undefined'){
                ninjas +=theDojo[x1][y1];
            }
        }


        // // we can calculate up down left right
        // //same row 
        // ninjas += x[i][j] + x[i][j+1] + x[i][j-1];
        // // ubove row 
        // ninjas += x[i+1][j] + x[i+1][j+1] + x[i+1][j-1];
        // // bellow row 
        // ninjas += x[i-1][j] + x[i-1][j+1] + x[i-1][j-1];
    
    console.log(ninjas);
    // alert("TODO - determine how many ninjas are hiding in adjacent squares");
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    