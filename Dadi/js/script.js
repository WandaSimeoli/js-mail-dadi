const player = Math.floor(Math.random() * 6) + 1; 
console.log('player', player, typeof player);

const computer = Math.floor(Math.random () * 6) + 1;
console.log('computer', computer, typeof computer);

if (player > computer) {

    alert ('You won :)');

} else if (player < computer) {

    alert('You lost :(');

} else {

    alert('Draw');
}
