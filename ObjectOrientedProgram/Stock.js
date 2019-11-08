/*****************************************************************************************************/
//  * @Purpose - Write a program to read in Stock Names, Number of Share, Share Price.
//  *            Print a Stock Report with total value of each Stock and the total value of Stock.
//  * @file    - Stock.js
//  * @author  - Vaishnavi Bhosale
/*****************************************************************************************************/
// const read = require("readline-sync");
const utility = require("../ObjectOrientedProgram/Utility/OOPUtil");
const fileStream = require('fs');
const input = fileStream.readFileSync("Stock.json");
try {
    const object = JSON.parse(input);
    console.log("Stock Report!!!!!!");
    var stock = new utility.Stock(name, share, price);
    for (let key in object.stock) 
    {
        var name = object.stock[key].name;
        var share = object.stock[key].share;
        var price = object.stock[key].price;
        console.log(`The total value of ${object.stock[key].name}  is : ${stock.addValue(share, price)}`);
    }
} 
catch (e) 
{
    console.log("file is empty!!");
}