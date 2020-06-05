let path=require("path");
let fs=require("fs");
let dir="Organised_files";
let dirPath;
module.exports.makedir=function(dest){
dirPath=path.join(dest,dir);
fs.mkdirSync(dirPath)
    makingdirectory(dirPath);
}

function makingdirectory(dest){ 
let mediaPath=path.join(dest,"media");
fs.mkdirSync(mediaPath);
let otherPath=path.join(dest,"other");
fs.mkdirSync(otherPath);
let archivePath=path.join(dest,"archive");
fs.mkdirSync(archivePath);
let pdfPath=path.join(dest,"pdf");
fs.mkdirSync(pdfPath);
}
makingdirectory(process.argv[2]);