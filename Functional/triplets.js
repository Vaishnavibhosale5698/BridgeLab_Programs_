/*
      Sum of three Integer adds to ZERO
      a. Desc -> A program with cubic running time. Read in N integers and counts the
      number of triples that sum to exactly 0.
      b. I/P -> N number of integer, and N integer input array
      c. Logic -> Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0
      d. O/P -> One Output is number of distinct triplets as well as the second output is to
      print the distinct triplets.

      @Author Vaishnavi Bhosale
*/

 

var util = require('./FUtil.js');
const rl=require('readline-sync')

var n=rl.questionInt('enter no. of Elements: ')

var arr=new Array(n);
console.log('Enter Number Array: ')

for(var i=0;i<n;i++)
{
arr[i]=parseInt(rl.question(' '))
}

console.log(arr)

util.sum0Count(arr)