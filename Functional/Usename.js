/*
    User Input and Replace String Template “Hello <<UserName>>, How are you?”
    a. I/P​ -> Take User Name as Input. ​ Ensure UserName has min 3 char
    b. Logic​ -> Replace <<UserName>> with the proper name
    c. O/P​ -> Print the String with User Name

    @Author Vaishnavi Bhosale
*/

const readline=require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter UserName ', (UserName) => {
    
    console.log(`Hello ${UserName},How are you?`);
  
    rl.close();
  });