/******************************************************************************/
//  * Purpose : Create a Program which creates Banking Cash Counter where people
//              come in to deposit Cash and withdraw Cash. Have an input panel 
//              to add people to Queue to either deposit or withdraw money and 
//              dequeue the people. Maintain the Cash Balance.
//  
/*******************************************************************************/
const utility = require("../DataStructure/Utility/UtilDataStructure");
const access = require("../DataStructure/Utility/Util");
const read = require("readline-sync");
//const assert = require('chai').assert;
/**
 * @purpose : Function to perform Bank Cash counter
 */
function queue() 
{

    const obj = new utility.Queue;
    var bankAmount = 0;
    var set = [];
    var flag = true;
    var count = 0;
    try {
        console.log(totalAmount)
        var size = read.questionInt("Enter the total number of people to be in queue = ");
        if (size > 0) 
        {
            for (let i = 1; i <= size; i++) 
            {
                var input = read.questionInt("1. deposit amount \n2. to withdraw amount \n");
                if (input == 1) 
                {
                    var amount = read.questionFloat("Enter the total amount to deposit =  ");
                    var set = obj.enQueue(Number(amount));
                    flag = true;
                }
                else if (input == 2) 
                {
                    var amount = read.questionInt("Enter the total amount to be withdraw =  ");
                    var get = obj.enQueue(Number(amount));
                    flag = true;
                }
                else 
                {
                    console.log("Make sure that you have entered correct key ");
                    flag = false;
                    return;
                }
            }
        }
        else 
        {
            assert.isAbove(size, 0, 'Size must be grater than 0'); 
            // console.log("Invalid input");
            // return;
        }
        if (flag) 
        {
            var add = 0;
            for (let i = 1; i < size; i++) 
            {
                add = add + obj.deQueue();
                //console.log(add)
            }
            console.log(add);
            var totalAmount = bankAmount + add;
            console.log("totalAmount:"+totalAmount)
            if (add > 0) 
            {
                console.log("Total amount left in bank is: " + totalAmount);
            }
            else 
            {
                console.log("insufficient balance");

            }
        }
    } 
    catch (e) 
    {
        console.log(e.message);
    }

}
queue();
