/*****************************************************************************************************/
// * @Purpose - Extend the Prime Number Program and store only the numbers in that range that are
// *            Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
// *            Further store in a 2D Array the numbers that are Anagram and numbers that are not
// *            Anagram
// * @file    - PrimeAnagram2D.js
// * @author  -Vaishnavi Bhosale
 /**************************************************************************************************/
const util = require('/home/admin1/Bridgelabz_Programs/DataStructure/Utility/UtilDataStructure.js');
const M = require('/home/admin1/Bridgelabz_Programs/DataStructure/Utility/Util');
//const T = require('util');
const readline = require('readline-sync');
const array = [["0-100   "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000"]];
const array1 = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000"]];
var i = 0; var j = 1; var range = 100;
var arr = []
var arr1 = []
var arr2 = []
for (let prime = 2; prime <= 1000; prime++) {
    if (M.isPrime(prime)) {

        if (prime <= range) {
            var a = "" + prime
            var b = a.split("")
            b.sort()
            var v = ""
            for (let i = 0; i < b.length; i++) {
                v = v + b[i]
            }
            if (!arr.includes(v)) {
                arr.push(v)
                array[i][j] = prime;
                j++;
            }
        }
        else {
            var a1 = "" + prime
            var b1 = a1.split("")
            b1.sort()
            var v1 = ""
            for (let i = 0; i < b1.length; i++) {
                v1 = v1 + b[i]
            }
            if (!arr1.includes(v1)) {
                arr1.push(v1)
                j = 1;
                range = range + 100;
                i++;
                array[i][j] = prime;
            }
        }
    }
}
console.log("*********************************************************************************")
var arr = util.towDArray();
console.log("***********************************************************************************")
console.log("The prime numbers that are not Anagram presents in the given range 0 - 1000");
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        // T.print(array[i][j] + " ");
        process.stdout.write(array[i][j] + " ");
    }
    //utility.mark1(array)
    console.log();
}