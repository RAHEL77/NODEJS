const fs = require('fs');
//1
fs.writeFileSync('newfile.txt','I created this file from js code');

//2
fs.copyFile('newfile.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('the file  copied to destination.txt');
  });

//3  
fs.renameSync('destination.txt','afterRenamed.txt')

//4

fs.readdirSync('./').forEach((item)=>console.log(item));
//5

fs.appendFileSync('destination.txt',' I add something hihihi');



