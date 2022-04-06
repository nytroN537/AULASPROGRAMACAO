
function soma(){

}

function jogar(value){
    var JOGOS = "JOGOS";
    var VITORIAS = "VITORIAS";
    var DERROTAS = "DERROTAS";

    var total = +localStorage.getItem(JOGOS) + 1;
    localStorage.setItem(JOGOS, total);

    var escolhaPC = Math.floor(Math.random() * (3 - 1) + 1);

    if(escolhaPC === value){
        alert("empate")
    }
    Total();

    console.log(escolhaPC)
}

function Total(){
    var JOGOS = "JOGOS";

    var total = localStorage.getItem(JOGOS);
    inputTotal.value= total;
}





