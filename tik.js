let boxs = document.querySelectorAll('.box');
const reset = document.getElementById('reset');
let turn = '0';
let gameover = false;
console.log('hy');
function changeturn() {
    if (turn === 'X') {
        return '0';
    } else {
        return 'X';
    }
}
function checkwin() {
    let text = document.querySelectorAll('.boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach((e) => {
        if (text[e[0]].innerText === text[e[1]].innerText && text[e[0]].innerText === text[e[2]].innerText && text[e[0]].innerText !== '') {
            document.querySelector('.info').innerText = text[e[0]].innerText + ' WON';
            document.querySelector('.image').style.display = 'block';
            gameover = true
        }
    })
}
Array.from(boxs).forEach((element) => {
    let text = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (text.innerText === '') {
            text.innerText = turn;
            turn = changeturn();
            checkwin();
            // console.log(turn);
            if (gameover == false) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})

reset.addEventListener('click', (e) => {
    let text = document.querySelectorAll('.boxtext');
    Array.from(text).forEach((element) => {
        element.innerText = '';
        document.querySelector('.image').style.display = 'none';
        turn = '0';
        gameover = false;
        document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    })
})