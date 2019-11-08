/*
    Simulate Stopwatch Program
    a. Desc -> Write a Stopwatch Program for measuring the time that elapses between
       the start and end clicks
    b. I/P -> Start the Stopwatch and End the Stopwatch
    c. Logic -> Measure the elapsed time between start and end
    d. O/P -> Print the elapsed time.

@Author Vaishnavi Bhosale
*/

var rl=require('readline-sync');
var util=require('./FUtil')
  
    rl.question('Enter 1 to Start: ')
        start();
  
    rl.question('Enter 0 to Stop: ')
          end();
       
      util.elapse(etime,stime);
    
  
var stime=0,etime=0;   
function start() 
{
  stime = new Date().getTime();
  console.log('Started Time',stime);
}

function end() 
{
 etime = new Date().getTime();
  console.log('Ended Time',etime);
}
