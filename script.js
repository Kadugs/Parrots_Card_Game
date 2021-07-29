let numCartas = 0;
const baralho = document.querySelector(".baralho");
const cards = [];
const tiposCartas = [];
let contador = 0;
const parrotCards = [`bobrossparrot`, `explodyparrot`, `fiestaparrot`,
`metalparrot`,`revertitparrot`, `tripletsparrot`,`unicornparrot`];
    
while(numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0 || !numCartas) {
    // numCartas = prompt("Quantas cartas quer jogar?");
    numCartas = 8;
    // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA LEMBRAR DE ALTERAR ISSO PELO AMOR DE DEUS 
    // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
}
for(let i = 0; i < numCartas / 2; i++) {
    for(let j = 0; j < 2; j++) {
        cards.push(`<div class="${parrotCards[i]} card" onclick="vira(this);"> <img src="src/front.png" class="front-parrot"> <img src="/src/${parrotCards[i]}.gif" class="simbolo-carta"></div>`);
        
    }
}
cards.sort(randomizer);
for(let i = 0; i < numCartas; i++) {
    baralho.innerHTML += cards[i];
    console.log(cards.length)
}
function randomizer() {
    return Math.random() -0.5 ;
}
let cartaClicada;
function vira(elemento) {
    elemento.classList.add("card-clicado");
    if(!cartaClicada) {
        cartaClicada = elemento;
    } else if (elemento.classList.item(0) === cartaClicada.classList.item(0)) {
        cartaClicada.classList.add("acertou");
        elemento.classList.add("acertou");
        elemento.classList.remove("card-clicado");
        cartaClicada = undefined;
    } else {
        elemento.classList.add("errou");
        elemento.classList.remove("errou");
        elemento.classList.remove("card-clicado");
    }
}
