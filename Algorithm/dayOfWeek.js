/*
        To the Util Class add ​ dayOfWeek static function that takes a date as input and
        prints the day of the week that date falls on. Your program should take three
        command-line arguments: m (month), d (day), and y (year). For m use 1 for January,
        2 for February, and so forth. For output print 0 for Sunday, 1 for Monday, 2 for
        Tuesday, and so forth. Use the following formulas, for the Gregorian calendar (where
        / denotes integer division):
            y ​ 0​ = ​ y ​ − (14 − ​ m ) ​ / 12
            x ​ = ​ y 0​ ​ + ​ y ​ 0​ /4 − ​ y 0​ ​ /100 + ​ y ​ 0​ /400
            m ​ 0​ = ​ m ​ + 12 × ((14 − ​ m ​ ) / 12) − 2
            d ​ 0​ = (​ d ​ + ​ x ​ + 31​ m ​ 0​ / 12) mod 7

        @Author Vaishnavi Bhosale
*/

const rl=require('readline-sync');
const util=require('./Util')
console.log('Enter the date in day month year : ')
var day=parseInt(rl.question('Day: '));
var month=parseInt(rl.question('Month: '));
var year=parseInt(rl.question('Year: '));

console.log("Day of the Week:  ",util.dayOfWeek(day,month,year));

