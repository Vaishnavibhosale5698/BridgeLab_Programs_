/*
        program To the Util Class add ​ temperaturConversion static function, given the temperature
        in fahrenheit as input outputs the temperature in Celsius or viceversa using the
        formula
        Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
        Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

        @Author Vaishnavi Bhosale
*/

const util=require('./Util')
const rl=require('readline-sync')

var tem=parseInt(rl.question('Enter Temperature in f or c'))
var t=rl.question('').charAt(0)

if(t != 'f' && t != 'F' && t != 'c' && t != 'C')
{
    console.log('Enter Correct Input')
}

else
{
    tem=util.tempConver(tem,t)
    console.log('Converted Temperature is: ',tem)

 
}