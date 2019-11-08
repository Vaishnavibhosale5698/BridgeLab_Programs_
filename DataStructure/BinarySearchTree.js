/******************************************************************************/
//  * @Purpose : For each test case, find the number of different binary search trees 
//               that can be created using those nodes
//  * @file    : BinarySearchTree
//  * @author  : Vaishnavi Bhosale
//  
/******************************************************************************/
function countBST(count) 
{
    sum = 0;
    if (count == 0 || count == 1) 
    {
        return 1;
    } 
    else if (count == 2) 
    {
        return 2;
    } 
    else 
    {
        for (let i = 0; i < count; i++) 
        {
            sum = (sum + countBST(i) * countBST(count - i - 1));
        }
        return sum;
    }
}

var read = require("readline-sync");
var test = read.questionInt("Enter no of test cases : ");
var nodes = [test];
console.log("Enter Nodes");
for (let i = 0; i < test; i++) 
{
    nodes[i] = read.questionInt();
}
for (let j = 0; j < test; j++) 
{
    console.log(`Possible no of binary search tree with: ${nodes[j]} nodes (s): ${countBST(nodes[j])}`);
}