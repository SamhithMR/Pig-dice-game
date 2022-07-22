'use strict';
let Dice = 0;
let currentplayer = 0;
let Current = [0, 0]
document.querySelector('.dice').style.display = 'none'
document.body.addEventListener('click', function () {
    currentplayer = document.querySelector('.player--0').classList.contains('player--active') ? 0 : document.querySelector('.player--1').classList.contains('player--active') ? 1 : 0
})
function playerToggle() {
    document.querySelector(`.player--${currentplayer}`).classList.remove('player--active')
    document.querySelector(`.player--${currentplayer ^= 1}`).classList.add('player--active')
}
document.querySelector('.btn--roll').addEventListener('click', function () {
    let Dice = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.dice').style.display = 'block'
    document.querySelector('.dice').src = `dice/dice-${Dice}.png`
    if (Dice !== 1) {
        Current[currentplayer] += Dice;
        document.querySelector(`#current--${currentplayer}`).textContent = Current[currentplayer];
    } else if (Dice == 1) {
        Current[currentplayer] = 0;
        document.querySelector(`#score--${currentplayer}`).textContent = 0;
        document.querySelector(`#current--${currentplayer}`).textContent = 0;
        playerToggle()
    }
})
document.querySelector('.btn--hold').addEventListener('click', function () {
    document.querySelector(`#score--${currentplayer}`).textContent = Current[currentplayer] + Dice
    playerToggle()
})
document.querySelector('.btn--new').addEventListener('click', function () {
    playerToggle()
    Current = 0;
    document.querySelector('#current--0').textContent = '0' ;
    document.querySelector('#current--1').textContent = '0' ;
    document.querySelectorAll('p.score').textContent = '0' ;
    document.querySelector('.dice').style.display = 'none'
})