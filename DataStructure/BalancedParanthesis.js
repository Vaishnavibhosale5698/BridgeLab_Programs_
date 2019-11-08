/******************************************************************************/
//  * Purpose : Take an Arithmetic Expression such as
//              (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used 
//              to order the performance of operations. Ensure parentheses 
//              must appear in a balanced fashion.
//  
/*******************************************************************************/
const read = require("readline-sync");
const util = require("../DataStructure/Utility/UtilDataStructure");
const stack = new util.Stack();
function Stack()
{
    var str = read.question("Enter the mathmatical expression : ");
    var ch;
    for(let i =0 ; i < str.length; i++)
    {
        ch = str.charAt(i);
        if(ch == '(' || ch == '{' || ch == '[')
        {
            stack.push(ch);
        }
        else if(ch == ')' || ch == '}' || ch == ']')
        {
            stack.pop()
        }
    }
}
var result = Stack();
if(stack.size == 0)
{
    console.log("Expression is Balanced..")
}
else
{
    console.log("Expression is not Balanced..")
}