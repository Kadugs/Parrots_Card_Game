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
}
function randomizer() {
    return Math.random() -0.5 ;
}

let cartaClicada;
function vira(elemento) {
    if(!cartaClicada && elemento.classList.contains("acertou") === false) {
        elemento.classList.add("card-clicado");
        cartaClicada = elemento;
    } else {
        if (elemento.classList.item(0) === cartaClicada.classList.item(0) && cartaClicada !== elemento && elemento.classList.contains("acertou") === false) {
            cartaClicada.classList.add("acertou");
            elemento.classList.add("acertou");
        } else {
            elemento.classList.add("card-clicado");
            setTimeout(removeErro, 1000);
        }
        setTimeout(resetaClasses, 1000);  
    }
    function removeErro() {
        elemento.classList.add("errou");
        console.log("a")
    }
    function resetaClasses() {
        elemento.classList.remove("card-clicado");
        cartaClicada.classList.remove("card-clicado");
        cartaClicada = undefined;
        elemento.classList.remove("errou");
    }
    contador++;
    verificaVitoria();
}

function verificaVitoria() {
    const numAcertos = document.querySelectorAll(".acertou");
    if(numAcertos.length === numCartas) {
        alert(`Você ganhou em ${contador / 2} jogadas!`);
    }
}

