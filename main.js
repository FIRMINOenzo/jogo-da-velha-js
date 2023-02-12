const botoes = document.querySelectorAll(".botao");
const posicoes = document.querySelectorAll(".posicao");
const restart = document.querySelector("#restart");
let pTurno = document.querySelector(".turno");
let jogador = "X"
let ganhador = [false, "-"]
let empatou = false;

pTurno.innerHTML = "Vez do jogador: X";


restart.addEventListener('click', () => {
    for(let i=0; i<9; i++){
        botoes[i].value = i;
        posicoes[i].innerHTML = "";
    }
    botaoOnOff("on");
    pTurno.innerHTML = "Vez do jogador: X";
})

botoes.forEach(x => {
    x.addEventListener('click', () => {
        if (x.value === "X" || x.value === "O"){
        console.log("Posição já foi usada, tente outra.");

        } else if (jogador === "X"){
            posicoes[x.value].innerHTML = jogador;
            x.value = jogador;
            jogador = "O";
            pTurno.innerHTML = "Vez do jogador: O";
            ganhador = vitoria();
            empatou = empate();
            
            if(ganhador[0]) {
                pTurno.innerHTML = `Ganhador: ${ganhador[1]}`;
                botaoOnOff("off");
            } else if(empatou) {
                pTurno.innerHTML = "Empate!"
            }

        } else {
            posicoes[x.value].innerHTML = jogador;
            x.value = jogador;
            jogador = "X";
            pTurno.innerHTML = "Vez do jogador: X";

            ganhador = vitoria();
            empatou = empate();
            
            if(ganhador[0]) {
                pTurno.innerHTML = `Ganhador: ${ganhador[1]}`;
                botaoOnOff("off");
            } else if(empatou) {
                pTurno.innerHTML = "Empate!"
            }
        }    
    })
})

function vitoria() {
    if(posicoes[0].innerHTML === posicoes[1].innerHTML && posicoes[1].innerHTML === posicoes[2].innerHTML && !(posicoes[0].innerHTML === "")){
        return [true, posicoes[0].innerHTML];
    } else if (posicoes[3].innerHTML === posicoes[4].innerHTML && posicoes[4].innerHTML === posicoes[5].innerHTML && !(posicoes[3].innerHTML === "")){
        return [true, posicoes[3].innerHTML];
    } else if (posicoes[6].innerHTML === posicoes[7].innerHTML && posicoes[7].innerHTML === posicoes[8].innerHTML  && !(posicoes[6].innerHTML === "")){
        return [true, posicoes[6].innerHTML];
    } else if (posicoes[0].innerHTML === posicoes[3].innerHTML && posicoes[3].innerHTML === posicoes[6].innerHTML  && !(posicoes[0].innerHTML === "")){
        return [true, posicoes[0].innerHTML];
    } else if (posicoes[1].innerHTML === posicoes[4].innerHTML && posicoes[4].innerHTML === posicoes[7].innerHTML && !(posicoes[1].innerHTML === "")){
        return [true, posicoes[1].innerHTML];
    } else if (posicoes[2].innerHTML === posicoes[5].innerHTML && posicoes[5].innerHTML === posicoes[8].innerHTML && !(posicoes[2].innerHTML === "")){
        return [true, posicoes[2].innerHTML];
    } else if (posicoes[0].innerHTML === posicoes[4].innerHTML && posicoes[4].innerHTML === posicoes[8].innerHTML && !(posicoes[0].innerHTML === "")){
        return [true, posicoes[0].innerHTML];
    } else if (posicoes[2].innerHTML === posicoes[4].innerHTML && posicoes[4].innerHTML === posicoes[6].innerHTML && !(posicoes[2].innerHTML === "")){
        return [true, posicoes[2].innerHTML];
    } else {
        return [false, "-"];
    }
}

function empate() {
    let emp = "";

    posicoes.forEach(x => {
        emp += x.innerHTML;
    })

    console.log(`frase: ${emp} length ${emp.length}`)

    if(emp.length === 9){
        return true;
    }
    else {
        return false;
    }
}

function botaoOnOff(y) {
    if(y === "off") {
        botoes.forEach(x => {
            x.disabled = true;
        })

    } else {
        botoes.forEach(x => {
            x.disabled = false;
        })
    }
}