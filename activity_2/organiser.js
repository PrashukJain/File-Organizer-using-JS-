let fs=require("fs");
let path=require("path");
let utility=require("./utility");
function checkwhetherFile(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
function getExtension(src){
    let ext=src.split(".").pop();
return ext;
}
function getcategory(ext){
    // console.log(ext);
    let types=utility.types;
    for(let category in types){
        for(let i=0;i<types[category].length;i++){
            if(types[category][i]==ext){
                // console.log("Inside get category " + category);
            return category;}
        }
      }
      return null;
}
function sendFile(dest,category,src){
    let categoryPath=path.join(dest,category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fname=path.basename(src);
    let cName=path.join(categoryPath,fname);
    fs.copyFileSync(src,cName);
}
function organizer(src,dest){
    if(checkwhetherFile(src)==true){
let ext=getExtension(src);
let category=getcategory(ext);
if(category==null){
    category="others";
}
// console.log(category);
sendFile(dest,category,src);
    }
    else{
        let childNames=getContent(src);
    for(let i=0;i<childNames.length;i++){
        if(childNames[i]=="organised_files"){
            continue;
        }
        let childPath=path.join(src,childNames[i]);
        organizer(childPath,dest);
    }
    }
}
let src = process.argv[2];
let dest = path.join(src, "organized_files")
if (fs.existsSync(dest) == false) {
    fs.mkdirSync(dest);
}
organizer(src, dest);