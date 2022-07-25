//inisulize objects and arrays
var hero={
    x: 300,
    y: 400
}
var score=0;
var enemies=[{x:50,y:50},{x:250,y:50},{x:450,y:50},{x: 550, y:250},{x: 120, y:250},{x: 100, y:250},{x: 400, y:250}];
var enemies2=[{x: 150, y: 250}, {x:200, y: 250}, {x: 300, y: 250}];
var bullets=[];

// display on screen 
function displayHero(){
    document.getElementById('hero').style['top']= hero.y + "px";
    document.getElementById('hero').style['left']= hero.x + "px";
}
/////////////////////////////////
function displayEnemies(){
    var output='';
    for(var i=0;i<enemies.length; i++){
        output += "<div class='enemy1' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";
    }
    document.getElementById('enemies').innerHTML=output;
}
function displayEnemies2(){
    var output='';
    for(var i=0;i<enemies2.length; i++){
        output += "<div class='enemy2' style='top:"+enemies2[i].y+"px; left:"+enemies2[i].x+"px;'></div>";
    }
    document.getElementById('enemies2').innerHTML=output;
}
/////////////////////////////////
function displayBullets(){
    var output='';
    for (var i= 0; i<bullets.length; i++){
        output += "<div class ='bullet' style='top:"+bullets[i].y+"px; left:"+bullets[i].x+"px;'></div>";
    }
    document.getElementById('bullets').innerHTML = output;
}

// moving objects 
////////////////////////////////////
function moveEnemies(){
    for(var i=0; i<enemies.length; i++){
        enemies[i].y +=5; 
        if(enemies[i].y > 550){
            enemies[i].y=0;
            enemies[i].x=Math.random()*500;
        }
    }
}
function moveEnemies2(){
    for(var i=0; i<enemies2.length; i++){
        enemies2[i].y +=5; 
        if(enemies2[i].y > 550){
            enemies2[i].y=0;
            enemies2[i].x=Math.random()*500;
        }
    }
}
//////////////////////////////////
function moveBullets(){
    for(var i=0; i<bullets.length; i++){
        bullets[i].y -=5;
        if(bullets[i].y <0){
            bullets[i]=bullets[bullets.length-1];
            bullets.pop();
        }
    }
}
function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    displayBullets();
    moveEnemies2();
    displayEnemies2();
    displayScore()
    detectCollision();
}
setInterval(gameLoop, 50);

document.onkeydown=function(a){
    if(a.keyCode == 37){
        hero.x-=10;
    }else if(a.keyCode==39){
        hero.x +=10;
    }else if(a.keyCode == 38){
        hero.y -= 10;
    }else if(a.keyCode ==40){
        hero.y +=10;
    }else if(a.keyCode==32){
        bullets.push({x: hero.x+6 , y: hero.y-15 });
        displayBullets();
    }
    displayHero();
}

//Collision
///////////////////////////////
function detectCollision(){
    //plane
    for(var i=0; i<enemies.length; i++){
        if(Math.abs(hero.x - enemies[i].x) <5 && Math.abs(hero.y-enemies[i].y) <5){
            score -=500;
        }
    }
    for(var i=0; i<enemies2.length; i++){
        if(Math.abs(hero.x - enemies2[i].x) <5 && Math.abs(hero.y-enemies2[i].y) <5){
            score -=500;
        }
    }
    //explode sound
    var snd = new Audio("./explode.mp3");
    //bullet
    for(var i=0; i<bullets.length; i++){
        for(var j=0; j<enemies.length; j++){
            if (Math.abs(bullets[i].x - enemies[j].x) <10 && Math.abs(bullets[i].y-enemies[j].y)<10){
                score += 10;
                snd.play();
                // document.getElementById('enemy').style.display='none';
                document.elementFromPoint(enemies[i].x, enemies[i].y).style.display='none';
            }
        }
        for(var k=0; k<enemies2.length; k++){
            if (Math.abs(bullets[i].x - enemies2[k].x) <10 && Math.abs(bullets[i].y-enemies2[k].y)<10){
                score += 20;
                snd.play();
                document.elementFromPoint(enemies2[i].x, enemies2[i].y).style.display='none';
            }
        }
    }
}


