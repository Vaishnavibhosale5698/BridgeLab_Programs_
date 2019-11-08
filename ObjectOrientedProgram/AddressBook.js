/******************************************************************************
 *  @description    :Simple Address Book
                    An address book holds a collection of entries, each recording a person's first and 
                    last names, address, city, state, zip, and phone number.
                    It must be possible to add a new person to an address book, to edit existing information
                    about a person (except the person's name), and to delete a person.
                    It must be possible to sort the entries in the address book alphabetically by last name
 *  @file           : AddressBook.js
 *  @overview       : To create a JSON file . 
 *  @author         : Vaishnavi Bhosale.
 
 *
 ***************************************************************************** */

const read = require('readline-sync')
const utility = require('../ObjectOrientedProgram/Utility/OOPUtil');
const fs = require('fs');
var data = fs.readFileSync('AddressBook.json', 'utf8');
var addressb = JSON.parse(data);
/**
 * @description main function to call create,open address Book 
 */
function addressBook() {
    var address = new utility.Address();
    while (choice1 != 3) {
        console.log("\n\t\t**********ADDRESS BOOK*********");
        console.log(" \t\t1 Create Profile");
        console.log(" \t\t2 Open Address Book");
        console.log(" \t\t3 Exit");
        console.log(" \t\t*********************************\n")
        var choice1 = read.question("~Enter your choice: \n");
        switch (parseInt(choice1)) {
            case 1:
                address.createAddress(addressb);
                break;
            case 2:
                address.openProfile(addressb);
                break;
            case 3:
                console.log("\nThankYou!");
                break;
            default:
                console.log("Please enter a valid option!!");
        }
    }
}
addressBook();