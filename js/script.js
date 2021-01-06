let url = 'https://csa2020studentapi.azurewebsites.net/rpsls';
let getCpu = '';
let userAns = '';
let numToWin = 0;
let userWins = 0;
let cpuWins = 0;

document.getElementById('cpuBtn').addEventListener('click', function () {
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((choice) => {
            getCpu = choice;
            //document.getElementById('cpuAns').innerText = err;
            playRounds();
            // popGameArea();
            //cpuGame(err);
        });
})

function playRounds(){
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('numRoundCont').style.display = 'flex';
    
    document.getElementById('numR1').addEventListener('click', function(){
        popGameArea();
    })

    document.getElementById('numR2').addEventListener('click', function(){
        numToWin = 3;
        popGameArea();
    })

    document.getElementById('numR3').addEventListener('click', function(){
        numToWin = 4;
        popGameArea();
    })
}

function popGameArea(){
    document.getElementById('numRoundCont').style.display = 'none';
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('gameCont').style.display = 'flex';

    document.getElementById('choi1').addEventListener('click', function(){
        userAns = 'Rock';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi2').addEventListener('click', function(){
        userAns = 'Paper';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi3').addEventListener('click', function(){
        userAns = 'Scissors';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi4').addEventListener('click', function(){
        userAns = 'Lizard';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi5').addEventListener('click', function(){
        userAns = 'Spock';
        cpuGame(getCpu, userAns);
    })
}

function cpuGame(getCpu, userAns){
    console.log(userAns);
    console.log(getCpu);
    if(getCpu == userAns){
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('tieCont').style.display = 'flex';
    }
    else if(userAns == 'Rock'){
        if(getCpu == 'Paper'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Scissors'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Lizard'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else{
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
    }
    else if(userAns == 'Paper'){
        if(getCpu == 'Rock'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Scissors'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Lizard'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
        else{
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
    }
    else if(userAns == 'Scissors'){
        if(getCpu == 'Rock'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Paper'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Lizard'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else{
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
    }
    else if(userAns == 'Lizard'){
        if(getCpu == 'Rock'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Paper'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Scissors'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
        else{
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
    }
    else if(userAns == 'Spock'){
        if(getCpu == 'Rock'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Paper'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
        else if(getCpu == 'Scissors'){
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
        }
        else{
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('cpuWinCont').style.display = 'flex';
        }
    }
}