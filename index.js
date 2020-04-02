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


exports.objsort = function(arr,keys) {
    return arr.sort((a,b)=>{
        if(Array.isArray(param)){
            for(let key of keys){
                let a_val=a[key];
                let b_val=b[key];
                if((typeof a_val )=='string'){
                    a_val = a_val.toUpperCase();
                }
                if((typeof b_val )=='string'){
                    b_val = b_val.toUpperCase();
                }
                if(a_val>b_val){
                    return 1;
                }else if(a_val<b_val){
                    return -1;
                }else{
                    return 0;
                }
            }
        }else{
            let a_val=a[keys];
            let b_val=b[keys];
            if((typeof a_val )=='string'){
                a_val = a_val.toUpperCase();
            }
            if((typeof b_val )=='string'){
                b_val = b_val.toUpperCase();
            }
            if(a_val>b_val){
                return 1;
            }else if(a_val<b_val){
                return -1;
            }else{
                return 0;
            }
        }        
    })
}
