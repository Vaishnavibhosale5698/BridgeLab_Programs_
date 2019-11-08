/*....Util Class that contains the Anagram, Palindrome, Prime Numbers, 
   Search Algos, Sort Algos, etc as a static function ............*/
//var ar=require('arraylist');
var arrayList = require('array-list')

class Util {

    /*..........Function to calculate two Strings are anagram of Each Other or not........
    *........... str1 is first String parameter.............*
    *........... str2 is second String parameter.............*
    */
    static anagram(str1, str2) {

        if (str1.length !== str2.length) {
            return false;
        }

        var sortStr1 = str1.split('').sort().join('');
        var sortStr2 = str2.split('').sort().join('');

        return (sortStr1 == sortStr2);

    }


    static anagramNo(num1, num2) {

        if (num1.length !== num2.length) {
            return false;
        }

        var sortnum1 = num1.split('').sort().join('');
        var sortnum2 = num2.split('').sort().join('');

       var sortNum1=parseInt(sortnum1)
       var sortNum2=parseInt(sortnum2)
        return (sortNum1 == sortNum2);

    }



    /*......
     *Purpose:function to find Prime numbers in range 0 - 1000 Numbers................
    */
                static prime() {
                    var b;
                    for (var j = 2; j <= 1000; j++) {
                        b = true;
                        for (var i = 2; i < j / 2; i++) {
                            if (j % i == 0) {
                                b = false;
                                break;
                            }
                        }
                        if (b)
                            console.log(j + ' ');
                    }
                }

    /*................Function to check number is Prime or not................
      ................@param n is number to check for prime ....................
    */
                static isPrime(n) {
                    for (var i = 2; i < n / 2; i++) {
                        if (i % n == 0) {
                            return false;
                        }
                    }
                    return true;
                }

    /*....................function to find the prime numbers that are Pallindrome.........*/

                static primePallindrome() 
                {
                    console.log();
                    var b;
                    for (var j=2; j<= 1000;j++)
                    {
                        b = true;
                        for (var i=2; i<parseInt(j/2);i++) 
                        {
                            if (j % i === 0) 
                            {
                                b = false;
                                
                            }
                        }
                        if(j!=4)
                        {
                        if (b && this.isPallindrome(j))
                            console.log(j+ '');
                        }
                    }
                }
    /* ...............Function to check number is Pallindrome or not...................*/
                static isPallindrome(n)
                {
                    var temp = parseInt(n);
                    var sum = 0;
                    while (temp != 0)
                    {
                        var r = temp % 10
                        sum = sum * 10 + r
                        temp = parseInt(temp / 10)
                    // console.log(typeof(sum))
                    
                    }
                    if (sum === n)
                    {
                        return true;
                    }
                    return false;
                }


    /*........Function to count the value in integer number to be place .............
    ..........@param n is the integer value to count...............................
    ..........@returns the array of count value....................................
    */
                static count(n) 
                {
                    var count = new Array(10);
                    var temp = n;
                    while (temp != 0) 
                    {
                        var r = temp % 10;
                        count[r]++;
                        temp = parseInt(temp / 10);
                    }
                    return count;
                }


    /*
    *Purpose:Function to check prime no. is Anagram or not
    */
                static primeAnagrams() 
                {
                    var ar = Array(1000);
                    var b;
                    for(var j=2;j<=1000;j++)
                    {
                        b = true;
                
                        for (var i=2;i<parseInt(j/2);i++)
                        {   //console.log('iiiiiiiii',i)
                            if (j%i == 0) 
                            {
                                b = false;
                                break;
                            }
                        }
                        if(b)
                            ar.push(j)
                        // console.log(ar)
                    }
                    for (var i = 0; i < ar.length; i++)
                    {
                        for (var j = i + 1; j < ar.length; j++) 
                        {
                            // console.log(ar[i])
                            //console.log(ar[j])
                            if(this.anagramNo(String(ar[i]), String(ar[j])))
                            {
                                console.log(ar[i], '  ', ar[j]);
                            }
                        }
                    }
                }

 /*..............Function to check the value is anagram or not....................*/
            static anagramNoo(n1, n2)
            {
                var n1count = new Array((this.count(n1)));
                var n2count = new Array((this.count(n2)));
                for (var i = 0; i < n2count.length; i++) 
                {
                    if (n1count[i] != n2count[i]) 
                    {
                        return false;
                    }
                }
                return true;
            }

  /*...................
    *Purpose: function for Binary search for Integer..
    *@param arr is array of elements
    *@Param x is to search
    *@param start is from where to start for searching
    *@param end upto end have to search for element
    ....................*/
                static binarySearchNo(arr, x, start, end) 
                {
                    if (start <= end) 
                    {
                        var mid = Math.floor(start + end / 2);

                        if (arr[mid] === x)
                            return mid;

                        if (arr[mid] > x) 
                        {
                            return (this.binarySearchNo(arr, x, start, mid - 1));
                        }

                        else 
                        {
                            return (this.binarySearchNo(arr, x, mid + 1, end));
                        }
                    }
                    return -1;
                }

    /*...................
     *Purpose:funtion Binary search for String.
     *@param arr is array of String
     *@param s is string to search
    ...........................*/

                static binarySearchString(arr, s)
                {
                    var start = 0, end = arr.length - 1;
                    while (start <= end) 
                    {
                        var mid = Math.floor((start + end) / 2);
                        var s1 = arr[mid].toString();
                        const cstr = s1.toLocaleUpperCase() === s.toLocaleUpperCase();
                        if (cstr)
                            return mid;

                        else if (s1.localeCompare(s) < 0)
                            start = mid + 1;
                        else
                            end = mid - 1;
                    }

                    return -1;
                }


    /*...............................
     *@Purpose: function bubbleSort for integer number sorting
     *@param a is array of integer numbers
    ...............*/
                        static bubbleSort(a) 
                        {
                            var swapped;
                            do {
                                swapped = false;
                                for (var i = 0; i < a.length - 1; i++) 
                                {
                                    if (a[i] > a[i + 1]) 
                                    { 
                                        var temp = a[i];
                                        a[i] = a[i + 1];
                                        a[i + 1] = temp;
                                        swapped = true;
                                    }
                                }
                            } while (swapped);
                        }


    /*.....................
    *Purpose: bubbleSort method for String.
    *@Param a is array of String
    ..............*/
                static bubbleSortString(a) 
                {
                    var swapped;
                    do {
                        swapped = false;
                        for (var i = 0; i < a.length - 1; i++) {
                            if (a[i].localeCompare(a[i+1])>0)
                            {
                                var temp = a[i];
                                a[i] = a[i + 1];
                                a[i + 1] = temp;
                                swapped = true;
                            }
                        }
                    } while (swapped);
                }

    /*...............................
      *Purpose:Insertion Sort method for integer.
      *@param arr is array of integer numbers
    ..............*/

                static insertionSort(arr) 
                {
                    for (var i = 0; i < arr.length; i++) 
                    {
                        var temp = arr[i];
                        var j;
                        for (j = i - 1; arr[j] > temp && j >= 0; j--) 
                        { //arr[j].comparelocale(temp)<0
                            arr[j + 1] = arr[j];
                        }
                        arr[j + 1] = temp;
                    }
                    return arr;
                }

    /*...............................
     *Purpose: Insertion Sort method for String.
     *@param arr is array of string
    ..............*/
                    static insertionSortStr(arr) 
                    {
                        for (var i = 0; i < arr.length; i++) 
                        {
                            var temp = arr[i];
                            var j = i-1;
                            while(arr[j].localeCompare(temp)>0 && j>=0)
                            { 
                                arr[j + 1] = arr[j];
                                j = j-1;
                            }
                            arr[j + 1] = temp;
                        }
                        return arr;
                    }

    /*................................
     *Purpose: function to calculate the Day Of Week
     *@param d day
     *@param m is month
     *@param y is year    
     ..............................*/
                    static dayOfWeek(d, m, y) 
                    {
                    var yy = y - (((14 - m) / 12))
                        var y0= parseInt(yy)
                    
                        var x = (y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt(yy / 400))
                        var x1=parseInt(x)
                        var m0 = (m + (12 * ((14 - m) / 12)) - 2)
                        var d0 = (d + x1 + (31 * m0 )/ 12) % 7
                        return d0
                    }


  /*................................
   *Purpose: function for Temperature Conversion.
   *@Param tem temperature to convert 
   *@param t temperature in C or F
   .............................*/
                    static tempConver(tem,t)
                    {
                        var convert;
                        if(t==='c' && t==='C')
                        convert=(tem*(9/5))+32

                        else
                        convert=(tem-32)*(5/9)
                        
                        return parseInt(convert);
                    }

  

  /*................................
    *Purpose:Function to calculate Monthly Payment 
    *@param p principal loan amount
    *@param y years
    *@param r percent interest
  ..............................*/  

                    static mPayment(p,y,r)
                    {
                        var payment
                        var n = 12*y
                        var r0 = r/ (12*100)

                        payment = p*r0 / (1-Math.pow((1+r0),-n))
                        var Payment=payment.toFixed(3)
                        return Payment
                    }

      /*................................
       *Purpose: static function ​ sqrt t ​ o compute the square root of a nonnegative number c
       *@param c number 
       ........................*/  
                    static sqrt(c)
                    {
                        var t=c
                        var epsilon=1e-15
                        if(Math.abs(t - parseInt(c/t)) > epsilon*t)
                        {
                            t=parseInt((parseInt(c/t) + t)/2)
                        }
                        return t
                    }
    
    /*.................................function ​ toBinary...........................*/
        static toBinary(d)
        {
             var b='';

             var b1=b.toString();
             
             while(d != 0)
             {  console.log('nnnnnnnnn')
                b1=(d%10)+b1;
                d=parseInt(d/2);
             }

             while((b1.length % 4) != 0)
             {
               b1 = 0 + b1;
               console.log(' bbbbbbbbbbbb',b1)
               console.log(this.strToInt(b1))
             }
            // console.log(this.strToInt(b1))
            return this.strToInt(b1)
        }

        static strToInt(b)
        {
            var bArr= new Array(b.length);

            for(var i=0;i<=bArr.length;i++)
            {
                bArr[i]=b.charAt(i)-48;
            }
            return bArr
        }
}

module.exports = Util;