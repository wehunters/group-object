exports.group = function(Arr,key) {
    let output ={};
    for (let value of Arr) {
        if(!output[value[key]]){
            output[value[key]]=[];
        }
        if(value[key]){
            output[value[key]].push(value);
        }            
    }
    return output;    
}
exports.objsort = function(arr,key) {
    return arr.sort((a,b)=>{
        if(a.name.toUpperCase()>b.name.toUpperCase()){
            return 1;
        }else if(a.name.toUpperCase()<b.name.toUpperCase()){
            return -1;
        }else{
            return 0;
        }
    })
}
