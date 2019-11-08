/*
  Factors
Desc -> Computes the prime factorization of N using brute force.
I/P -> Number to find the prime factors
Logic -> Traverse till i*i <= N instead of i <= N for efficiency​ .
O/P -> Print the prime factors of number N.

@Author Vaishnavi Bhosale

*/

var util = require('./FUtil.js');
const readline=require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter Number ', (num) => {
    console.log('Prime factors Are: ');
    util.pFactors(num);
  
    rl.close();
  });
