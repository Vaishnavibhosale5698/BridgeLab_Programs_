/*****************************************************************************************************/
// * @Purpose - Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
// *            the prime numbers in a 2D Array, the first dimension represents the range 0-100,
// *            100-200, and so on. While the second dimension represents the prime numbers in
// *            that range
// * @file    - Prime2D.js
// * @author  - Vaishnavi Bhosale
 /**************************************************************************************************/
const util = require("../DataStructure/Utility/UtilDataStructure");

function primes() {
    try {
        var primes = [];
        var start = 0;
        var end = 100;
        for (let i = 0; i < 10; i++) {
            primes[i] = util.isPrime(start, end)
            console.log(start + " " + end + ":" + "[" + primes[i] + "]");
            start = start + 100;
            end = end + 100;
        }
    } catch (e) {
        console.log(e.message);
    }

}
primes();