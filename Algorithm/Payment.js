/*
        Write a Util Static Function to calculate ​ monthlyPayment that reads in three
        command-line arguments P, Y, and R and calculates the monthly payments you
        would have to make over Y years to pay off a P principal loan amount at R per cent
        interest compounded monthly.

        @Author Vaishnavi Bhosale
*/
const util=require('./Util')
var rl=require('readline-sync')

console.log('Enter P , Y ,R:  ')
var p=rl.question('P:Principal loan amount ')
var y=rl.question('Y:years ')
var r=rl.question('R:percent interest ')

console.log('Monthly payments: ',util.mPayment(p,y,r))

