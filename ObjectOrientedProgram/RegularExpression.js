/*****************************************************************************************************/
//  * @Purpose - Statement Read in the following message: Hello <<name>>, We have
//  *            your full name as <<full name>> in our system. your contact number
//  *            is 91-xxxxxxxxxx. Please,let us know in case of any clarification
//  *            Thank you BridgeLabz 01/01/2016. Use Regex to replace name, full
//  *            name, Mobile#, and Date with proper value.
//  * @file    - RegularExpression.js
//  * @author  - Vaishnavi Bhosale
/****************************************************************************************************/
const read = require("readline-sync");
const utility = require("./Utility/OOPUtil");
var flag = true;

//To print the FirstName

do 
{
    var firstName = read.question("Enter your firstName :: ");
    var re = /^[A-Za-z]+$/;     //to check given input is string or not
    if (firstName.match(re)) 
    {
        flag = true;
    } 
    else 
    {
        console.log("Please enter your valid name :: ");
        flag = false;
    }
} while (flag != true);

//To print the last LastName

do 
{
    var lastName = read.question("Enter your lastName :: ");
    var re = /^[A-Za-z]+$/;     //to check given input is string or not
    if (lastName.match(re)) 
    {
        flag = true;
    } 
    else 
    {
        console.log("Please enter your valid name :: ");
        flag = false;
    }
} while (flag != true);

var fullName = `${firstName}  ${lastName}`;

//To display contact Number

do 
{
    var contactNo = read.question("Enter your Mobile Number :: ");
    var reg = /^[7-9]\d{9}$/;   //to validate mobile number
    if (contactNo.match(reg)) 
    {
        flag = true;
    }
    else 
    {
        console.log("Please Enter your Correct Mobile Number :: ");
        flag = false;
    }
} while (flag != true);

var date = new Date;
var day = date.toDateString();
var result = utility.replaceUsingRegex(firstName, fullName, contactNo, day);
console.log(result);