exports.group = function(Arr,param) {
    let output ={};
    if(Array.isArray(param)){
        for (let value of Arr) {

            let tmpp='';
            for(let key of param){
                tmpp =tmpp+'-'+ value[key];
            }

            if(!output[tmpp]){
                output[tmpp]=[];
            }

            output[tmpp].push(value);          
        }
    }else{
        for (let value of Arr) {
            if(!output[value[param]]){
                output[value[param]]=[];
            }
            if(value[param]){
                output[value[param]].push(value);
            }            
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
