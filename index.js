exports.group = function (Arr, param) {
    let output = {};
    if (Array.isArray(param)) {
        for (let value of Arr) {
            let tmp_keys = [];
            let object_key = '';
            for (let key of param) {
                tmp_keys.push(value[key]);
            }
            object_key=tmp_keys.join('_');

            if (!output[object_key]) {
                output[object_key] = [];
            }
            output[object_key].push(value);
        }
    } else {
        for (let value of Arr) {
            if (!output[value[param]]) {
                output[value[param]] = [];
            }
            if (value[param]) {
                output[value[param]].push(value);
            }
        }
    }
    return output;
}
exports.groupObject = function (Arr, param) {
    return new Promise((resolve,reject)=>{
        let output = {};
        if (Array.isArray(param)) {
            for (let value of Arr) {
                let tmp_keys = [];
                let object_key = '';
                for (let key of param) {
                    tmp_keys.push(value[key]);
                }
                object_key=tmp_keys.join('_');

                if (!output[object_key]) {
                    output[object_key] = [];
                }
                output[object_key].push(value);
            }
        } else {
            for (let value of Arr) {
                if (!output[value[param]]) {
                    output[value[param]] = [];
                }
                if (value[param]) {
                    output[value[param]].push(value);
                }
            }
        }
        resolve(output);
    });
}
exports.objSort = function (arr, keys) {
    return arr.sort((a, b) => {
        if (Array.isArray(keys)) {
            for (let key of keys) {
                let a_val = a[key];
                let b_val = b[key];
                if ((typeof a_val) == 'string') {
                    if (!isNaN(a_val)) {
                        a_val = parseFloat(a_val);
                    } else {
                        a_val = a_val.toUpperCase();
                    }
                }
                if ((typeof b_val) == 'string') {
                    if (!isNaN(b_val)) {
                        b_val = parseFloat(b_val);
                    } else {
                        b_val = b_val.toUpperCase();
                    }
                }
                if (a_val == b_val) {
                    continue;
                }
                return a_val > b_val;
            }
        } else if ((typeof keys) == 'string') {
            let a_val = a[keys];
            let b_val = b[keys];
            if ((typeof a_val) == 'string') {
                if (!isNaN(a_val)) {
                    a_val = parseFloat(a_val);
                } else {
                    a_val = a_val.toUpperCase();
                }
            }
            if ((typeof b_val) == 'string') {
                if (!isNaN(b_val)) {
                    b_val = parseFloat(b_val);
                } else {
                    b_val = b_val.toUpperCase();
                }
            }
            return a_val > b_val;
        } else if ((typeof keys) == 'object') {
            for (let key in keys) {
                let a_val = a[key];
                let b_val = b[key];
                if ((typeof a_val) == 'string') {
                    if (!isNaN(a_val)) {
                        a_val = parseFloat(a_val);
                    } else {
                        a_val = a_val.toUpperCase();
                    }
                }
                if ((typeof b_val) == 'string') {
                    if (!isNaN(b_val)) {
                        b_val = parseFloat(b_val);
                    } else {
                        b_val = b_val.toUpperCase();
                    }
                }
                if (a_val == b_val) {
                    continue;
                }
                return keys[key] != -1 ? (a_val > b_val) : !(a_val > b_val);
            }
        }
    })
}
exports.size = function (err, obj) {
    return Object.keys(obj).length;
}
