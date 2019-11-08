var util=require('./Util')
const rl=require('readline-sync')
            
    console.log("enter a Number ");
    var num=parseInt(rl.question(' '))

    var sq=sqrt(num)

    console.log('Square Root of Number',sq)