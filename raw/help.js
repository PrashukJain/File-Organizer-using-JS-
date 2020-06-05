if(ext==".pdf"||ext==".docx"){
    let filepath=path.join(obj.ispdf,path.basename(src));
     fs.copyFileSync(src,filepath);
}
else if(ext=='.png'||ext=='.jpeg'||ext=='.mkv'||ext=='.mp3'){
    let join=path.join(obj.ismedia,path.basename(src));
    fs.copyFileSync(src,join);
}
else if(ext=='.zip'){
    let join=path.join(obj.isarchive,path.basename(src));
    fs.copyFileSync(src,join);
}
else{
    let join=path.join(obj.isother,path.basename(src));
      fs.copyFileSync(src,join);
}