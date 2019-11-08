/*****************************************************************************************************/
// * @Purpose -Read .a List of Numbers from a file and arrange it ascending Order in a
//             Linked List. Take user input for a number, if found then pop the number out of the
//             list else insert the number in appropriate position
//  * @file  -OrderList.js
//  * @Author- Vaishnavi Bhosale
//  
 /**************************************************************************************************/
var access = require("/home/admin1/Bridgelabz_Programs/DataStructure/Utility/Util.js");
var util = require("./Utility/UtilDataStructure");
var read = require("readline-sync");
var list = new util.LinkedList;

var arr1 = access.FileRead();
var arr = [];
console.log("Before sorting : " + arr1);
for (let i = 0; i < arr1.length; i++) 
{
    arr[i] = parseInt(arr1[i]);
}

access.mergeSort(arr);
console.log("After sorting : " + arr);
var list = new util.LinkedList;
var number = read.questionInt("Enter Number to search : ");
try {
    for (let i = 0; i < arr.length; i++) 
    {
        list.add(arr[i]);
    }
    var found = list.contain(number);
    if (found == true) 
    {
        console.log("Number found hence removed into file")
        list.remove(number);
        var output = list.print();
        access.fileWrite('/home/admin1/Bridgelabz_Programs/DataStructure/OrderList.txt', output);
        console.log(output);
    } 
    else 
    {
        console.log(arr);
        console.log("Number not found hence added into file ")
        var pos = list.addPos(arr, number);
        console.log("position " + pos);
        list.insertAt(number, pos);
        var output = list.print();
        access.fileWrite('/home/admin1/Bridgelabz_Programs/DataStructure/OrderList.txt', output);
        console.log(output);
    }
} 
catch (e) 
{
    console.log(e.message);
}
