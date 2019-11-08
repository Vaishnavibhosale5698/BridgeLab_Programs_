
/*****************************************************************************************************************/
//  * @Purpose -Read the Text from a file, split it into words and arrange it as Linked List.
//  			Take a user input to search a Word in the List. If the Word is not found then add it to the list, 
//   			& if it found then remove the word from the List. In the end save the list into a file
//  * @file    -UnorderedList.js
//  * @author  -Vaishnavi Bhosale
/****************************************************************************************************************/
var access = require("../DataStructure/Utility/Util");
var util = require("../DataStructure/Utility/UtilDataStructure");
var read=require('readline-sync')
    try {
        var arr = access.fileRead();
        var l = new util.LinkedList;
        console.log("file data : ")
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            l.add(arr[i]);
        }
        console.log("\n Linked List is  : ");
        console.log(arr);
        var word = read.question(" \n Enter word to be searched in file:  ");
        var b = l.contain(word);
        console.log(b);
        if (b == true) {
            console.log("Element found hence removed into file: ")
            l.remove(word);
            var output = l.print();
            access.fileWrite('/home/admin1/Bridgelabz_Programs/DataStructure/UnOrderList.txt', output);
            console.log(output);
        }
        else {
            console.log("Element Not Found hence added into file :")
            l.add(word);
            var output = l.print();
            access.fileWrite('/home/admin1/Bridgelabz_Programs/DataStructure/UnOrderList.txt', output);
            console.log(output);
        }
        console.log(arr);
    } catch (e) {
        console.log(e.message);
    }


