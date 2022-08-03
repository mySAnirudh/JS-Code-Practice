// This element is use to update the file 

const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files'); // "files is a folder name which is create already"
const filePath=`${dirPath}/apple.txt`;
fs.appendFile(filePath,`and file is updated.txt`,(err)=>{ // here err use because if we got a error then file show the error

     if(!err)console.log("file is updated")
})