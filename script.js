let fields = [];
let gameOver = false;
let currentshape = 'cross';

function fillshape(id) {
    if (!fields[id] && !gameOver) {
        if (currentshape == 'cross') {
            currentshape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactive')
            document.getElementById('player-2').classList.add('player-inactive')
        } else {
            currentshape = 'cross';
            document.getElementById('player-1').classList.add('player-inactive')
            document.getElementById('player-2').classList.remove('player-inactive')
        }

        fields[id] = currentshape;
        console.log(fields);
        draw();
        checkForWin();
    }
}
function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-buttom').classList.add('d-none');

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');      
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');      
        document.getElementById('cross-' + i).classList.add('d-none');     
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');

        }

    }
}

function checkForWin() {

    let winner;


    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scale(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scale(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scale(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scale(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scale(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scale(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scale(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scale(1)';
    }

    if (winner) {
        console.log('GEWONNEN', winner);
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-buttom').classList.remove('d-none');     
        }, 2000);

    }


}