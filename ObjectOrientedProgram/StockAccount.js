/*************************************************************************************************************/
//  *  Purpose         : To create the JSON from Inventory Object and output the JSON String.
//  *  @description    : The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
//  *                    The InventoryManager will call each Inventory Object in its list to calculate the 
//  *                    Inventory Price and then call the Inventory Object to return the JSON String.
//  *                    The main program will be with InventoryManager.
//  *  @file           : InventoryManagerStock.js
//  *  @author         : Vaishnavi Bhosale
/**********************************************************************************************************/
const read = require("readline-sync");
const utility = require("./Utility/OOPUtil");
const file = require('fs');
var data = file.readFileSync("StockAccount.json", "utf8");
function inventoryManager() {
    var data1 = JSON.parse(data);
    var object = new utility.InventoryManagerStock();
    try 
    {
        while (ch != 6) 
        {
            console.log("\n  Press 1 to add  ");
            console.log("  Press 2 to remove ");
            console.log("  Press 3 to edit  ");
            console.log("  Press 4 to print ");
            console.log("  Press 5 to Stack Implementation: ");
            console.log("  Press 6 to exit\n  ");
            var ch = read.questionInt("Enter the number : ")
            switch (ch) 
            {
                case 1:
                    object.add(data1);
                    break;
                case 2:
                    object.remove(data1);
                    break;
                case 3:
                   object.edit(data1);
                    //object.queueimplement(data1)
                    break;
                case 4:
                    object.print(data1);
                    break;
                case 5:
                    object.stackimplent(data1)
                    break;
                case 6:
                    console.log("Program terminated!!"); 
                    break;
                default:
                    console.log("Please Enter correct choice!  ");
            }
        }
    } 
    catch (e) 
    {
        console.log(e.message);
    }
}
inventoryManager();