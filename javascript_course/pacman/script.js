// 0=empty, 1=coin, 2=wall, 3=bannana, 4=die ,5=enemy
var world=[
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,2,2,2,1,1,2,2,2,1,1,2],
    [2,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2],
    [2,1,2,2,2,2,2,1,1,1,2,1,3,1,1,2,1,1,3,2],
    [2,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,3,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,2,2,2,1,1,2,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

var pacman={
    x:1,
    y:1,
    score:0
};
var pacman2={
    x:1,
    y:5,
};
var enemy={
    x:8,
    y:3
};

function displayWorld(){
    var output='';
    for(var i=0; i < world.length; i++){
        output+="<div class='row'>"
        for(var j=0; j < world[i].length; j++){
            if(world[i][j]== 2){
                output+="<div class='brick'></div>"
            }else if(world[i][j]== 1){
                output+="<div class='coin'></div>"
            }else if(world[i][j]== 0){
                output+="<div class='empty'></div>"
            }else if(world[i][j]== 3){
                output+="<div class='bannana'></div>"
            }else if(world[i][j]== 4){
                output+="<div class='die'></div>"
            }
        }
        output+="</div>"
    }
    document.getElementById('world').innerHTML=output;
}
function displaypacman(){
    if(document.getElementById('pacman')!=null){
        document.getElementById('pacman').style.top=pacman.y*20+"px";
        document.getElementById('pacman').style.left=pacman.x*20+"px";
    }
}
function displaypacman2(){
    if(document.getElementById('pacman2')!=null){
        document.getElementById('pacman2').style.top=pacman2.y*20+"px";
        document.getElementById('pacman2').style.left=pacman2.x*20+"px";
    }
}
function displayenemy(){
    document.querySelector('.enemy').style.top=enemy.y*20+"px";
    document.querySelector('.enemy').style.left=enemy.x*20+"px";
}
function displayscore(){
    document.getElementById('score').innerHTML=pacman.score;
}
displayWorld();
displaypacman();
displaypacman2();
displayenemy();

// enemy moves
setInterval( function() {
    // 1=left , 2=top, 3=right, 4=bot 
    var rand=Math.round(Math.random()*(4-1)+1);
    // console.log(rand);
    if(rand==1 && world[enemy.y][enemy.x-1]!=2){
        enemy.x--;
    }else if(rand==3 && world[enemy.y][enemy.x+1]!=2){
        enemy.x++;
    }else if(rand==2 && world[enemy.y-1][enemy.x]!=2){
        enemy.y--;
    }else if(rand==4 && world[enemy.y+1][enemy.x]!=2){
        enemy.y++;
    }
    displayenemy();
}, 500);

// player moves
document.onkeydown=function(e){
    // move players
    // player1
    // left righ top bot
    if(document.getElementById('pacman')!=null){

        if(e.keyCode==37 && world[pacman.y][pacman.x-1]!=2){
            document.getElementById('pacman').style.transform=`rotate(180deg)`;
            pacman.x--;
        }else if(e.keyCode==39 && world[pacman.y][pacman.x+1]!=2){
            document.getElementById('pacman').style.transform=`rotate(0deg)`;
            pacman.x++;
        }else if(e.keyCode==38 && world[pacman.y-1][pacman.x]!=2){
            document.getElementById('pacman').style.transform=`rotate(270deg)`;
            pacman.y--;
        }else if(e.keyCode==40 && world[pacman.y+1][pacman.x]!=2){
            document.getElementById('pacman').style.transform=`rotate(90deg)`;
            pacman.y++;
        }
    }
    // player2
    if(document.getElementById('pacman2')!=null){
        if(e.keyCode==65 && world[pacman2.y][pacman2.x-1]!=2){
            document.getElementById('pacman2').style.transform=`rotate(180deg)`;
            pacman2.x--;
        }else if(e.keyCode==68 && world[pacman2.y][pacman2.x+1]!=2){
            document.getElementById('pacman2').style.transform=`rotate(0deg)`;
            pacman2.x++;
        }else if(e.keyCode==87 && world[pacman2.y-1][pacman2.x]!=2){
            document.getElementById('pacman2').style.transform=`rotate(270deg)`;
            pacman2.y--;
        }else if(e.keyCode==83 && world[pacman2.y+1][pacman2.x]!=2){
            document.getElementById('pacman2').style.transform=`rotate(90deg)`;
            pacman2.y++;
        }
    }

    // check collisions
    // score 
    if(document.getElementById('pacman')!=null){
        if(world[pacman.y][pacman.x]==1){
            world[pacman.y][pacman.x]=0;
            pacman.score++;
            displayscore();
            displayWorld();
        }
        if(world[pacman.y][pacman.x]==3){
            world[pacman.y][pacman.x]=0;
            pacman.score+= 50;
            displayscore();
            displayWorld();
        }
    }
    if(document.getElementById('pacman')!=null){
        if(world[pacman2.y][pacman2.x]==1){
            world[pacman2.y][pacman2.x]=0;
            pacman.score++;
            displayscore();
            displayWorld();
        }
        if(world[pacman2.y][pacman2.x]==3){
            world[pacman2.y][pacman2.x]=0;
            pacman.score+= 50;
            displayscore();
            displayWorld();
        }
    }
    // enemy 
    if(document.getElementById('pacman')!=null){
        if(pacman.y==enemy.y && pacman.x==enemy.x){
            document.getElementById('pacman').remove();
            document.getElementById('messages').innerHTML='Player 1 DIED!!';
            world[pacman.y][pacman.x]=4;
            displayWorld();
        }
    }
    if(document.getElementById('pacman2')!=null){
        if(pacman2.y==enemy.y && pacman2.x==enemy.x){
            document.getElementById('pacman2').remove();
            document.getElementById('messages').innerHTML='Player 2 DIED!!';
            world[pacman2.y][pacman2.x]=4;
            displayWorld();
        }
    }
    displaypacman();
    displaypacman2();
}