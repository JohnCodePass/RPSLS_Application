let url = 'https://csa2020studentapi.azurewebsites.net/rpsls';
let getCpu = '';
let userAns = '';
let numOfRounds = 0;

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
        console.log('You clicked one game')
        numOfRounds = 1;
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

    //cpuGame(getCpu);

}

function cpuGame(getCpu, userAns){
    if(getCpu == userAns){
        //alert('The game is a tie');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('tieCont').style.display = 'flex';
    }
    else{
        alert('You lost');
    }
}