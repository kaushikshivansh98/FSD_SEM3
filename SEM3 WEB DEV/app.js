const fs= require('fs');
//create
fs.writeFile('example.txt','hello world!',(err)=>
{
    if(err)throw err;
    console.log('file created!');
//read
fs.readFile('example.txt','utf8',(err,data)=>
{
    console.log('file content:',data);
});
});
const fs = require('fs');
fs.appendFile('example.txt','\n this line was added.',(err)=>
{
    if(err) throw err;
    console.log('file updated (appened)!');
});
const fs = require('fs');
fs.unlink('example.txt',(err)=>
{
    if(err) throw err;
    console.log('file deleted');
});
console.log('1:start(sync)');

