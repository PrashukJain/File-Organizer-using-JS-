let fs=require("fs");
let path=require("path");
function checkwhetherFile(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
let src=process.argv[2];
// let dest=process.argv[3];
let uni=require("./makedire");
let dest=src;
let obj=uni.makedir(dest);
function fetch(src,dest){
     if(checkwhetherFile(src)==true){
        // let old=path.basename(src);
        let ext=path.extname(src);
    
        //push to destination 
        if(ext==".pdf"||ext==".docx"||ext=='.xlsx'||ext== '.xls'||ext=='.odt'||ext=='.ods'||ext=='.odp'||ext=='.odg'||ext=='.odf'||ext=='.txt'||ext=='.ps'||ext=='.tex'){
            let filepath=path.join(obj.ispdf,path.basename(src));
             fs.copyFileSync(src,filepath);
        }
        else if(ext=='.png'||ext=='.jpeg'||ext=='.mkv'||ext=='.mp3'||ext=='.jpg'){
            let join=path.join(obj.ismedia,path.basename(src));
            fs.copyFileSync(src,join);
        }
        else if(ext=='.zip'||ext=='.7z'||ext=='.rar'||ext== '.tar'||ext== '.gz'||ext=='.ar'||ext=='.iso'||ext==".xz"){
            let join=path.join(obj.isarchive,path.basename(src));
            fs.copyFileSync(src,join);
        }
        else{
            let join=path.join(obj.isother,path.basename(src));
              fs.copyFileSync(src,join);
        }
    }
    else{
         let childNames=getContent(src);
        for(let i=0;i<childNames.length;i++){
            if(childNames[i]=="Organised_files")
            continue;
            let childPath=path.join(src,childNames[i]);
            // let chobj={};
            fetch(childPath,dest);}
        
    }
}

fetch(src,dest);
