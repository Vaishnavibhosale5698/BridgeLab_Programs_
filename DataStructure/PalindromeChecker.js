/******************************************************************************/
//  * @Purpose : A palindrome is a string that reads the same forward and backward, for
//  *            example, radar, toot, and madam. We would like to construct an algorithm to
//  *            input a string of characters and check whether it is a palindrome.
//  * @file    : Palindrome Checker
//  * @author  : Vaishnavi Bhosale
/******************************************************************************/
const util = require("../DataStructure/Utility/UtilDataStructure");
const access = require("../DataStructure/Utility/Util");
const read = require("readline-sync");

function check() 
{
    try 
    {
        const deQueue = new util.DeQueue;
        let word = read.question("Enter String:  ");
        var result = deQueue.palindromeChecker(word);
        if (result == false) 
        {
            console.log("String is not Palindrom");
        }
        else 
        {
            console.log("String is Palindrom ");
        }
    } 
    catch (e) 
    {
        console.log(e.message);
    }
}
check();