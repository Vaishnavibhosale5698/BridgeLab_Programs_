 /*
    Power of 2
    a. Desc -> This program takes a command-line argument N and prints a table of the
       powers of 2 that are less than or equal to 2^N.
    b. I/P -> The Power Value N. ​ Only works if 0 <= N < 31 since 2^31 overflows an int
    c. Logic -> repeat until i equals N.
    d. O/P -> Print the year is a Leap Year or not.

    @Author Vaishnavi Bhosale
 */
 
 
 var rl=require('readline-sync')
 var util=require('./FUtil')

 console.log('Enter the power value (N): ')
 var pow=rl.questionInt(' ')

if(pow<31)
{
    util.powerOf2(pow)
}
else
{
    console.log("Invalid Input","\n Please enter No. less than 31")
}