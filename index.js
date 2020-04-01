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
