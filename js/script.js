let url = 'https://csa2020studentapi.azurewebsites.net/rpsls';
let getCpu = '';
let userAns = '';
let oppAns = 'Paper';
let numToWin = 0;
let userWins = 0;
let cpuWins = 0;

document.getElementById('pvpBtn').addEventListener('click', function () {
    pvpRounds();
})

function pvpRounds() {
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('numRoundCont').style.display = 'flex';
    document.getElementById('numR1').addEventListener('click', function () {
        pvpGameArea();
    })

    document.getElementById('numR2').addEventListener('click', function () {
        numToWin = 3;
        pvpGameArea();
    })

    document.getElementById('numR3').addEventListener('click', function () {
        numToWin = 4;
        pvpGameArea();
    })
}

let player1Turn = true;
function pvpGameArea(userAns) {
    document.getElementById('numRoundCont').style.display = 'none';
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('gameCont').style.display = 'flex';

    if (player1Turn == true) {
        document.getElementById('playerTurnName').innerText = 'Player 1';
        document.getElementById('choi1').addEventListener('click', function () {
            userAns = 'Rock';
            player1Turn = false;
            pvpGameArea(userAns)
        })
        document.getElementById('choi2').addEventListener('click', function () {
            userAns = 'Paper';
            player1Turn = false;
            pvpGameArea(userAns)
        })
        document.getElementById('choi3').addEventListener('click', function () {
            userAns = 'Scissors';
            player1Turn = false;
            pvpGameArea(userAns)
        })
        document.getElementById('choi4').addEventListener('click', function () {
            userAns = 'Lizard';
            player1Turn = false;
            pvpGameArea(userAns)
        })
        document.getElementById('choi5').addEventListener('click', function () {
            userAns = 'Spock';
            player1Turn = false;
            pvpGameArea(userAns)
        })
    }
    else{
        document.getElementById('playerTurnName').innerText = 'Player 2';
        document.getElementById('choi1').addEventListener('click', function () {
            oppAns = 'Rock';
            pvpGame(oppAns, userAns);
        })
        document.getElementById('choi2').addEventListener('click', function () {
            oppAns = 'Paper';
            pvpGame(oppAns, userAns);
        })
        document.getElementById('choi3').addEventListener('click', function () {
            oppAns = 'Scissors';
            pvpGame(oppAns, userAns);
        })
        document.getElementById('choi4').addEventListener('click', function () {
            oppAns = 'Lizard';
            pvpGame(oppAns, userAns);

        })
        document.getElementById('choi5').addEventListener('click', function () {
            oppAns = 'Spock';
            pvpGame(oppAns, userAns);
        })
    }
}

function pvpGame(oppAns, userAns) {
    if (oppAns == userAns) {
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('userChoice').innerText = userAns;
        document.getElementById('cpuChoice').innerText = oppAns;
        document.getElementById('tieDis').innerText = 'Tie'
    }
    else if (userAns == 'Rock') {
        (oppAns == 'Paper' || oppAns == 'Spock') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Paper') {
        (oppAns == 'Scissors' || oppAns == 'Lizard') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Scissors') {
        (oppAns == 'Rock' || oppAns == 'Spock') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Lizard') {
        (oppAns == 'Rock' || oppAns == 'Scissors') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Spock') {
        (oppAns == 'Paper' || oppAns == 'Lizard') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
}

/************************************************* CPU *******************************/


// function redoFetch(){
//     fetch(url)
//         .then((response) => {
//             return response.text();
//         })
//         .then((choice) => {
//             getCpu = choice;
//         });
// }

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

function playRounds() {
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('numRoundCont').style.display = 'flex';

    document.getElementById('numR1').addEventListener('click', function () {
        popGameArea();
    })

    document.getElementById('numR2').addEventListener('click', function () {
        numToWin = 3;
        popGameArea();
    })

    document.getElementById('numR3').addEventListener('click', function () {
        numToWin = 4;
        popGameArea();
    })
}

function popGameArea() {
    document.getElementById('numRoundCont').style.display = 'none';
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('gameCont').style.display = 'flex';

    document.getElementById('choi1').addEventListener('click', function () {
        userAns = 'Rock';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi2').addEventListener('click', function () {
        userAns = 'Paper';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi3').addEventListener('click', function () {
        userAns = 'Scissors';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi4').addEventListener('click', function () {
        userAns = 'Lizard';
        cpuGame(getCpu, userAns);
    })
    document.getElementById('choi5').addEventListener('click', function () {
        userAns = 'Spock';
        cpuGame(getCpu, userAns);
    })
}

function cpuGame(getCpu, userAns) {
    if (getCpu == userAns) {
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('userChoice').innerText = userAns;
        document.getElementById('cpuChoice').innerText = getCpu;
        document.getElementById('tieDis').innerText = 'Tie'
    }
    else if (userAns == 'Rock') {
        (getCpu == 'Paper' || getCpu == 'Spock') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Paper') {
        (getCpu == 'Scissors' || getCpu == 'Lizard') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Scissors') {
        (getCpu == 'Rock' || getCpu == 'Spock') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Lizard') {
        (getCpu == 'Rock' || getCpu == 'Scissors') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Spock') {
        (getCpu == 'Paper' || getCpu == 'Lizard') ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns) : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
}
// OLD FUNCTION
// function cpuGame(getCpu, userAns){
//     console.log(userAns);
//     console.log(getCpu);
//     if(getCpu == userAns){
//         document.getElementById('gameCont').style.display = 'none';
//         document.getElementById('tieCont').style.display = 'flex';
//     }
//     else if(userAns == 'Rock'){
//         if(getCpu == 'Paper'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Scissors'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Lizard'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else{
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//     }
//     else if(userAns == 'Paper'){
//         if(getCpu == 'Rock'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Scissors'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Lizard'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//         else{
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//     }
//     else if(userAns == 'Scissors'){
//         if(getCpu == 'Rock'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Paper'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Lizard'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else{
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//     }
//     else if(userAns == 'Lizard'){
//         if(getCpu == 'Rock'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Paper'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Scissors'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//         else{
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//     }
//     else if(userAns == 'Spock'){
//         if(getCpu == 'Rock'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Paper'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//         else if(getCpu == 'Scissors'){
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('userWinCont').style.display = 'flex';
//         }
//         else{
//             document.getElementById('gameCont').style.display = 'none';
//             document.getElementById('cpuWinCont').style.display = 'flex';
//         }
//     }
// }