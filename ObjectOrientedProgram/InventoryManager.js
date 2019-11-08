/**
 * @Purpose: Inventory Management Program
 * @file   : InventoryManager.js
 * @author : Vaishnavi Bhosale
 */

var fs=require('fs')
var rl=require('readline-sync')
var access=require('./Inventory.js')

console.log("**************************************Inventory Manager*********************")

while(true)
{  
        
    console.log("\n1.Display JSON Inventory \n 2.Display JSON String \n 3.Display Inventory Value\n 4.Exit\n")
    var choice=rl.questionInt("Enter choice: ") 

    switch(choice)
    {
        case 1:
                var read=fs.readFileSync("Inventory.json");
                var Elementsobj = JSON.parse(read);
                console.log(Elementsobj);
                break;
        case 2:
                access.InventoryObjToString()
                break;
        
        case 3:
               access.InventoryValue()
               break;
        case 4:
                process.exit();
                break;
        default:
                break;
        
    }
}


