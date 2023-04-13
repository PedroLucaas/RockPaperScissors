var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissor");
var result = document.querySelector("#result");
var botChoice;
var playerChoice;
var choose;

rock.addEventListener("click", function() {
    rock.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
    paper.style.boxShadow = "";
    scissor.style.boxShadow = "";
    playerChoice = 1;
    choose="rock";
    result.innerHTML="chosen rock";
    $( "#rock" ).effect( "shake" );
});

paper.addEventListener("click", function() {
    paper.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
    rock.style.boxShadow = "";
    scissor.style.boxShadow = "";
    playerChoice = 2;
    choose="paper";
    result.innerHTML="chosen paper";
    $( "#paper" ).effect( "shake" );
});

scissor.addEventListener("click", function() {
    scissor.style.boxShadow = "0px 0px 25px rgb(390, 0, 00)";
    paper.style.boxShadow = "";  
    rock.style.boxShadow = "";
    playerChoice = 3;
    choose="scissor";
    result.innerHTML="chosen scissor";
    $( "#scissor" ).effect( "shake" );
});

function playGame() {
    Math.floor(Math.random() * 10 + 1); // escolha maquina numero aleatório 1-3
    max = 3;
    
    function getRandom(max) {
        return Math.floor(Math.random() * 3 + 1);
    }
    console.log(playerChoice) 

     botChoice = getRandom(max);

     switch (playerChoice)
     {
         case 1:
        switch(botChoice)
        {
            case 1:
                result.innerHTML = "Draw!";
                break;
            case 2:
                result.innerHTML ="using <span style='color:red';font-weight:bold'>"+choose+"</b></span>  you lose, my choice was paper.";
                break;
            case 3: 
                result.innerHTML  ="using <span style='color:green';font-weight:bold'>"+choose +"</b></span> you won, my choice was scissors.";
                    break;
            default:
                result.innerHTML ="Error.";
                break;
    
        }
        break;
    case 2:
        switch(botChoice)
        {
            case 1:
                result.innerHTML ="with <span style='color:green';font-weight:bold'>"+ choose +"</b></span> you won, my choice was rock.";
                break;
            case 2:
                result.innerHTML ="Draw!";
                break;
            case 3: 
                result.innerHTML = "with <span style='color:red';font-weight:bold'>"+choose+"</b></span> you lose, my choice was scissor.";
                break;
            default:
                result.innerHTML ="Error!";    
                break;
        }
        break;    
    case 3:
        switch(botChoice)
        {
            case 1:
                result.innerHTML = "with <span style='color:red';font-weight:bold'>"+choose+"</b></span> you lose, my choice was rock.";
                break;
            case 2:
                result.innerHTML ="with  <span style='color:green';font-weight:bold'>"+ choose + "</b></span> you won, my choice was paper.";
                break;
            case 3: 
                result.innerHTML ="Draw!";
                break;
            default:
                result.innerHTML ="Error!";
                break;
        }
        break;    

    }}

