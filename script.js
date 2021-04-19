let player, winner = null;
let selectedPlayer = document.getElementById('selected-player');
let selectedWinner = document.getElementById('selected-winner');
//let win = document.getElementById('win');


changePlayer('x')

function squareClick(id) {
    if (winner !== null) {
        return;
    }

    let square = document.getElementById(id);

    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color= '#000'

    if (player === 'x') {
        player = 'o';
    } else {
        player = 'x';
    };

    changePlayer(player);
    checkWinner();
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner() {
    let square1 = document.getElementById(1);
    let square2 = document.getElementById(2);
    let square3 = document.getElementById(3);
    let square4 = document.getElementById(4);
    let square5 = document.getElementById(5);
    let square6 = document.getElementById(6);
    let square7 = document.getElementById(7);
    let square8 = document.getElementById(8);
    let square9 = document.getElementById(9);

    if(checkSequence(square1, square2, square3)) {
        changeColor(square1, square2, square3);
        changeWinner(square1);
        return;
    };

    if(checkSequence(square4, square5, square6)) {
        changeColor(square4, square5, square6);
        changeWinner(square4);
        return;
    };

    if(checkSequence(square7, square8, square9)) {
        changeColor(square7, square8, square9);
        changeWinner(square7);
        return;
    };

    if(checkSequence(square1, square4, square7)) {
        changeColor(square1, square4, square7);
        changeWinner(square1);
        return;
    };

    if(checkSequence(square2, square5, square8)) {
        changeColor(square2, square5, square8);
        changeWinner(square2);
        return;
    };

    if(checkSequence(square3, square6, square9)) {
        changeColor(square3, square6, square9);
        changeWinner(square3);
        return;
    };

    if(checkSequence(square1, square5, square9)) {
        changeColor(square1, square5, square9);
        changeWinner(square3);
        return;
    };

    if(checkSequence(square3, square5, square7)) {
        changeColor(square3, square5, square);
        changeWinner(square3);
    };

}

function changeWinner(square) {
    winner = square.innerHTML;
    selectedWinner.innerHTML = '→ ' + winner + ' 🤘';
    if(winner === 'x') {
        selectedPlayer.innerHTML = 'o lost!';
    } else if (winner === 'o') {
        selectedPlayer.innerHTML = 'x lost!';
    };
    selectedWinner.style.fontSize = '50px';
    selectedWinner.style.visibility = 'visible';
    win.style.fontSize = '50px';
    win.style.visibility = 'visible';
}

function changeColor(square1, square2, square3) {
    square1.style.background = '#3d9bda';
    square2.style.background = '#3d9bda';
    square3.style.background = '#3d9bda';
    square1.style.color = '#fafafa';
    square2.style.color = '#fafafa';
    square3.style.color = '#fafafa';
}

function checkSequence(square1, square2, square3) {
    let isSame = false;

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        isSame = true;
    }

    return isSame;
}

function restart() {
    winner = null;
    selectedWinner.innerHTML = ' ';

    for (let i = 1; i < 10; i++) {
        let square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }

    changePlayer('x');
}