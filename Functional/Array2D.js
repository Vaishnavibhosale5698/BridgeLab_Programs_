/*
ProblemStatement:
A program for reading in 2D arrays of integers, doubles, or booleans from
standard input and printing them out to standard output.
*/

var rl=require('readline-sync')
var util=require('./FUtil')


var size= rl.questionInt('Enter Array size: ')
// try{
// 	if(size === String)
// 	throw "Invalid Input"
// }
// catch(Error)
// {
// 	console.log(Error)
// 	console.log('Enter Correct Array Size')
// }


var Arr2D = new Array(size); 

/*..........................Implementation of Double 2D Array...........................*/
console.log("Enter Element of Double 2D array: "); 
for (var i = 0; i < size; i++) 
{ 
	Arr2D[i] = []; 
} 

for (var i=0;i<size;i++)  
{ 
    for (var j=0;j<size;j++)
     { 

		Arr2D[i][j]=parseFloat(rl.question('')); 
	} 
} 

util.DoubleArrayFunction(Arr2D,size);

/*..........................Implementation of Integer 2D Array...........................*/
var Arr2D1 = new Array(size); 
console.log("Enter Elements of Integer 2D array: "); 
for (var i = 0; i < size; i++) 
{ 
	Arr2D1[i] = []; 
} 


for (var i=0;i<size;i++) 
{ 
    for (var j=0;j<size;j++)
     { 

		Arr2D1[i][j]=parseInt(rl.question('')); 
	} 
} 
util.IntarrayFunction(Arr2D1,size)


/*..........................Implementation of Boolean 2D Array...........................*/
var Arr2D2 = new Array(size); 
console.log("Enter Elements of Boolean 2D array: "); 
for (var i = 0; i < size; i++) 
{ 
	Arr2D2[i] = []; 
} 

for(var i=0;i<size;i++) 
{ 
    for (var j=0;j<size;j++)
     { 

		Arr2D2[i][j]=Boolean(rl.question('')); 
	} 
} 
util.booleanarrayFunction(Arr2D2,size);



