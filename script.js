let prato;
let bebida;
let sobremesa;
let preco = 0;
let preco_prato;
let preco_bebida;
let preco_sobremesa;
let mensagem;
let mostrar;
let sumir;


function escolherprato1() {
    document.getElementById("prato1").style.borderColor = "#32B72F";   
    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato3").style.borderColor = "white";
    prato = "Frango Ying-Yang";
    preco_prato = 15;
}
function escolherprato2() {
    document.getElementById("prato1").style.borderColor = "white";
    document.getElementById("prato2").style.borderColor = "#32B72F";
    document.getElementById("prato3").style.borderColor = "white";
    prato = "Bife com Batatas";
    preco_prato = 17;
}
function escolherprato3() {
    document.getElementById("prato1").style.borderColor = "white";   
    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato3").style.borderColor = "#32B72F";
    prato = "Macarrão Bolonhesa";
    preco_prato = 16;
}
function escolherbebida1() {
    document.getElementById("bebida1").style.borderColor = "#32B72F";   
    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida3").style.borderColor = "white";
    bebida = "Suco Natural";
    preco_bebida = 5;
}
function escolherbebida2() {
    document.getElementById("bebida1").style.borderColor = "white";
    document.getElementById("bebida2").style.borderColor = "#32B72F";
    document.getElementById("bebida3").style.borderColor = "white";
    bebida = "Coquinha gelada";
    preco_bebida = 7;
}
function escolherbebida3() {
    document.getElementById("bebida1").style.borderColor = "white";   
    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida3").style.borderColor = "#32B72F";
    bebida = "Agua gelada sem gás";
    preco_bebida = 4;
}
function escolhersobremesa1() {
    document.getElementById("sobremesa1").style.borderColor = "#32B72F";   
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = "Pudim";
    preco_sobremesa = 7;
}
function escolhersobremesa2() {
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa2").style.borderColor = "#32B72F";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = "Mousse de Maracujá";
    preco_sobremesa = 10;

}
function escolhersobremesa3() {
    document.getElementById("sobremesa1").style.borderColor = "white";   
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "#32B72F";
    sobremesa = "Mousse de Limão";
    preco_sobremesa = 8;
}

function PossoPedir(){
    preco = preco_prato + preco_bebida + preco_sobremesa;
    if(preco >= 0){
        sumir = document.querySelector(".faz-pedido");
        sumir.classList.add("esconde");
        sumir.classList.remove("aparece");
        mostrar = document.querySelector(".fazer-pedido");
        mostrar.classList.add("aparece");
    }
}
function fecharpedido(){
    preco = preco_prato + preco_bebida + preco_sobremesa;
    
    mensagem = 
    `Olá, gostaria de fazer o pedido:
    %0a- Prato: ${prato}
    %0a- Bebida: ${bebida}
    %0a- Sobremesa: ${sobremesa}
    %0aTotal: R$ ${preco},00`


    window.open("https://wa.me/+559999999999?text="+ mensagem);
}