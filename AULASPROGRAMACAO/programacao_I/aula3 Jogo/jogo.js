function soma(){

}

var escolhaPC = 0;
var escolhaJOGA = 0;
var ganhador = -1;

function jogar(value){
    escolhaJOGA = value;
    var JOGOS = "JOGOS";

    var total = +localStorage.getItem(JOGOS) + 1;
    localStorage.setItem(JOGOS, total);


    escolhaPC = Math.floor((Math.random() * ( 3 - 1 + 1 ))) + 1;


    // 1 Pedra
    // 2 Papel
    // 3 Tesoura


    // ------------ PEDRA ---------- //
    
    if(escolhaJOGA == 1 && escolhaPC == 1){
        ganhador = 0;
        alert('EMPATE');
    }
    else if(escolhaJOGA == 1 && escolhaPC == 2){
        ganhador = 2;
        alert('PERDEU');
        var DERROTAS = "DERROTAS"

        var total = +localStorage.getItem(DERROTAS) + 1;
        localStorage.setItem(DERROTAS, total);
    }
    else if(escolhaJOGA == 1 && escolhaPC == 3){
        ganhador = 1;
        alert('GANHOU');

        var VITORIAS = "VITORIAS"

        var total = +localStorage.getItem(VITORIAS) + 1;
        localStorage.setItem(VITORIAS, total);
    }



    // ------------ PAPEL ---------- //

    else if(escolhaJOGA == 2 && escolhaPC == 2){
        ganhador = 0;
        alert('EMPATE');
    }
    else if(escolhaJOGA == 2 && escolhaPC == 1){
        ganhador = 2;
        alert('PERDEU');
        var DERROTAS = "DERROTAS"

        var total = +localStorage.getItem(DERROTAS) + 1;
        localStorage.setItem(DERROTAS, total);
    }
    else if(escolhaJOGA == 2 && escolhaPC == 3){
        ganhador = 1;
        alert('GANHOU');
        var VITORIAS = "VITORIAS"

        var total = +localStorage.getItem(VITORIAS) + 1;
        localStorage.setItem(VITORIAS, total);
    }


    // ------------ TESOURA ---------- //

    else if(escolhaJOGA == 3 && escolhaPC == 1){
        ganhador = 2;
        alert('EMPATE');
    }
    else if(escolhaJOGA == 3 && escolhaPC == 2){
        ganhador = 1;
        alert('PERDEU');
        var DERROTAS = "DERROTAS"

        var total = +localStorage.getItem(DERROTAS) + 1;
        localStorage.setItem(DERROTAS, total);
    }
    else if(escolhaJOGA == 3 && escolhaPC == 3){
        ganhador = 0;
        alert('GANHOU');
        var VITORIAS = "VITORIAS"

        var total = +localStorage.getItem(VITORIAS) + 1;
        localStorage.setItem(VITORIAS, total);
    }
    Total();
    Vitorias();
    Derrotas();
}

function Total(){
    var JOGOS = "JOGOS";

    var total = localStorage.getItem(JOGOS);
    inputTotal.value= total;
}

function Vitorias(){
    var VITORIAS = "VITORIAS";

    var VITORIAS = localStorage.getItem(VITORIAS);
    inputVitorias.value= VITORIAS;
}

function Derrotas(){
    var DERROTAS = "DERROTAS";

    var DERROTAS = localStorage.getItem(DERROTAS);
    inputDerrotas.value= DERROTAS;
}