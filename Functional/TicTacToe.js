var rl=require('readline-sync')
var player = 0;
var isEmpty = true;
    
    //var BOARD = new Array()
    var BOARD=[];
for (var i = 0; i < 3; i++) 
{ 
	BOARD[i] = []; 
} 


for (var i=0;i<3;i++) 
{ 
    BOARD[i]=new Array(3);
    for (var j=0;j<3;j++)
     { 
        BOARD[i][j]=''; 
     } 
}

play()
    function initBoard() {
		console.log("TIC TAC TOE GAME\nComputer is o\nPlayer  is x ");
		for (var i = 0; i < BOARD.length; i++) {
			for (var j = 0; j < BOARD[i].length; j++) {
				BOARD[i][j] = -10;
			}
		}
		console.log("Tic Tac Toe Board:");
		dispBoard();
    }
    

function dispBoard() {
		var count = 0;
		for (var i = 0; i < BOARD.length; i++) {
			console.log("---------------");
			console.log("||");
			for (var j = 0; j < BOARD[i].length; j++) {
				if (BOARD[i][j] == 0) {
					count++;
                    console.log(" X |");
                    console.log(BOARD.join('\n'))
				} else if (BOARD[i][j] == 1) {
					count++;
					console.log(" O |");
				} else
					console.log("   |");
			}
			console.log("|");
		}
		if (count === 9) {
			isEmpty = false;
		}
	console.log("---------------");
    }
    

  function putVal() {
		var i;
		var j;
		if (player % 2 === 1) {
			i = parseInt(Math.random() * 10) % 3;
			j = parseInt(Math.random() * 10) % 3;
		} else {			
		    console.log("enter value of x and y ");
			i = rl.questionInt(' ')
			j = rl.questionInt(' ')
		}
		
		if (BOARD[i][j] == -10) {
			if (player % 2 == 0) {
				BOARD[i][j] = 0;
			} else {
				BOARD[i][j] = 1;
				console.log("Computer Choosing " + i + " " + j);
			}
		} else
			putVal()

    }
    


   function win() {
		return ((BOARD[0][0] + BOARD[0][1] + BOARD[0][2] === player * 3)
				|| (BOARD[1][0] + BOARD[1][1] + BOARD[1][2] === player * 3)
				|| (BOARD[2][0] + BOARD[2][1] + BOARD[2][2] === player * 3)
				|| (BOARD[0][0] + BOARD[1][0] + BOARD[2][0] === player * 3)
				|| (BOARD[0][1] + BOARD[1][1] + BOARD[2][1] === player * 3)
				|| (BOARD[0][2] + BOARD[1][2] + BOARD[2][2] === player * 3)
				|| (BOARD[0][0] + BOARD[1][1] + BOARD[2][2] === player * 3) )
   }		


  function play() {
    initBoard();
    while (isEmpty) {
        console.log("Players turn");
        putVal();
        dispBoard();
        if (win()) {
            console.log("Player won");
            return;
        }
        player = 1;
        console.log("Computers turn");
        putVal();
        dispBoard();
        if (win()) {
           console.log("Computer won");
            return;
        }
        player = 0;
    }
}

