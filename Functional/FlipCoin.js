/*
Flip Coin and print percentage of Heads and Tails
a. I/P -> The number of times to Flip Coin. ​ Ensure it is positive integer ​ .
b. Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails or heads
c. O/P -> Percentage of Head vs Tails
*/

var util = require('./FUtil.js');
const readline=require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('The number of times to Flip Coin. ', (count) => {
    
    //console.log(`${count}`);
    util.coinPer(count)
     
    rl.close();
  });
  

