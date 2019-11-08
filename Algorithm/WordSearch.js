/*
			Binary Search the Word from Word List
			a. Desc -> Read in a list of words from File. Then prompt the user to enter a word to
			search the list. The program reports if the search word is found in the list.
			b. I/P -> read in the list words comma separated from a File and then enter the word
			to be searched
			c. Logic -> Use Arrays to sort the word list and then do the binary search
			d. O/P -> Print the result if the word is found or not

			@Author Vaishnavi Bhosale

*/


var util=require('./Util');
//var arrayList = require('array-list')
var fs = require("fs");
var rl=require('readline-sync');


var f1=fs.readFileSync("temp.txt", 'utf8'); 
var f2=f1.trim()
var arr=f2.split(',');
console.log(arr);
arr.sort();

  
  
  /*function readf(fs)
  {
  var word='';
  var alist=arrayList();
  var c;
  
        while ((c === fs.readFile("temp.txt", function(err, buf) {})) != -1) 
        {
            if (c == 32) 
            {
				alist.add(word);
				word = '';
            } 
            else {
				word = word + c;
			}
		}
		
		var s = new Array(alist.size());
		alist.toArray(s);
		return s;
  }
*/

  //var arr = readf(fs);
			
		var s1=rl.question('enter word to search: ');
			
			var i =util.binarySearchString(arr,s1);
			if (i === -1)
				console.log("not found");
			else
				console.log("found");
			
	