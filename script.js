let numCartas = 0;
const baralho = document.querySelector(".baralho");
const cards = [];
const tiposCartas = [];
let contador = 0;
let intervaloTimer;
const parrotCards = [`bobrossparrot`, `explodyparrot`, `fiestaparrot`,
`metalparrot`,`revertitparrot`, `tripletsparrot`,`unicornparrot`];
   
while(numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0 || !numCartas) {
    numCartas = prompt("Quantas cartas quer jogar?");
}
temporizador();
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

let timer = 0;

function temporizador() {
    intervaloTimer = setInterval(somaTempo, 1000);
}


function somaTempo() {
    const relogio = document.querySelector(".tempo");
    relogio.innerHTML = timer;
    timer++;
}

function verificaVitoria() {
    const numAcertos = document.querySelectorAll(".acertou");
    console.log(numCartas)
    console.log(numAcertos.length)
    if(numAcertos.length === Number(numCartas)) {
        clearInterval(intervaloTimer);
        setTimeout(alertaVitoria, 1000);
    }
}

function alertaVitoria() {
    alert(`Você ganhou em ${timer} segundos com ${contador / 2} jogadas!`)
}


