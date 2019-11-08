/*
    Simulates a gambler who start with $stake and place fair $1 bets until
    he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
    times he/she wins and the number of bets he/she makes. Run the experiment N
    times, averages the results, and prints them out. 
    
    @Author Vaishnavi Bhosale
*/


var util = require('./FUtil.js');
const readline=require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter Year ', (Inputyear) => {
   var year1=Inputyear.toString().length;
    if(year1==4)
    {
    util.leapYear(Inputyear);
    }

    rl.close();
  });

