
// This is the also way to create files in folder
const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files'); // "files is a folder name which is create already"
const filePath=`${dirPath}/apple.txt`;

fs.writeFileSync(filePath,'This is the inside text of file path'); // for create file run the command
// in Terminal write : node .\index.js (file name)