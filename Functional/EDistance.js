/*
Write a program ​ Distance.java t ​ hat takes two integer command-line arguments x
and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0). The
formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function 

 @Author Vaishnavi Bhosale

*/

var util1 = require('./FUtil.js');
const readline=require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.questionInt('Enter x ', (x) => 
  {
      console.log(x);
      
    rl.questionInt('Enter y ', (y) =>
    {
         console.log(y);
         util1.cal(x,y);
    });
 });