// Here we are rename the file name 

const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files'); // "files is a folder name which is create already"
const filePath=`${dirPath}/apple.txt`;

fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.log("file name is updated")
})