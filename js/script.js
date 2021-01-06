let url = 'https://csa2020studentapi.azurewebsites.net/rpsls';
let getCpu = '';
let numOfRounds = 0;

document.getElementById('cpuBtn').addEventListener('click', function () {
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((err) => {
            getCpu = err;
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

}

// function cpuGame(err){
//     if(err == 'Paper'){
//         console.log('here');
//     }
// }