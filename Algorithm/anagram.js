/*
			An Anagram Detection Example
			a. Desc -> One string is an anagram of another if the second is simply a
			rearrangement of the first. For example, 'heart' and 'earth' are anagrams...
			b. I/P -> Take 2 Strings as Input such abcd and dcba and Check for Anagrams
			c. O/P -> The Two Strings are Anagram or not....

			@Author Vaishnavi Bhosale
*/

var util = require("./Util");
var readlineSync = require('readline-sync');
var str1=readlineSync.question('Enter 1st String: ');
var str2=readlineSync.question('Enter 2st String: ');

if(util.anagram(str1,str2)==true)
{
    console.log('strings are Anagram');
}

else
{
    console.log('strings are not Anagram');
}