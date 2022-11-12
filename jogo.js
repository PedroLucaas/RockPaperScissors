var pedra = document.querySelector("#pedra");
var papel = document.querySelector("#papel");
var tesoura = document.querySelector("#tesoura");
var resultado = document.querySelector("#resultado");
var escolhaMaquina;
var escolhaJogador;
var escolhido="";






pedra.addEventListener("click", function() {
    pedra.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
    papel.style.boxShadow = "";
    tesoura.style.boxShadow = "";
    escolhaJogador = 1;
    escolhido="pedra";

    console.log("pedra");

    $( "#pedra" ).effect( "shake" );
    resultado.innerHTML="Escolheu "+escolhido;


});

papel.addEventListener("click", function() {
    papel.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
    pedra.style.boxShadow = "";
    tesoura.style.boxShadow = "";
    escolhaJogador = 2;
    escolhido="papel";

    $( "#papel" ).effect( "shake" );
    console.log("papel");
    resultado.innerHTML="Escolheu "+escolhido;
});

tesoura.addEventListener("click", function() {
    tesoura.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
    papel.style.boxShadow = "";  
    pedra.style.boxShadow = "";
    escolhaJogador = 3
    escolhido="tesoura";

    console.log("tesoura");
    $( "#tesoura" ).effect( "shake" );
    resultado.innerHTML="Escolheu "+escolhido;
});

function playGame() {
    Math.floor(Math.random() * 10 + 1); // escolha maquina numero aleatório 1-3
    max = 3;

    function getRandom(max) {
      return Math.floor(Math.random() * 3 + 1);
    }

     escolhaMaquina = getRandom(max);

    switch (escolhaJogador)
    {
    case 1:
        switch(escolhaMaquina)
        {
            case 1:
                resultado.innerHTML = "Empate!";
                break;
            case 2:
               
                resultado.innerHTML ="Coms <span style='color:red';font-weight:bold'>"+escolhido+"</b></span>  voce Perdeu, eu escolhi Papel.";
                break;
            case 3: 
                resultado.innerHTML  ="Com <span style='color:green';font-weight:bold'>"+escolhido +"</b></span> voce Ganhou, eu escolhi Tesoura.";
                    break;
            default:
                resultado.innerHTML ="Erro.";
                break;
    
        }
        break;
    case 2:
        switch(escolhaMaquina)
        {
            case 1:
                resultado.innerHTML ="Com <span style='color:green';font-weight:bold'>"+ escolhido +"</b></span> Voce Ganhou, eu escolhi Pedra.";
                break;
            case 2:
                resultado.innerHTML ="Empate!";
                break;
            case 3: 
                resultado.innerHTML = "Com <span style='color:red';font-weight:bold'>"+escolhido+"</b></span> voce perdeu eu escolhi Tesoura.";
                break;
            default:
                resultado.innerHTML ="Erro!";    
                break;
        }
        break;    
    case 3:
        switch(escolhaMaquina)
        {
            case 1:
                resultado.innerHTML = "Com <span style='color:red';font-weight:bold'>"+escolhido+"</b></span> voce perdeu eu escolhi Pedra.";
                break;
            case 2:
                resultado.innerHTML ="Com  <span style='color:green';font-weight:bold'>"+ escolhido + "</b></span> Voce Ganhou, eu escolhi Papel.";
                break;
            case 3: 
                resultado.innerHTML ="Empate!";
                break;
            default:
                resultado.innerHTML ="Erro!";
                break;
        }
        break;    

    }}
