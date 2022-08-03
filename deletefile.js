// This is the also way to delete the file from folder
const { dir } = require('console');
const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files'); // "files is a folder name which is create already"
const filePath=`${dirPath}/apple.txt`;

fs.unlinkSync(`${dirPath}/apple.txt`)