let numCartas = 0;
const cards = document.querySelector(".cards");
while(numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
    numCartas = prompt("Quantas cartas quer jogar?");
}
for(let i = 0; i < numCartas; i++) {
    cards.innerHTML += `<div class="card">
    <img src="src/front.png" class="front-parrot">
</div>`
}
