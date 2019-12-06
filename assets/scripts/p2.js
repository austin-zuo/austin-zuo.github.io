const wintxt_div = document.getElementById("wintxt");
const rock_id = document.getElementById("r");
const paper_id = document.getElementById("p");
const scissors_id = document.getElementById("s");
const txt = document.getElementById("wintxt");
rock_id.addEventListener('click', function(){
	game("rock");
})
paper_id.addEventListener('click', function(){
	game("paper");
})
scissors_id.addEventListener('click', function(){
	game("scissors");
})

function game(choice){
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	}else if(computerChoice <= 0.67){
		computerChoice = "scissors";
	}else {
		computerChoice = "paper";
	}
	var x = "You chose " + choice + " and CPU chose " + computerChoice + ". ";
	if(computerChoice === choice){
		x = x + "It's a tie!";

	}else if((choice === "rock" && computerChoice === "scissors") || (choice === "paper" && computerChoice === "rock") 
		|| (choice === "scissors" && computerChoice === "paper")){
		x = x + "You win!"
	}else{
		x = x + "You lose!"
	}
	txt.innerHTML = x;
}

