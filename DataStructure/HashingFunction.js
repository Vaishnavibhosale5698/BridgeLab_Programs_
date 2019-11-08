/******************************************************************************/
//  * @Purpose : Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
//  *            efficiently search a number from a given set of number
//  * @file    : Hashing Function
//  * @author   : Vaishnavi Bhosale 
/******************************************************************************/

const access = require("../DataStructure/Utility/UtilDataStructure");
const take = require('util');
const readline = require("readline-sync");
const fs = require('fs');
const utility = require("../DataStructure/Utility/Util");
function hashing()
{
    //var fileRead = filestream.readFileSync('/home/bridgeit/DataStructure/HashNumber.txt', 'utf8');
    var arr = [];
    fs.readFile('/home/admin1/Bridgelabz_Programs/DataStructure/HashNumber.txt', 'utf8', function(err, data)
    {
        if(err) return console.error(err)

        //console.log(data.split(' '));
        var numArray = data.split(' ');
        
        for (let i = 0; i < numArray.length; i++) 
        {
        var n = Number(numArray[i]);
        var remainder = n % 11;
    
        if (arr[remainder] === undefined) 
        {
            arr[remainder] = new access.LinkedList;
            arr[remainder].add(n);
        } 
        else 
        {
            arr[remainder].add(n);
        }
        }
        var str = "";
    for (let index = 0; index < 10; index++) 
    {
        //take.print(index + " slot: ");
        try 
        {
        console.log(`${index }  result slot: ${arr[index].print()} `)
       
           // console.log(arr[index].print());
        } 
        catch (err) 
        {
            console.log(`${index}  result slot: empty index`);
        }
    }
    //console.log()
    var valid = false;
    do 
    {
        var number = readline.questionInt('Enter the number you want to search \n');
        if (isNaN(number) && number < 0) 
        {
            console.log("Enter positive number only greater than zero");
        } 
        else 
        {
            valid = true;
        }
    } 
    while (!valid);
    remainder = Number(number % 11);
    console.log("Remainder is " + remainder);
    if (arr[remainder] === undefined) 
    {
        arr[remainder] = new access.LinkedList;
    }
    if (arr[remainder].contain(Number(number))) 
    {
        console.log("The number is present in file hence removed!! ");
       arr[remainder].remove(number);
       //delete (arr[remainder])
    } 
    else 
    {
        console.log("Number is not prsent in file hence added!! ");
        arr[remainder].add(number);
    }
    var flag;
    for (let index = 0; index < 11; index++) 
    {
        flag = true;
        try 
        {
        console.log(`${index }  result slot: ${arr[index].print()}`);
        
            str = str.trim() + arr[index].print();
        } 
        catch (err) 
        {
            console.log(`${index}  result slot: Empty index`);
        }
    } 
    console.log(str);
    });

    fs.appendFile('/home/admin1/Bridgelabz_Programs/DataStructure/HashNumber.txt', 'utf8', function(err, data)
    {
        if(err) return console.error(err)
        console.log(data);

    });
    console.log("\n\n");
}
hashing();