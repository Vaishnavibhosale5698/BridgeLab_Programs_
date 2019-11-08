/*
   *purpose: To calculate the head vs. tail percentage
   @param count the value for no. of time flips
*/
         var heads=0;
         var headper,tailper;

         module.exports.coinPer=function(count)
         {
            for(i=0;i<count;i++)
            {
            if(Math.random()<0.5)
            {
               heads++;
            }
            //tail++;
            }

         headper=(heads/count)*100;
         tailper=((count-heads)/count)*100;
         console.log(`Percentage of Head: ${headper}`);
         console.log(`Percentage of Tail: ${tailper}`);
         }


/*
   *purpose: Function to calculate the distance value
   *@param x value of x-axis
   *@param y value of y-axis
*/
       module.exports.cal=function(x,y)
         {
            var d=(x*x+y*y);
            console.log('Distance is:',Math.pow(d,0.5));
         }

 /*
   *purpose: Function to calculate the nth harmonic number
   *@param n the value of harmonic no.
   *@return Harmonic number        
 */
         module.exports.hrn=function(N)
         {
            var harmonic = 1; 
            // loop to apply the forumula  
            // Hn = H1 + H2 + H3 ... + Hn-1 + Hn-1 + 1/n 
            for (var i = 2; i <= N; i++)
            { 
               harmonic += 1 / i; 
            } 
         
            return harmonic;
         }

/*
   *purpose:function to check prime numbers
   *@Param num to check is prime or not
   *@return
*/

         function isPrime(num)
         {
               for(var i=2;i<=num/2;i++)
               {
                     if(num%i==0)
                     return false;
               }
               return true;
         }

/*
   *@purpose: function to find the prime factors of given no.
   *@param num is number for which to find prime factors
   *@return prime factors
*/
         module.exports.pFactors=function(num)
         {
               for(var i=2;i<=num;i++)
               {   
                  var tb=num%i;
                  if(tb==0)
                  {
                     if(isPrime(i))
                     console.log(i);
                  }
               }

         }


/*
      *Purpose:function to Simulates a gamble
      *@param NoTime the value of no. of times to bet
      *@param $stack the amount which you have
      *@param $goal the amount to which have to reach to won gamble
*/

            module.exports.gambler=function(NOTime,$stack,$goal)
            {
                  var wins=0;
                  var bets=0;

                  for(var i=0;i<=NOTime;i++)
                  {
                     var cash=$stack;
                     while (cash>0 && cash<$goal) 
                     {
                        bets++;

                        if(Math.random()<0.5)
                              cash++; 
                        else
                              cash--; 
                     }

                  if (cash = $goal)
                     wins++; 
                  }

            console.log(wins + ' wins out of ' + NOTime);
            console.log('Percent of games won = ' + 100.0 * wins/NOTime);
            console.log('Percent of games lost = ' + 100.0 *(NOTime - wins)/NOTime);
            console.log('Total bets in ' + NOTime + ' games = ' + bets);
            }

/*
      *purpose: Function to check given year is leap year or not
      *@param InputYear to check for leap or not
*/
 
            module.exports.leapYear=function(Inputyear)
            {
               var year = Inputyear;
            
               if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                  console.log(`${year} is leap year`);
               } else {
                  console.log(`${year} is not leap year`);
               }
               
            }
/*
    purpose: function to check for triplets which sums to 0 also return total of piars of triplets
    *@param arr is array of numbers 
*/

            module.exports.sum0Count=function(arr)
            {
               var count=0;
               console.log('Triplets Are:');

            for (var i = 0;i<arr.length;i++)
            {
               for (var j = i+1;j<arr.length;j++)
               {
                  for (var k=j+1;k<arr.length;k++) 
                  {
                  if (arr[i]+arr[j]+arr[k] == 0) 
                  {
                     count++;
                     
                     console.log(arr[i] + "+" + arr[j] + "+" + arr[k] + "=" + "0");
                  }
                  }
               }
            }
            
            console.log('total pairs are ',count);
            }

 /*
    *Purpose: Function for table of 2 n times and prints the table of 2.
    *@param pow no.of time the table of 2 is to be printed    
*/       

            module.exports.powerOf2=function(pow)
            {
               var val=1

               for(var i=1;i<=pow;i++)
               {
               val=val*2

               console.log(val)
               }
            }

/*
   *purpose: function to implement Integer 2D Array
   @param Arr2D1 2D Array of integer
   @param size size of Array
*/
         module.exports.IntarrayFunction=function(Arr2D1,size)
         {
         for (var i=0;i<size;i++)
         { 
            for (var j=0;j<size;j++) 
            { 
               console.log(Arr2D1[i][j] + " "); 
            }    
         } 
         }


/*
   *purpose: function to implement Double 2D Array
   @param Arr2D 2D Array of integer
   @param size size of Array
*/
            module.exports.DoubleArrayFunction=function(Arr2D,size)
            {
            console.log('Double 2D array: ')
            for (var i=0;i<size;i++)
            { 
               for (var j=0;j<size;j++) 
               { 
                  console.log(Arr2D[i][j] + " "); 
               } 
            } 
            }

/*
   *purpose: function to implement Boolean 2D Array
   @param Arr2D1 2D Array of integer
   @param size size of Array
            */
            module.exports.booleanarrayFunction=function(Arr2D2,size)
            {
               for(var i=0;i<size;i++)
            { 
               for(var j=0;j<size;j++) 
               { 
                  console.log(Arr2D2[i][j] + " "); 
               }                
            } 
            }


/*
   *purpose: function to calculate elapse time betwwen start and end clicks
   @param e1 end time
   @param s1 start time
*/

module.exports.elapse=function(e1,s1)
{
  var tdiff=(e1-s1); 
  tdiff /=1000;
  var t1=parseInt(tdiff);

  console.log('Elapsed time',t1);
  //var seconds = Math.round(tdiff);
  //console.log('Elapsed time', +seconds);
} 