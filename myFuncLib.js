'use strict';

const coinFlip = function () {
    return Math.floor(Math.random() * 2) + 1;
}

const dice = function () {
    return Math.floor(Math.random() * 6) + 1;
}

const roulette = function() {
    return Math.floor(Math.random() * 37);
}

console.log(`Coin flip. 1 = Heads, 2 = Tails. Result: ${coinFlip()}`);
console.log(`Dice roll: ${dice()}`);
console.log(roulette());