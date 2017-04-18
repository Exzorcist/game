//My value for a game
var isPlaying;	//valueble game start/end (boolean)
var countRounds = 0;	//counter of rounds
var countStagesL = 0;	//counter of stages
var countStagesR = 1;	//counter of stages
var speed = 4;	//speed round
var flag = false;	//for call updata
var flagToDrawPlayer = 1;	//flag for player
var countHP = 0;	//count health player
var countBackFon = -1;	//count back fon
/////////////////////////////////////////////////////////////////////////
var canvasStart;	//valueble of menu game
var ctxCanvasStart;	//valueble of drawing menu game

var canvasForStart;	//no comments
var ctxCanvsForStart;	//no comments

var map;	//valueble of map game
var ctxMap;	//valueble of drawing map game

var mapRound;	//valueble of map game round
var ctxMapRound;	//valueble of drawing map game round

var canvasPlayer;	//valueble of my player
var ctxCanvasPlayer;	//valueble of drawing my player

var canvasEnemy;	//valueble of enemies
var ctxCanvasEnemy;	//valueble of drawing enemies

var canvasHealth;	//valueble of health
var ctxCanvasHealth;	//valueble of drawing health

var canvasBackFon;	//valueble of back fon
var ctxCanvasBackFon;	//valueble of drawing back fon

var canvasNodeBackFon;	//valueble of node back fon
var ctxCanvasNodeBackFon;	//valueble of drawing node back fon
/////////////////////////////////////////////////////////////////////////
var gameWidth = 1200;	//width map game
var gameHeight = 650;	//height map game

var nodeRoundWidth = 435;	//width node round
var nodeRoundHeight = 90;	//height node round
/////////////////////////////////////////////////////////////////////////
var mapX1 = 0;	//valueble for drawing motion stage left begin on canvas X
var mapX2 = gameWidth;	// --//-- motion stage right
/////////////////////////////////////////////////////////////////////////
//My stages, all 7
var stagesSprite = new Image();
stagesSprite.src = "img/sprite_stages.png";

var arrMapSpriteY = [0, 0, 650, 650, 1300, 1300, 1950, 1950, 2600, 2600, 3250, 3250, 3900, 3900];
/////////////////////////////////////////////////////////////////////////
//My round, all 7, use sprite
var roundSprite = new Image();
roundSprite.src = "img/sprite_round.png";

var argRoundSpriteY = [0, 0, 91, 91, 182, 182, 273];
var argRoundSpriteX = [0, 435, 0, 435, 0, 435, 0];
/////////////////////////////////////////////////////////////////////////
//Sound's for my round's
var snd1 = new Audio("sound/round_1.mp3");
var snd2 = new Audio("sound/round_2.mp3");
var snd3 = new Audio("sound/round_3.mp3");
var snd4 = new Audio("sound/round_4.mp3");
var snd5 = new Audio("sound/round_5.mp3");
var snd6 = new Audio("sound/round_6.mp3");
var snd7 = new Audio("sound/round_7.mp3");
var argSounds = [snd1, snd2, snd3, snd4, snd5, snd6, snd7];
/////////////////////////////////////////////////////////////////////////
var myPlayer = new Image();
myPlayer.src = "img/sprite_player_and_enemies.png";

var speedPlayer = 3;

var argPlayerX = [0, 142, 287, 432];
var argPlayerY = [49, 0, 49, 23];
var argPlayerWidth = [142, 145, 144, 103];
var argPlayerHeight = [56, 105, 87, 82];
/////////////////////////////////////////////////////////////////////////
//for creating enemies
var myEnemy = new Image();
myEnemy.src = "img/sprite_player_and_enemies.png";

var argEnemyX = [0, 62.5, 156, 243, 295, 380, 500];
var argEnemyWidth = [62.5, 93, 86, 54, 84, 120, 127];
var argEnemyHeight = [42, 90, 58, 39, 47, 76, 66];
var argEnemySpeed = [8, 10, 12, 14, 16, 18, 20];

var enemies = [];	//array of enemies
var spawnInterval;	//boolean function for creat
var spawnTime = 6300;	//freak drawing
var spawnAmount = 1;	//count enemy
/////////////////////////////////////////////////////////////////////////
var health = new Image();
health.src = "img/sprite_dragon_health.png";

var argHelathY = [0, 22, 45, 69, 92, 115];

var totalHealth = 150;

var dragonCry = new Audio("sound/dragon_cry.wav");
/////////////////////////////////////////////////////////////////////////
var backFon = new Image();
backFon.src = "img/sprite_back_fon.png";

var argBackFonY = [0, 650, 1320, 1974, 2622, 3273, 3923, 4573];
/////////////////////////////////////////////////////////////////////////
var nodeBackFon = new Image();
nodeBackFon.src = "img/sprite_node_back_fon.png";

var timer = new Audio("sound/timer.wav");

var argNodeBackFonX = [0, 195, 0, 82, 153, 229, 317, 0, 0, 0, 0];
var argNodeBackFonY = [0, 0, 72, 72, 72, 72, 72, 174, 251, 326, 398];
var argNodeBackFonWidth = [195, 430, 73, 82, 74.5, 88.5, 77.5, 316, 286, 414, 974];
var argNodeBackFonHeight = [72, 72, 103, 103, 103, 103, 103, 77, 74, 72, 72];
/////////////////////////////////////////////////////////////////////////
var lose = new Audio("sound/lose.mp3");
var upRound = new Audio("sound/up_round.mp3");
var win = new Audio("sound/win.mp3");
/////////////////////////////////////////////////////////////////////////
var buttom = new Image();
buttom.src = "img/sprite_buttom.png";

var hoverButtom = new  Audio("sound/hover.wav");
var clickButtom = new  Audio("sound/click.wav");

var argButtomX = [7, 7, 7, 305, 305, 305, 612, 612, 612];
var argButtomY = [6.5, 66.5, 128, 6.5, 66.5, 128, 6.5, 66.5, 128];
var argButtomWidth = [271.5, 271.5, 271.5, 274, 274, 274, 273, 273, 273];
var argButtomHeight = 49;

var mouseX;
var mouseY;
//get mouse position and draw buttom
function getMousePositionWin(e){
  	mouseX = e.offsetX;
	mouseY = e.offsetY;
	if(mouseX >= 0 && mouseX <= gameWidth && mouseY >= 0 && mouseY <= 650){
		ctxCanvasNodeBackFon.drawImage(buttom, argButtomX[3], argButtomY[3], argButtomWidth[3], argButtomHeight, gameWidth/2-argButtomWidth[3]/2, gameHeight-argButtomHeight-50, argButtomWidth[3], argButtomHeight);
		if(mouseX >= gameWidth/2-argButtomWidth[3]/2 &&
			mouseX <= gameWidth/2-argButtomWidth[3]/2+argButtomWidth[3] &&
			mouseY >= gameHeight-argButtomHeight-50 &&
			mouseY <= gameHeight-argButtomHeight-50+argButtomHeight){
			//----------------------------------------------
			ctxCanvasNodeBackFon.clearRect(gameWidth/2-argButtomWidth[3]/2, gameHeight-argButtomHeight-50 , argButtomWidth[4], argButtomHeight);
			ctxCanvasNodeBackFon.drawImage(buttom, argButtomX[4], argButtomY[4], argButtomWidth[4], argButtomHeight, gameWidth/2-argButtomWidth[4]/2, gameHeight-argButtomHeight-50, argButtomWidth[4], argButtomHeight);
			document.addEventListener("click", restartGameWin, false);	//event mouse
			hoverButtom.play();
		}else{
			ctxCanvasNodeBackFon.clearRect(gameWidth/2-argButtomWidth[4]/2, gameHeight-argButtomHeight-50 , argButtomWidth[3], argButtomHeight);
			ctxCanvasNodeBackFon.drawImage(buttom, argButtomX[3], argButtomY[3], argButtomWidth[3], argButtomHeight, gameWidth/2-argButtomWidth[3]/2, gameHeight-argButtomHeight-50, argButtomWidth[3], argButtomHeight);
			hoverButtom.pause();
			hoverButtom.currentTime = 0.0;
		}	
	}else{
		ctxCanvasNodeBackFon.clearRect(gameWidth/2-argButtomWidth[4]/2, gameHeight-argButtomHeight-50 , argButtomWidth[3], argButtomHeight);
	}
}
function getMousePositionLose(e){
  	mouseX = e.offsetX;
	mouseY = e.offsetY;
	
	if(mouseX >= 0 && mouseX <= gameWidth && mouseY >= 0 && mouseY <= 650){
		ctxCanvasNodeBackFon.drawImage(buttom, argButtomX[0], argButtomY[0], argButtomWidth[0], argButtomHeight, gameWidth/2-argButtomWidth[0]/2, gameHeight-argButtomHeight-50, argButtomWidth[0], argButtomHeight);
		if(mouseX >= gameWidth/2-argButtomWidth[0]/2 &&
			mouseX <= gameWidth/2-argButtomWidth[0]/2+argButtomWidth[0] &&
			mouseY >= gameHeight-argButtomHeight-50 &&
			mouseY <= gameHeight-argButtomHeight-50+argButtomHeight){
			//----------------------------------------------
			ctxCanvasNodeBackFon.clearRect(gameWidth/2-argButtomWidth[0]/2, gameHeight-argButtomHeight-50 , argButtomWidth[1], argButtomHeight);
			ctxCanvasNodeBackFon.drawImage(buttom, argButtomX[1], argButtomY[1], argButtomWidth[1], argButtomHeight, gameWidth/2-argButtomWidth[1]/2, gameHeight-argButtomHeight-50, argButtomWidth[1], argButtomHeight);
			
			document.addEventListener("click", restartGameLose, false);	//event mouse
			hoverButtom.play();
		}else{
			ctxCanvasNodeBackFon.clearRect(gameWidth/2-argButtomWidth[1]/2, gameHeight-argButtomHeight-50 , argButtomWidth[0], argButtomHeight);
			ctxCanvasNodeBackFon.drawImage(buttom, argButtomX[0], argButtomY[0], argButtomWidth[0], argButtomHeight, gameWidth/2-argButtomWidth[0]/2, gameHeight-argButtomHeight-50, argButtomWidth[0], argButtomHeight);
			hoverButtom.pause();
			hoverButtom.currentTime = 0.0;
		}	
	}/*else{
		ctxCanvasNodeBackFon.clearRect(gameWidth/2-argButtomWidth[1]/2, gameHeight-argButtomHeight-50 , argButtomWidth[0], argButtomHeight);
	}*/
}
function getMousePositionStart(e){
  	mouseX = e.offsetX;
	mouseY = e.offsetY;
	if(mouseX >= 0 && mouseX <= gameWidth && mouseY >= 0 && mouseY <= 650){
		ctxCanvsForStart.drawImage(buttom, argButtomX[6], argButtomY[6], argButtomWidth[6], argButtomHeight, gameWidth/2-argButtomWidth[6]/2, gameHeight-argButtomHeight-50, argButtomWidth[6], argButtomHeight);
		if(mouseX >= gameWidth/2-argButtomWidth[6]/2 &&
			mouseX <= gameWidth/2-argButtomWidth[6]/2+argButtomWidth[6] &&
			mouseY >= gameHeight-argButtomHeight-50 &&
			mouseY <= gameHeight-argButtomHeight-50+argButtomHeight){
			//----------------------------------------------
			ctxCanvsForStart.clearRect(gameWidth/2-argButtomWidth[6]/2, gameHeight-argButtomHeight-50 , argButtomWidth[7], argButtomHeight);
			ctxCanvsForStart.drawImage(buttom, argButtomX[7], argButtomY[7], argButtomWidth[7], argButtomHeight, gameWidth/2-argButtomWidth[7]/2, gameHeight-argButtomHeight-50, argButtomWidth[7], argButtomHeight);
			document.addEventListener("click", restartGameStart, false);	//event mouse
			hoverButtom.play();
		}else{
			ctxCanvsForStart.clearRect(gameWidth/2-argButtomWidth[7]/2, gameHeight-argButtomHeight-50 , argButtomWidth[6], argButtomHeight);
			ctxCanvsForStart.drawImage(buttom, argButtomX[6], argButtomY[6], argButtomWidth[6], argButtomHeight, gameWidth/2-argButtomWidth[6]/2, gameHeight-argButtomHeight-50, argButtomWidth[6], argButtomHeight);
			hoverButtom.pause();
			hoverButtom.currentTime = 0.0;
		}	
	}
}
//restart
function restartGameWin(){
	clickButtom.play();
	setTimeout(function(){
		zeroOutData();
		document.removeEventListener("mousemove", getMousePositionWin, false);	// remove event mouse
		init();
	}, 1000);	
}
function restartGameLose(){
	clickButtom.play();
	setTimeout(function(){		
		zeroOutData();
		document.removeEventListener("mousemove", getMousePositionLose, false);	// remove event mouse
		init();
	}, 1000);	
}
function restartGameStart(){
	clickButtom.play();
	setTimeout(function(){		
		ctxCanvasStart.clearRect(0, 0, gameWidth, gameHeight);
		ctxCanvsForStart.clearRect(0, 0, gameWidth, gameHeight);
		document.removeEventListener("mousemove", getMousePositionStart, false);	// remove event mouse
		init();
	}, 1000);	
}
function zeroOutData(){
	countRounds = 0;	//counter of rounds
	countStagesL = 0;	//counter of stages
	countStagesR = 1;	//counter of stages
	speed = 4;	//speed round
	flag = false;	//for call updata
	flagToDrawPlayer = 1;	//flag for player
	countHP = 0;	//count health player
	countBackFon = -1;	//count back fon
	enemies = [];	//array of enemies
	spawnAmount = 1;	//count enemy
	totalHealth = 150;
	lose.pause();
	lose.currentTime = 0.0;
	clickButtom.pause();
	clickButtom.currentTime = 0.0;
}
/////////////////////////////////////////////////////////////////////////
var imgCountRes = new Image();
imgCountRes.src = "img/sprite_back_count.png";

var imgError = new Image();
imgError.src = "img/error_round.png";

var argImgCountResX = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
var argImgCountResY = [0, 70, 140, 210];

function countForGame(){
	ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
	ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[0], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	//----------------------------------------------
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[1], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 1000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[2], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 2000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[3], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 3000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[4], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 4000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[5], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 5000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[6], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 6000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[7], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 7000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[8], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 8000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[9], argImgCountResY[0], 100, 70, gameWidth-100, 0, 100, 70);
	}, 9000);
	//----------------------------------------------
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[0], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 10000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[1], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 11000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[2], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 12000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[3], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 13000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[4], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 14000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[5], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 15000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[6], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 16000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[7], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 17000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[8], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 18000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[9], argImgCountResY[1], 100, 70, gameWidth-100, 0, 100, 70);
	}, 19000);
	//----------------------------------------------
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[0], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 20000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[1], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 21000)
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[2], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 22000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[3], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 23000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[4], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 24000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[5], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 25000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[6], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 26000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[7], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 27000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[8], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 28000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[9], argImgCountResY[2], 100, 70, gameWidth-100, 0, 100, 70);
	}, 29000);
	//----------------------------------------------
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[0], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 30000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[1], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 31000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[2], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 32000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[3], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 33000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[4], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 34000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[5], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 35000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[6], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 36000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[7], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 37000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[8], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 38000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		ctxCanvasNodeBackFon.drawImage(imgCountRes, argImgCountResX[9], argImgCountResY[3], 100, 70, gameWidth-100, 0, 100, 70);
	}, 39000);
	//----------------------------------------------
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth-100, 0, 100, 70);
		document.addEventListener("mousemove", getMousePositionLose, false);	//event mouse
	}, 40000);
}
/////////////////////////////////////////////////////////////////////////
//valuable for animation anywhere
var requestAnimFrame = window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;
/////////////////////////////////////////////////////////////////////////
var startMenu = new Image();
startMenu.src = "img/start_game.jpg";

function startGame(){
	initCanvas();
	ctxCanvasStart.drawImage(startMenu, 0, 0, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
	document.addEventListener("mousemove", getMousePositionStart, false);	//event mouse
}
/////////////////////////////////////////////////////////////////////////
function initCanvas(){
	//initialization valueble of map game
	map = document.getElementById("map_game");
	ctxMap = map.getContext("2d");
	map.width = gameWidth;
	map.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of round game
	mapRound = document.getElementById("nomber_round");
	ctxMapRound = mapRound.getContext("2d");
	mapRound.width = gameWidth;
	mapRound.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of my player
	canvasPlayer = document.getElementById("player");
	ctxCanvasPlayer = canvasPlayer.getContext("2d");
	canvasPlayer.width = gameWidth;
	canvasPlayer.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of enemies
	canvasEnemy = document.getElementById("enemy");
	ctxCanvasEnemy = canvasEnemy.getContext("2d");
	canvasEnemy.width = gameWidth;
	canvasEnemy.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of health
	canvasHealth = document.getElementById("health");
	ctxCanvasHealth = canvasHealth.getContext("2d");
	canvasHealth.width = gameWidth;
	canvasHealth.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of back fon
	canvasBackFon = document.getElementById("back_fon");
	ctxCanvasBackFon = canvasBackFon.getContext("2d");
	canvasBackFon.width = gameWidth;
	canvasBackFon.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of node back fon
	canvasNodeBackFon = document.getElementById("node_back_fon");
	ctxCanvasNodeBackFon = canvasNodeBackFon.getContext("2d");
	canvasNodeBackFon.width = gameWidth;
	canvasNodeBackFon.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of menu game
	canvasStart = document.getElementById("start");
	ctxCanvasStart = canvasStart.getContext("2d");
	canvasStart.width = gameWidth;
	canvasStart.height = gameHeight;
	//----------------------------------------------
	//initialization valueble of menu game
	canvasForStart = document.getElementById("for_start");
	ctxCanvsForStart = canvasForStart.getContext("2d");
	canvasForStart.width = gameWidth;
	canvasForStart.height = gameHeight;
	//----------------------------------------------
}
/////////////////////////////////////////////////////////////////////////
function init(){	//initialization all process in game	
	initCanvas();
	startLoop();

	document.removeEventListener("click", restartGameStart, false);
	document.removeEventListener("click", restartGameLose, false);
	document.removeEventListener("click", restartGameWin, false);

	player = new Player();	//creat new player
	document.addEventListener("keydown", checkKeyDown, false);	//event key
	document.addEventListener("keyup", checkKeyUp, false);	//event key

	setTimeout(countForGame, 2500);
	setTimeout(stoptLoop, 42000);	//42000
}
/////////////////////////////////////////////////////////////////////////
function updata(){	//update all date in my canvas
	drawBg();
	moveBG();
	ctxMapRound.clearRect(0, 0 , gameWidth, gameHeight);	//clear round

	player.updata();
	for(var i=0; i<enemies.length; i++){
		enemies[i].updata();
	}
}
/////////////////////////////////////////////////////////////////////////
function nextRound(){	//insert node round
	drawBg();
	setTimeout(function(){flag = true;}, 2000);	
	//----------------------------------------------
	ctxMapRound.clearRect(0, 0 , gameWidth, gameHeight);
	ctxMapRound.drawImage(roundSprite, argRoundSpriteX[countRounds], argRoundSpriteY[countRounds], nodeRoundWidth, nodeRoundHeight, 400, 235, nodeRoundWidth, nodeRoundHeight);
}
/////////////////////////////////////////////////////////////////////////
function drawBg(){	//drawing my stages
	ctxMap.clearRect(0, 0 , gameWidth, gameHeight);
	ctxMap.drawImage(stagesSprite, 0, arrMapSpriteY[countStagesL], gameWidth, gameHeight, mapX1, 0, gameWidth, gameHeight);
	ctxMap.drawImage(stagesSprite, 1200, arrMapSpriteY[countStagesR], gameWidth, gameHeight, mapX2, 0, gameWidth, gameHeight);
}
function moveBG(){	//function for moving my stages
	mapX1 -= speed;
	mapX2 -= speed;
	if(mapX1 + gameWidth < 0){
		mapX1 = gameWidth-10;
	} 
	if(mapX2 + gameWidth < 0){
		mapX2 = gameWidth-10;
	}
}
/////////////////////////////////////////////////////////////////////////
function nextStag(){	//insert new stage on the map
	if(countRounds < 7){		
		countRounds += 1;
		countStagesL += 2;
		countStagesR += 2;
		speed += 1;
		flag = false;
		mapX1 = 0;
		mapX2 = gameWidth;
		speedPlayer += 0.2;
		init();
	}
	if(countRounds == 7){
		stoptLoop();
	}
}
/////////////////////////////////////////////////////////////////////////
function Player(){	//creat object player
	this.srcX = argPlayerX[0];
	this.srcY = argPlayerY[0];
	this.drawX = argPlayerWidth[0];
	this.drawY = gameHeight/2-argPlayerHeight[0];
	this.width = argPlayerWidth[0];
	this.height = argPlayerHeight[0];
	this.speed = speedPlayer;
	//for keys
	this.isUp = false;
	this.isDown = false;
	this.isRight = false;
	this.isLeft = false;
}
//drawing player
Player.prototype.draw = function(){
	if(flagToDrawPlayer == 1){
		ctxCanvasPlayer.clearRect(0, 0 , gameWidth, gameHeight);
		ctxCanvasPlayer.drawImage(myPlayer, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
		setTimeout(function(){flagToDrawPlayer = 2}, 200);
	}
	if(flagToDrawPlayer == 2){
		this.srcX = argPlayerX[1];
		this.srcY = argPlayerY[1];
		this.width = argPlayerWidth[1];
		this.height = argPlayerHeight[1];

		ctxCanvasPlayer.clearRect(0, 0 , gameWidth, gameHeight);
		ctxCanvasPlayer.drawImage(myPlayer, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
		setTimeout(function(){flagToDrawPlayer = 3}, 200);
	}
	if(flagToDrawPlayer == 3){
		this.srcX = argPlayerX[2];
		this.srcY = argPlayerY[2];
		this.width = argPlayerWidth[2];
		this.height = argPlayerHeight[2];

		ctxCanvasPlayer.clearRect(0, 0 , gameWidth, gameHeight);
		ctxCanvasPlayer.drawImage(myPlayer, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
		setTimeout(function(){flagToDrawPlayer = 1}, 200);
	}
	if(flagToDrawPlayer == 4){
		this.srcX = argPlayerX[3];
		this.srcY = argPlayerY[3];
		this.width = argPlayerWidth[3];
		this.height = argPlayerHeight[3];

		ctxCanvasPlayer.clearRect(0, 0 , gameWidth, gameHeight);
		ctxCanvasPlayer.drawImage(myPlayer, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
		setTimeout(function(){flagToDrawPlayer = 1}, 200);
	}
}

Player.prototype.updata = function(){
	if(this.drawX < 0){
		this.drawX = 0;
	}
	if(this.drawX > (gameWidth - this.width)){
		this.drawX = gameWidth - this.width;
	}
	if(this.drawY < 0){
		this.drawY = 0;
	}
	if(this.drawY > (gameHeight - this.height)){
		this.drawY = gameHeight - this.height;
	}
	//reduce HP when player hit enemy
	for(var i=0; i<enemies.length; i++){

		if(this.drawX+this.width >= enemies[i].drawX && this.drawX <= enemies[i].drawX+enemies[i].width &&
			this.drawY <= enemies[i].drawY+enemies[i].height && this.drawY+this.height >= enemies[i].drawY){

			totalHealth -= 1;
			dragonCry.play();

			if(totalHealth <= 150 && totalHealth >= 130){
				countHP = 0;
			}
			if(totalHealth <= 129 && totalHealth >= 100){
				countHP = 1;
			}
			if(totalHealth <= 99 && totalHealth >= 60){
				countHP = 2;
			}
			if(totalHealth <= 69 && totalHealth >= 30){
				countHP = 3;
			}
			if(totalHealth <= 29 && totalHealth >= 0){
				countHP = 4;
			}
			if(totalHealth <= 0){
				countHP = 5;	
				ctxCanvasNodeBackFon.clearRect(gameWidth/2-225, 0, 100, 70);
				ctxCanvasNodeBackFon.drawImage(imgError, 0, 0, 450, 58, gameWidth/2-225, 0, 450, 58);
				/*setInterval(function(){
					ctxCanvasNodeBackFon.clearRect(gameWidth/2-225, 0, 100, 70);
					setInterval(function(){
						ctxCanvasNodeBackFon.drawImage(imgError, 0, 0, 450, 58, gameWidth/2-225, 0, 450, 58);
					}, 500);
				}, 1000);*/
				
			}
		}
	}
	this.chooseDir();
}
//chouse player direction
Player.prototype.chooseDir = function(){
	if(this.isUp){
		this.drawY -= this.speed;
	}
	if(this.isDown){
		this.drawY += this.speed;
	}
	if(this.isRight){
		this.drawX += this.speed;
	}
	if(this.isLeft){
		this.drawX -= this.speed;
		flagToDrawPlayer = 4;
	}
}
//function for check key PRESS for player
function checkKeyDown(e){
	var keyID = e.keyCode || e.witch;
	var keyChar = String.fromCharCode(keyID);

	if(keyChar == 'W'){
		player.isUp = true;
		e.preventDefult();
	}
	if(keyChar == 'S'){
		player.isDown = true;
		e.preventDefult();
	}
	if(keyChar == 'A'){
		player.isLeft = true;
		e.preventDefult();
	}
	if(keyChar == 'D'){
		player.isRight = true;
		e.preventDefult();
	}
}
//function for check key RELEASE for player
function checkKeyUp(e){
	var keyID = e.keyCode || e.witch;
	var keyChar = String.fromCharCode(keyID);

	if(keyChar == 'W'){
		player.isUp = false;
		e.preventDefult();
	}
	if(keyChar == 'S'){
		player.isDown = false;
		e.preventDefult();
	}
	if(keyChar == 'A'){
		player.isLeft = false;
		e.preventDefult();
	}
	if(keyChar == 'D'){
		player.isRight = false;
		e.preventDefult();
	}
}
/////////////////////////////////////////////////////////////////////////
function Enemy(){	//creat object enemy
	this.srcX = argEnemyX[countRounds];
	this.srcY = 135;
	this.drawX = Math.floor(Math.random() * gameWidth*1.5) + gameWidth;
	this.drawY = Math.floor(Math.random() * gameHeight);
	this.width = argEnemyWidth[countRounds];
	this.height = argEnemyHeight[countRounds];
	this.speed = argEnemySpeed[countRounds];
}
//metod's object enemy
Enemy.prototype.draw = function(){
	ctxCanvasEnemy.drawImage(myEnemy, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);	
}
Enemy.prototype.updata = function(){
	this.drawX -= this.speed;
	if(this.drawX < (0 - this.width)){
		this.destroy();
	}
}
Enemy.prototype.destroy = function(){	
	enemies.splice(enemies.indexOf(this), 1);
}
//draw COUNT enemy in canvas
function spawnEnemy(count){
	spawnAmount += 3;
	for(var i=0; i<count; i++){
		enemies[i] = new Enemy();
	}
}
function startCreatingEnemies(){
	stopCreatingEnemies();
	spawnInterval = setInterval(function(){spawnEnemy(spawnAmount)}, spawnTime);
}
function stopCreatingEnemies(){
	clearInterval(spawnInterval);
}
/////////////////////////////////////////////////////////////////////////
function playerHealth(){	//return draw HP
	ctxCanvasHealth.clearRect(0, 0 , gameWidth, gameHeight);
	ctxCanvasHealth.drawImage(health, 0, argHelathY[countHP], 121, 24, 20, 20, 121, 24);
}
/////////////////////////////////////////////////////////////////////////
function endRound(){
	countBackFon += 1;
	if(countBackFon < 6){
		ctxCanvasBackFon.clearRect(0, 0 , gameWidth, gameHeight);
		ctxCanvasBackFon.drawImage(backFon, 0, argBackFonY[countBackFon], 1200, 650, 0, 0, 1200, 650);
		drawNodeBackFon();
	}else if(countBackFon == 6){
		stoptLoop();
	}	
}
/////////////////////////////////////////////////////////////////////////
function drawNodeBackFon(){
	ctxCanvasNodeBackFon.clearRect(0, 0 , gameWidth, gameHeight);
	upRound.play();
	stopCreatingEnemies();
	setTimeout(function(){
		ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[0], argNodeBackFonY[0], argNodeBackFonWidth[0], argNodeBackFonHeight[0], gameWidth/2-argNodeBackFonWidth[0]/2, (gameHeight/2-argNodeBackFonHeight[0]/2)-100, argNodeBackFonWidth[0], argNodeBackFonHeight[0]);
	}, 500);
	setTimeout(function(){
		if(countRounds == 5){
			ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[9], argNodeBackFonY[9], argNodeBackFonWidth[9], argNodeBackFonHeight[9], gameWidth/2-argNodeBackFonWidth[9]/2, gameHeight/2-argNodeBackFonHeight[9]/2, argNodeBackFonWidth[9], argNodeBackFonHeight[9]);
		}else{
			ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[1], argNodeBackFonY[1], argNodeBackFonWidth[1], argNodeBackFonHeight[1], gameWidth/2-argNodeBackFonWidth[1]/2, gameHeight/2-argNodeBackFonHeight[1]/2, argNodeBackFonWidth[1], argNodeBackFonHeight[1]);
		}
	}, 1000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[2], argNodeBackFonY[2], argNodeBackFonWidth[2], argNodeBackFonHeight[2], gameWidth/2-argNodeBackFonWidth[2]/2, (gameHeight/2-argNodeBackFonHeight[2]/2)+100, argNodeBackFonWidth[2], argNodeBackFonHeight[2]);
		timer.play();
	}, 2000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth/2-argNodeBackFonWidth[2]/2, (gameHeight/2-argNodeBackFonHeight[2]/2)+100, argNodeBackFonWidth[2], argNodeBackFonHeight[2]);
		ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[3], argNodeBackFonY[3], argNodeBackFonWidth[3], argNodeBackFonHeight[3], gameWidth/2-argNodeBackFonWidth[3]/2, (gameHeight/2-argNodeBackFonHeight[3]/2)+100, argNodeBackFonWidth[3], argNodeBackFonHeight[3]);
		timer.pause();
		timer.currentTime = 0.0;
		timer.play();
	}, 3000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth/2-argNodeBackFonWidth[3]/2, (gameHeight/2-argNodeBackFonHeight[3]/2)+100, argNodeBackFonWidth[3], argNodeBackFonHeight[3]);
		ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[4], argNodeBackFonY[4], argNodeBackFonWidth[4], argNodeBackFonHeight[4], gameWidth/2-argNodeBackFonWidth[4]/2, (gameHeight/2-argNodeBackFonHeight[4]/2)+100, argNodeBackFonWidth[4], argNodeBackFonHeight[4]);
		timer.pause();
		timer.currentTime = 0.0;
		timer.play();
	}, 4000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth/2-argNodeBackFonWidth[4]/2, (gameHeight/2-argNodeBackFonHeight[4]/2)+100, argNodeBackFonWidth[4], argNodeBackFonHeight[4]);
		ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[5], argNodeBackFonY[5], argNodeBackFonWidth[5], argNodeBackFonHeight[5], gameWidth/2-argNodeBackFonWidth[5]/2, (gameHeight/2-argNodeBackFonHeight[5]/2)+100, argNodeBackFonWidth[5], argNodeBackFonHeight[5]);
		timer.pause();
		timer.currentTime = 0.0;
		timer.play();
	}, 5000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(gameWidth/2-argNodeBackFonWidth[5]/2, (gameHeight/2-argNodeBackFonHeight[5]/2)+100, argNodeBackFonWidth[5], argNodeBackFonHeight[5]);
		ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[6], argNodeBackFonY[6], argNodeBackFonWidth[6], argNodeBackFonHeight[6], gameWidth/2-argNodeBackFonWidth[6]/2, (gameHeight/2-argNodeBackFonHeight[6]/2)+100, argNodeBackFonWidth[6], argNodeBackFonHeight[6]);
		timer.pause();
		timer.currentTime = 0.0;
		timer.play();
	}, 6000);
	setTimeout(function(){
		ctxCanvasNodeBackFon.clearRect(0, 0 , gameWidth, gameHeight);
		nextStag();
	}, 7000);
}
/////////////////////////////////////////////////////////////////////////
function loop(){	//game in processed
	if(isPlaying){		
		if(flag == false){
			nextRound();			
		}else{
			updata();
			draw();
			playerHealth();
			argSounds[countRounds].play();
		}
		requestAnimFrame(loop);
	}
}
function startLoop(){	//start game
	isPlaying = true;
	loop();
	startCreatingEnemies();
}
function stoptLoop(){	//end game
	isPlaying = false;
	argSounds[countRounds].pause();
	argSounds[countRounds].currentTime = 0.0;
	spawnAmount = 1;
	enemies = [];
	//ctxCanvasNodeBackFon.clearRect(gameWidth/2-225, 0, 100, 70);
	setTimeout(function(){
		if(countBackFon <= 5 && countHP == 5){
			argSounds[countRounds].pause();
			argSounds[countRounds].currentTime = 0.0;
			lose.play();
			ctxCanvasBackFon.clearRect(0, 0 , gameWidth, gameHeight);			
			ctxCanvasNodeBackFon.clearRect(0, 0 , gameWidth, gameHeight);
			ctxCanvasBackFon.drawImage(backFon, 0, argBackFonY[7], 1200, 650, 0, 0, 1200, 650);
			ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[7], argNodeBackFonY[7], argNodeBackFonWidth[7], argNodeBackFonHeight[7], gameWidth/2-argNodeBackFonWidth[7]/2, gameHeight/2-argNodeBackFonHeight[7]/2, argNodeBackFonWidth[7], argNodeBackFonHeight[7]);
			document.addEventListener("mousemove", getMousePositionLose, false);	//event mouse
		}else if(countBackFon == 6 && countHP < 5){
			argSounds[countRounds].pause();
			argSounds[countRounds].currentTime = 0.0;
			win.play();
			ctxCanvasBackFon.clearRect(0, 0 , gameWidth, gameHeight);
			ctxCanvasBackFon.drawImage(backFon, 0, argBackFonY[6], 1200, 650, 0, 0, 1200, 650);
			ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[8], argNodeBackFonY[8], argNodeBackFonWidth[8], argNodeBackFonHeight[8], gameWidth/2-argNodeBackFonWidth[8]/2, (gameHeight/2-argNodeBackFonHeight[8]/2)-50, argNodeBackFonWidth[8], argNodeBackFonHeight[8]);
			ctxCanvasNodeBackFon.drawImage(nodeBackFon, argNodeBackFonX[10], argNodeBackFonY[10], argNodeBackFonWidth[10], argNodeBackFonHeight[10], gameWidth/2-argNodeBackFonWidth[10]/2, (gameHeight/2-argNodeBackFonHeight[10]/2)+50, argNodeBackFonWidth[10], argNodeBackFonHeight[10]);
			document.addEventListener("mousemove", getMousePositionWin, false);	//event mouse
		}else{
			endRound();
		}
	}, 2000);	
}
function draw(){	//draw player and enemies
	player.draw();
	ctxCanvasEnemy.clearRect(0, 0 , gameWidth, gameHeight);
	for(var i=0; i<enemies.length; i++){
		enemies[i].draw();
	}
}
/////////////////////////////////////////////////////////////////////////