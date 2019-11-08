/*
		Write a Program to play a Cross Game or Tic-Tac-Toe Game. 

		@Author vaishnavi Bhosale
*/

var cmove='o';
var hmove='x';
var shuffle = require('shuffle-array');
var readlineSync = require('readline-sync');

var size = readlineSync.question('Enter Array size ');
var arr=[];
for (var i = 0; i < size; i++) 
{ 
	arr[i] = []; 
} 


for (var i=0;i<3;i++) 
{ 
    arr[i]=new Array(3);
    for (var j=0;j<3;j++)
     { 
         arr[i][j]=''; 
     } 
} 


var c='COMPUTER';
var h='HUMAN';

showBoard(arr);
play(c);


function showBoard(arr) 
{ 
    console.log('\t\t\t', arr[0][0] ,' | ',arr[0][1],'  | ',arr[0][2],'  \n'); 
    console.log("\t\t\t------------------\n"); 
    console.log('\t\t\t', arr[1][0] ,' | ',arr[1][1],'  | ',arr[1][2],'  \n'); 
    console.log("\t\t\t------------------\n");
    console.log('\t\t\t', arr[2][0] ,' | ',arr[2][1],'  | ',arr[2][2],'  \n');                      
    return; 
} 

function showInstructions() 
{ 
    console.log('\t\t\t  Tic-Tac-Toe\n\n'); 
    console.log('Choose a cell numbered from 1 to 9 as below','and play\n\n'); 
      
    console.log('\t\t\t  1 | 2  | 3  \n'); 
    console.log('\t\t\t--------------\n'); 
    console.log('\t\t\t  4 | 5  | 6  \n'); 
    console.log('\t\t\t--------------\n'); 
    console.log('\t\t\t  7 | 8  | 9  \n\n'); 
      
    console.log('-\t-\t-\t-\t-\t-\t-\t-\t-\t-\n\n'); 
  
    return; 
} 

function initialise(arr,moves) 
{ 
	
	for (var i=0; i<size; i++) 
	{ 
		for (var j=0; j<size; j++) 
			arr[i][j] = ' '; 
	} 
	
    for (var i=0; i<size*size; i++) 
    {
        moves[i] = i; 
    }

	shuffle(moves, moves + size*size); 
	
	return; 
} 

function declareWinner(turn) 
{ 
	if (turn == c) 
		console.log("COMPUTER has won\n"); 
	else
		console.log("HUMAN has won\n"); 
	return; 
} 

function rowCrossed(arr) 
{ 
	for (var i=0; i<size; i++) 
	{ 
		if (arr[i][0] == arr[i][1] && 
			arr[i][1] == arr[i][2] && 
			arr[i][0] != ' ') 
			return (true); 
	} 
	return(false); 
} 


function columnCrossed(arr) 
{ 
	for (var i=0; i<size; i++) 
	{ 
		if (arr[0][i] == arr[1][i] && 
			arr[1][i] == arr[2][i] && 
			arr[0][i] != ' ') 
			return (true); 
	} 
	return(false); 
} 

function diagonalCrossed(arr) 
{ 
	if (arr[0][0] == arr[1][1] && 
		arr[1][1] == arr[2][2] && 
		arr[0][0] != ' ') 
		return(true); 
		
	if (arr[0][2] == arr[1][1] && 
		arr[1][1] == arr[2][0] && 
		arr[0][2] != ' ') 
		return(true); 

	return(false); 
} 

function gameOver(arr) 
{ 
	return(rowCrossed(arr) || columnCrossed(arr) 
			|| diagonalCrossed(arr) ); 
} 

function getInput()
{
    console.log(readlineSync.question('Its Human Turn: '));
}

function play(turn) 
{ 
	var arr = new Array(size); 

    for (var i = 0; i < size; i++) 
    {
        arr[i] = new Array(size);
    }

   var s=size*size;
	var moves=new Array(s); 
	
	
	initialise(arr, moves); 
	showInstructions(); 
	
	var moveIndex = 0, x, y; 
	
 
	while (gameOver(arr) === false && 
			moveIndex != size*size) 
	{ 
		if (turn == c) 
		{ 
			x = moves[moveIndex] / size; 
			console.log("xxxxxxxxxx",x)
			y = moves[moveIndex] % size; 
			console.log("yyyyyyyyyyy",y)
          //  arr[x]=[];
            
			arr[x][y] = cmove; 
			console.log("{arrrrrrrrrrrrrrrrrrrr",arr[x][y])
			console.log('COMPUTER has put a', cmove,' in cell', moves[moveIndex]+1); 
			showBoard(arr); 
			moveIndex ++; 
			turn = h; 
		} 
		
		else if (turn == h) 
		{ 
			x = moves[moveIndex]/ size; 
            y = moves[moveIndex]% size; 
            arr[x]=[];
            arr[x][y] = hmove; 
           // console.log(' human turn', hmove);
			console.log('HUMAN has put a', hmove, ' in cell', moves[moveIndex]+1); 
			showBoard(arr); 
			turn = c; 
		} 
	} 

	
	if (gameOver(arr) == false && 
			moveIndex == size*size) 
	console.log("It's a draw\n"); 
	else
	{ 
		if (turn == c) 
			turn = h; 
		else if (turn == h) 
			turn = c; 
		
		
        declareWinner(turn); 
        console.log(arr[0][1]);
	} 
	return; 
} 

