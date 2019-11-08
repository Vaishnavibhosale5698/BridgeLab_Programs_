/*
        a. Desc -> Create Utility Class having following static methods
        i. binarySearch method for integer
        ii.binarySearch method for String
        iii.insertionSort method for integer
        iv.insertionSort method for String
        v.bubbleSort method for integer
        vi.bubbleSort method for String

        b. I/P -> Write main function to call the utility function
        c. Logic -> Check using Stopwatch the Elapsed Time for every method call
        d. O/P -> Output the Search and Sorted List. More importantly print elapsed time
        performance in descending order

        @Author Vaishnavi Bhosale
*/


var util=require("./Util");
var readlineSync = require('readline-sync');

/*...............Binary search Integer...........................*/
       
            var size = readlineSync.question('Enter Array size ');
            var arr2=new Array(size);
                console.log("enter Integer Array(Searching): ")
                for (var i = 0; i < size; i++) 
                { 
                    arr2[i] =readlineSync.questionInt('');
                }


                var start=0,stop=0,elapse=0;
                var s=readlineSync.questionInt('Enter Integer to search: ');
               start=new Date().getTime();
                var c=util.binarySearchNo(arr2,s,0,arr2.length-1);
                
                if(c===-1)
                console.log(s,' not Found');

                else
                console.log(s,'Found');

                stop=new Date().getTime();
                elapse=(stop-start)/1000;
                console.log(" Elapsed time for Binary search: ",elapse,'\n')

    /*...............Binary search String...........................*/

                var arr=new Array(size);
                console.log("enter String Array(Searching): ")
                    for (var i = 0; i < size; i++) 
                    { 
                        arr[i] =readlineSync.question('');
                    }

                                       
                    var s=readlineSync.question('Enter String to search: ');
                    start=new Date().getTime();
                    var c=util.binarySearchString(arr,s);
                   
                    if(c===-1)
                    console.log(s,' not Found');

                    else
                    console.log(s,'Found');

                    stop=new Date().getTime();
                    elapse=(stop-start)/1000;
                    console.log(" Elapsed time for Binary search String: ",elapse,'\n')


/*...........................Bubble and Integer Sort Integer............................*/

                    var Barr=new Array(size);
                    console.log("enter Array(Sorting): ")
                    for (var i = 0; i < size; i++) 
                    { 
                        Barr[i] =parseInt(readlineSync.question('')) ; 
                    }
                    start=new Date().getTime(); 
                    util.bubbleSort(Barr);
                    stop=new Date().getTime();
                    console.log('Array After Bubble Sort: ');
                    console.log(Barr);
                    elapse=(stop-start)/1000;
                    console.log(" Elapsed time for Integer Bubble sort: ",elapse)

                    start=new Date().getTime();
                    util.insertionSort(Barr);
                    stop=new Date().getTime();
                    console.log('Array After Insertion Sort: ');
                    console.log(Barr);
                    elapse=(stop-start)/1000;
                    console.log(" Elapsed time for integer Insertion Sort: ",elapse,'\n')
                    

/*...........................Insertion and bubble Sort Sort String...........................*/

                    var Sarr=new Array(size);
                    console.log("enter String Array(Sorting): ")
                    for (var i = 0; i < size; i++) 
                    { 
                        Sarr[i] =readlineSync.question(''); 
                    } 
                  
                    start=new Date().getTime();
                    util.bubbleSortString(Sarr);
                    stop=new Date().getTime();
                    console.log('Array After Bubble Sort: ');
                    console.log(Sarr);
                    elapse=(stop-start)/1000;
                    console.log(" Elapsed time for String Bubble Sort: ",elapse,'\n')


                    
                    start=new Date().getTime();
                    util.insertionSort(Sarr)
                    stop=new Date().getTime();
                    console.log('Array After Insertion Sort: ');
                    console.log(Sarr);

                    elapse=(stop-start)/1000;
                    console.log(" Elapsed time for integer Insertion Sort: ",elapse)

                  



