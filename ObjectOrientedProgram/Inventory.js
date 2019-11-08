/**
 * @Purpose:JSON Inventory Data Management of Rice, Pulses and Wheats
            Desc -> Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg. 
            Use Library : Java JSON Library, For IOS JSON Library use NSJSONSerialization for parsing the JSON.
            I/P -> read in JSON File
            Logic -> Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. Calculate the value for every Inventory. 
            O/P -> Create the JSON from Inventory Object and output the JSON String
 * @file   :inventory.js
 * @author :Vaishnavi Bhosale
 **/

var rl=require('readline-sync')
var fs=require('fs')

var read=fs.readFileSync("Inventory.json");
var Elementsobj = JSON.parse(read);


console.log(Elementsobj);

module.exports.InventoryValue=function()
{
        console.log("\nInventory Values:")
            var price=0,price1=0,price2=0;
            for(var i=0;i<Elementsobj.Rice.length;i++)
            {
                price+=Elementsobj.Rice[i].Price;   
            }
            console.log("Rice Value:"+price)

            
            for(var i=0;i<Elementsobj.Pulses.length;i++)
            {
                price1+=Elementsobj.Pulses[i].Price;   
            }
            console.log("pulses Value:"+price1)


            for(var i=0;i<Elementsobj.Wheats.length;i++)
            {
                price2+=Elementsobj.Wheats[i].Price;   
            }
            console.log("pulses Value:"+price2)
            console.log("Complete Inventory value:"+(price+price1+price2))
}
this.InventoryValue()

 module.exports.InventoryObjToString=function()
{
            console.log("\n...JSON String...")
            console.log("\t"+JSON.stringify(Elementsobj))
}

this.InventoryObjToString()
