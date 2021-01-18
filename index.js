var nome = "Fábio André Zatta";
var cargo = "Fisioterapeuta";


var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("nome-do-cargo");
var texto2 = document.getElementById("texto-2");
var texto1 = document.getElementById("texto-1");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml (cargo){
    cargoHtml.innerHTML = cargo;
}

function  clicNoProjeto() {
    texto2.style.display="block";
    texto1.style.display="none";
}

function clicNoSobre() {
    texto1.style.display="block";
    texto2.style.display="none";
}
colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);


