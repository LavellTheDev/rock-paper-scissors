var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("spock").onclick=playerThrowsSpock;
document.getElementById("lizard").onclick=playerThrowsLizard;

function playerThrowsRock(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	displayPlayedMessage("You played Rock. Computer played "+botsWeapon+".")
}
function playerThrowsScissors(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
	displayPlayedMessage("You played Scissors. Computer played "+botsWeapon+".")
}
function playerThrowsPaper(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
	displayPlayedMessage("You played Paper. Computer played "+botsWeapon+".")
}
function playerThrowsSpock(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
	displayPlayedMessage("You played Spock. Computer played "+botsWeapon+".")
}
function playerThrowsLizard(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
	displayPlayedMessage("You played Lizard. Computer played "+botsWeapon+".")
}
function getRandomWeapon(){
	var randomNumber=Math.random();//will return value between 0-1.
	var botsWeapon="rock";
	if(randomNumber<.20){
		botsWeapon="scissors";
	}
	else if(randomNumber<.4366){
		botsWeapon="paper";
	}
	else if(randomNumber<.6333){
		botsWeapon="spock";
	}
	else if(randomNumber<.8000){
		botsWeapon="lizard";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("TIE! 'You are PWRFUL Padawan!''");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")||
		(botsWeapon=="rock" && playersWeapon=="lizard")||
		(botsWeapon=="spock" && playersWeapon=="scissors") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="lizard" && playersWeapon=="paper")||
		(botsWeapon=="lizard" && playersWeapon=="spock")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Lose! Unicorn Bot Steals your life force");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Win! 'You can't beat me!'");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
//event listners
//they will fire functions
//I know what player picks
//need to know what bot picks
//need something that has bot chooses random
//a function to randomize
//a function that compares results
//a function that shows results
// when a function returns a value it returns where a function was called
//parametes are ... arguments are...
//
