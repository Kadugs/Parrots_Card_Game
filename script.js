let numCartas = 0;
const baralho = document.querySelector(".baralho");
const cards = [];
let i;
const parrotCards = [`<img src="/src/bobrossparrot.gif" class="escondido simbolo-carta">`,
 `<img src="/src/explodyparrot.gif" class="escondido simbolo-carta">`, `<img src="/src/fiestaparrot.gif" class="escondido simbolo-carta">`,
`<img src="/src/metalparrot.gif" class="escondido simbolo-carta">`,`<img src="/src/revertitparrot.gif" class="escondido simbolo-carta">`,
`<img src="/src/tripletsparrot.gif" class="escondido simbolo-carta">`,`<img src="/src/unicornparrot.gif" class="escondido simbolo-carta">`]
    
while(numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0 || !numCartas) {
    // numCartas = prompt("Quantas cartas quer jogar?");
    numCartas = 8;
    // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA LEMBRAR DE ALTERAR ISSO PELO AMOR DE DEUS 
    // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
}
for(i = 0; i < numCartas / 2; i++) {
    for(let j = 0; j < 2; j++) {
        cards.push(`<div class="card" onclick="vira(this)"> <img src="src/front.png" class="front-parrot"> ${parrotCards[i]}</div>`);
    }
}
cards.sort(randomizer);
for(i = 0; i < numCartas; i++) {
    baralho.innerHTML += cards[i];
    console.log(cards.length)
}
function randomizer() {
    return Math.random() -0.5 ;
}
function vira(carta) {
    carta.classList.add("card-clicado");     
}
