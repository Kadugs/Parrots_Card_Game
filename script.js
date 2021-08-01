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

const cartaClicada = [];
function vira(elemento) {
    if (cartaClicada[0] !== undefined && cartaClicada[1] !== undefined) {
        contador--;
    } else if(!cartaClicada[0] && elemento.classList.contains("acertou") === false) {
        elemento.classList.add("card-clicado");
        cartaClicada[0] = elemento;
    } else {
        cartaClicada[1] = elemento;
        if (cartaClicada[1].classList.item(0) === cartaClicada[0].classList.item(0) &&
        cartaClicada[0] !== cartaClicada[1] &&
        cartaClicada[1].classList.contains("acertou") === false) 
        {
            cartaClicada[0].classList.add("acertou");
            cartaClicada[1].classList.add("acertou");
            setTimeout(resetaClasses, 1000);  
        } else {
            cartaClicada[1].classList.add("card-clicado");
            setTimeout(adicionaErro, 1000);
            setTimeout(resetaClasses, 1000);  
        }
    }
    function adicionaErro() {
        cartaClicada[1].classList.add("errou");
    }
    function resetaClasses() {
        cartaClicada[0].classList.remove("card-clicado");
        cartaClicada[1].classList.remove("card-clicado");
        cartaClicada[1].classList.remove("errou");
        cartaClicada[0] = undefined;
        cartaClicada[1] = undefined;
    }
    contador++;
    verificaVitoria();
}

let timer = 1;

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
    if(numAcertos.length === Number(numCartas)) {
        clearInterval(intervaloTimer);
        setTimeout(alertaVitoria, 1000);
    }
}

function alertaVitoria() {
    const telaVitoria = document.querySelector(".container-tela-vitoria");
    const textoVitoria = document.querySelector(".texto-vitoria");
    telaVitoria.style.display = 'flex';
    textoVitoria.innerHTML = `Você ganhou em ${timer - 1} segundos com ${contador} jogadas!`;
}


