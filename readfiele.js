// This is the also way to read in folder
const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files'); // "files is a folder name which is create already"
const filePath=`${dirPath}/apple.txt`;

fs.readFileSync(filePath,`utf-8`,(err,item)=>{
    console.log(item)
}) // for create file run the command
// in Terminal write : node .\index.js (file name)