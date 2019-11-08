var util = require('./FUtil.js');
const readline=require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.questionInt('Harmonic Value ', (N) => {
   
    console.log(util.hrn(N));
    rl.close();
  });

  