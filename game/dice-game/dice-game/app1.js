/*
GAME RULES:
- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
- - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,roundscore,activeplayer,gameplaying;

function init()
{
score=[0,0];
roundscore=0;
activeplayer=0;
gameplaying=true;
activeplayer=0;
document.querySelector('.dice').style.display='none';

document.getElementById('score-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';


document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
}
init();
function rollbutton(){
    
    if(gameplaying){
    var previous=dice;
    var dice= Math.floor(Math.random()*6)+1;
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
    if(dice === previous&& previous !==6){
        roundscore+=dice;
        document.querySelector('#current-'+activeplayer).textContent=roundscore;
    }
    else{
        nextplayer();   
    }
    
    }
    
}
function holdbutton()
{
    if(gameplaying){
        score[activeplayer]+=roundscore;
        document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
        if(score[activeplayer]>=100){
            document.getElementById('name-'+activeplayer).textContent='WINNER';
            document.getElementById('current-'+activeplayer).textContent='0';
            document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
            document.querySelector('.dice').style.display='none';
            gameplaying=false;
        }
        else{
            nextplayer();
        }
    }
}

function nextplayer(){
    score[activeplayer]=0;
    document.getElementById('score-'+activeplayer).textContent='0';
    activeplayer===1?activeplayer=0:activeplayer=1;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',init);
document.querySelector('.btn-hold').addEventListener('click',holdbutton);
document.querySelector('.btn-roll').addEventListener('click',rollbutton);