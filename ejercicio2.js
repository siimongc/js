var rock = "rock";
var scissors = "scissors";
var paper = "paper";

function game(you,cpu){
    if(you === cpu){
        return "It's a tie";
    }
    else if(you === rock && cpu === scissors){
        return "You win";
    }
    else if(you === scissors && cpu === paper){
        return "You win";
    }
    else if(you === paper && cpu === rock){
        return "You Win";
    }
    else if(cpu === rock && you === scissors){
        return "cpu win";
    }
    else if(cpu === scissors && you === paper){
        return "cpu win";
    }
    else if(cpu === paper && you === rock){
        return "cpu Win";
    }
}
