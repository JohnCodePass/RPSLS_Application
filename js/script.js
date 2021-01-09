let url = 'https://csa2020studentapi.azurewebsites.net/rpsls';
let getCpu = '';
let userAns = '';
let oppAns = 'Paper';
let numToWin = 0;
let userWins = 0;
let cpuWins = 0;

let p1Wins = 0;
let p2Wins = 0;

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
        pvp3GameArea();
    })

    document.getElementById('numR3').addEventListener('click', function () {
        numToWin = 4;
        pvp7GameArea();
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
    else {
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
        (oppAns == 'Paper' || oppAns == 'Spock')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Paper') {
        (oppAns == 'Scissors' || oppAns == 'Lizard')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Scissors') {
        (oppAns == 'Rock' || oppAns == 'Spock')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Lizard') {
        (oppAns == 'Rock' || oppAns == 'Scissors')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Spock') {
        (oppAns == 'Paper' || oppAns == 'Lizard')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns);
    }
}
/**************************************************************************************************/

function pvp3GameArea(userAns) {
    document.getElementById('userWinCont').style.display = 'none';
    document.getElementById('numRoundCont').style.display = 'none';
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('gameCont').style.display = 'flex';

    if (p1Wins >= 3) {
        console.log('Player 1 has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }
    else if (p2Wins >= 3) {
        console.log('Player 2 has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }

    if (player1Turn == true) {
        document.getElementById('playerTurnName').innerText = 'Player 1';
        document.getElementById('choi1').addEventListener('click', function () {
            userAns = 'Rock';
            player1Turn = false;
            pvp3GameArea(userAns)
        })
        document.getElementById('choi2').addEventListener('click', function () {
            userAns = 'Paper';
            player1Turn = false;
            pvp3GameArea(userAns)
        })
        document.getElementById('choi3').addEventListener('click', function () {
            userAns = 'Scissors';
            player1Turn = false;
            pvp3GameArea(userAns)
        })
        document.getElementById('choi4').addEventListener('click', function () {
            userAns = 'Lizard';
            player1Turn = false;
            pvp3GameArea(userAns)
        })
        document.getElementById('choi5').addEventListener('click', function () {
            userAns = 'Spock';
            player1Turn = false;
            pvp3GameArea(userAns)
        })
    }
    else {
        document.getElementById('playerTurnName').innerText = 'Player 2';
        document.getElementById('choi1').addEventListener('click', function () {
            oppAns = 'Rock';
            pvp3Game(oppAns, userAns);
        })
        document.getElementById('choi2').addEventListener('click', function () {
            oppAns = 'Paper';
            pvp3Game(oppAns, userAns);
        })
        document.getElementById('choi3').addEventListener('click', function () {
            oppAns = 'Scissors';
            pvp3Game(oppAns, userAns);
        })
        document.getElementById('choi4').addEventListener('click', function () {
            oppAns = 'Lizard';
            pvp3Game(oppAns, userAns);

        })
        document.getElementById('choi5').addEventListener('click', function () {
            oppAns = 'Spock';
            pvp3Game(oppAns, userAns);
        })
    }
}

function pvp3Game(oppAns, userAns) {
    if (p1Wins != 3 || p2Wins != 3) {
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('nextRoundBtn').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'none';
        if (oppAns == userAns) {
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
            document.getElementById('userChoice').innerText = userAns;
            document.getElementById('cpuChoice').innerText = oppAns;
            document.getElementById('tieDis').innerText = 'Tie'
        }
        else if (userAns == 'Rock') {
            (oppAns == 'Paper' || oppAns == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Paper') {
            (oppAns == 'Scissors' || oppAns == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Scissors') {
            (oppAns == 'Rock' || oppAns == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Lizard') {
            (oppAns == 'Rock' || oppAns == 'Scissors')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Spock') {
            (oppAns == 'Paper' || oppAns == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        document.getElementById('nextRoundBtn').addEventListener('click', function () {
            pvp3GameArea();
        })
    }
    else {
        pvp3GameArea();
    }
}

// *************************************************************************************************

function pvp7GameArea(userAns) {
    document.getElementById('userWinCont').style.display = 'none';
    document.getElementById('numRoundCont').style.display = 'none';
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('gameCont').style.display = 'flex';

    if (p1Wins >= 4) {
        console.log('Player 1 has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }
    else if (p2Wins >= 4) {
        console.log('Player 2 has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }

    if (player1Turn == true) {
        document.getElementById('playerTurnName').innerText = 'Player 1';
        document.getElementById('choi1').addEventListener('click', function () {
            userAns = 'Rock';
            player1Turn = false;
            pvp7GameArea(userAns)
        })
        document.getElementById('choi2').addEventListener('click', function () {
            userAns = 'Paper';
            player1Turn = false;
            pvp7GameArea(userAns)
        })
        document.getElementById('choi3').addEventListener('click', function () {
            userAns = 'Scissors';
            player1Turn = false;
            pvp7GameArea(userAns)
        })
        document.getElementById('choi4').addEventListener('click', function () {
            userAns = 'Lizard';
            player1Turn = false;
            pvp7GameArea(userAns)
        })
        document.getElementById('choi5').addEventListener('click', function () {
            userAns = 'Spock';
            player1Turn = false;
            pvp7GameArea(userAns)
        })
    }
    else {
        document.getElementById('playerTurnName').innerText = 'Player 2';
        document.getElementById('choi1').addEventListener('click', function () {
            oppAns = 'Rock';
            pvp7Game(oppAns, userAns);
        })
        document.getElementById('choi2').addEventListener('click', function () {
            oppAns = 'Paper';
            pvp7Game(oppAns, userAns);
        })
        document.getElementById('choi3').addEventListener('click', function () {
            oppAns = 'Scissors';
            pvp7Game(oppAns, userAns);
        })
        document.getElementById('choi4').addEventListener('click', function () {
            oppAns = 'Lizard';
            pvp7Game(oppAns, userAns);

        })
        document.getElementById('choi5').addEventListener('click', function () {
            oppAns = 'Spock';
            pvp7Game(oppAns, userAns);
        })
    }
}

function pvp7Game(oppAns, userAns) {
    if (p1Wins != 4 || p2Wins != 4) {
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('nextRoundBtn').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'none';
        if (oppAns == userAns) {
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
            document.getElementById('userChoice').innerText = userAns;
            document.getElementById('cpuChoice').innerText = oppAns;
            document.getElementById('tieDis').innerText = 'Tie'
        }
        else if (userAns == 'Rock') {
            (oppAns == 'Paper' || oppAns == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Paper') {
            (oppAns == 'Scissors' || oppAns == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Scissors') {
            (oppAns == 'Rock' || oppAns == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Lizard') {
            (oppAns == 'Rock' || oppAns == 'Scissors')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        else if (userAns == 'Spock') {
            (oppAns == 'Paper' || oppAns == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 2 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p2Wins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'Player 1 Wins', document.getElementById('cpuChoice').innerText = oppAns, document.getElementById('userChoice').innerText = userAns,p1Wins++);
        }
        document.getElementById('nextRoundBtn').addEventListener('click', function () {
            pvp7GameArea();
        })
    }
    else {
        pvp7GameArea();
    }
}


/************************************************* CPU *************************************************/


function redoFetch() {
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((choice) => {
            getCpu = choice;
        });
}

document.getElementById('cpuBtn').addEventListener('click', function () {
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((choice) => {
            getCpu = choice;
            playRounds();
        });
})

function playRounds() {
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('numRoundCont').style.display = 'flex';

    document.getElementById('numR1').addEventListener('click', function () {
        popGameArea();
    })

    document.getElementById('numR2').addEventListener('click', function () {
        pvc3GameArea();
    })

    document.getElementById('numR3').addEventListener('click', function () {
        pvc7GameArea();
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
        pvc4GameArea(getCpu, userAns);
    })
}

function cpuGame(getCpu, userAns) {
    if (getCpu == userAns) {
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('userChoice').innerText = userAns;
        document.getElementById('cpuChoice').innerText = getCpu;
        document.getElementById('tieDis').innerText = 'Tie';
    }
    else if (userAns == 'Rock') {
        (getCpu == 'Paper' || getCpu == 'Spock')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Paper') {
        (getCpu == 'Scissors' || getCpu == 'Lizard')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Scissors') {
        (getCpu == 'Rock' || getCpu == 'Spock')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Lizard') {
        (getCpu == 'Rock' || getCpu == 'Scissors')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
    else if (userAns == 'Spock') {
        (getCpu == 'Paper' || getCpu == 'Lizard')
            ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns)
            : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns);
    }
}
//************************************************************************************* */
let counter = 0;
function pvc3GameArea() {
    document.getElementById('userWinCont').style.display = 'none';
    userAns = '';
    if (userWins >= 3) {
        console.log('The user has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }
    else if (cpuWins >= 3) {
        console.log('The computer has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }
    document.getElementById('numRoundCont').style.display = 'none';
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('gameCont').style.display = 'flex';

    document.getElementById('choi1').addEventListener('click', function () {
        userAns = 'Rock';
        cpuR3Game(getCpu, userAns);
    })
    document.getElementById('choi2').addEventListener('click', function () {
        userAns = 'Paper';
        cpuR3Game(getCpu, userAns);
    })
    document.getElementById('choi3').addEventListener('click', function () {
        userAns = 'Scissors';
        cpuR3Game(getCpu, userAns);
    })
    document.getElementById('choi4').addEventListener('click', function () {
        userAns = 'Lizard';
        cpuR3Game(getCpu, userAns);
    })
    document.getElementById('choi5').addEventListener('click', function () {
        userAns = 'Spock';
        cpuR3Game(getCpu, userAns);
    })
}

function cpuR3Game(getCpu, userAns) {
    document.getElementById('gameCont').style.display = 'none';
    if (userWins != 3 || cpuWins != 3) {
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('nextRoundBtn').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'none';
        if (getCpu == userAns) {
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
            document.getElementById('userChoice').innerText = userAns;
            document.getElementById('cpuChoice').innerText = getCpu;
            document.getElementById('tieDis').innerText = 'Tie';
        }
        else if (userAns == 'Rock') {
            (getCpu == 'Paper' || getCpu == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Paper') {
            (getCpu == 'Scissors' || getCpu == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Scissors') {
            (getCpu == 'Rock' || getCpu == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Lizard') {
            (getCpu == 'Rock' || getCpu == 'Scissors')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Spock') {
            (getCpu == 'Paper' || getCpu == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        document.getElementById('nextRoundBtn').addEventListener('click', function () {
            redoFetch();
            pvc3GameArea();
        })
    }
    else {
        pvc3GameArea();
    }
}

//************************************************************************************* */
function pvc7GameArea() {
    document.getElementById('userWinCont').style.display = 'none';
    userAns = '';
    if (userWins >= 4) {
        console.log('The user has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }
    else if (cpuWins >= 4) {
        console.log('The computer has won');
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('userWinCont').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'flex';
        document.getElementById('nextRoundBtn').style.display = 'none';
    }
    document.getElementById('numRoundCont').style.display = 'none';
    document.getElementById('topCont').style.display = 'none';
    document.getElementById('gameCont').style.display = 'flex';

    document.getElementById('choi1').addEventListener('click', function () {
        userAns = 'Rock';
        cpuR4Game(getCpu, userAns);
    })
    document.getElementById('choi2').addEventListener('click', function () {
        userAns = 'Paper';
        cpuR4Game(getCpu, userAns);
    })
    document.getElementById('choi3').addEventListener('click', function () {
        userAns = 'Scissors';
        cpuR4Game(getCpu, userAns);
    })
    document.getElementById('choi4').addEventListener('click', function () {
        userAns = 'Lizard';
        cpuR4Game(getCpu, userAns);
    })
    document.getElementById('choi5').addEventListener('click', function () {
        userAns = 'Spock';
        cpuR4Game(getCpu, userAns);
    })
}

function cpuR4Game(getCpu, userAns) {
    document.getElementById('gameCont').style.display = 'none';
    if (userWins != 4 || cpuWins != 4) {
        document.getElementById('gameCont').style.display = 'none';
        document.getElementById('nextRoundBtn').style.display = 'flex';
        document.getElementById('playAgainBtn').style.display = 'none';
        if (getCpu == userAns) {
            document.getElementById('gameCont').style.display = 'none';
            document.getElementById('userWinCont').style.display = 'flex';
            document.getElementById('userChoice').innerText = userAns;
            document.getElementById('cpuChoice').innerText = getCpu;
            document.getElementById('tieDis').innerText = 'Tie';
        }
        else if (userAns == 'Rock') {
            (getCpu == 'Paper' || getCpu == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Paper') {
            (getCpu == 'Scissors' || getCpu == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Scissors') {
            (getCpu == 'Rock' || getCpu == 'Spock')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Lizard') {
            (getCpu == 'Rock' || getCpu == 'Scissors')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        else if (userAns == 'Spock') {
            (getCpu == 'Paper' || getCpu == 'Lizard')
                ? (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'CPU Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, cpuWins++)
                : (document.getElementById('gameCont').style.display = 'none', document.getElementById('userWinCont').style.display = 'flex', document.getElementById('tieDis').innerText = 'User Wins', document.getElementById('cpuChoice').innerText = getCpu, document.getElementById('userChoice').innerText = userAns, userWins++);
            getCpu = '';
            userAns = '';
        }
        document.getElementById('nextRoundBtn').addEventListener('click', function () {
            redoFetch();
            pvc7GameArea();
        })
    }
    else {
        pvc7GameArea();
    }
}
//************************************************************************************* */