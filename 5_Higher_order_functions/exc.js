


let arrays = [[1, 2, 3], [4, 5], [6]];

//1
let flatten = function(arr){
    return arr.reduce((flattened_arr, curr) => flattened_arr.concat(curr));
}

//2
let loop = function(val, test, update_val, body){
    let do_loop = function(val){
        if (test(val)){
            body(val);
            do_loop(update_val(val), test, update_val, body);
        }
    }
    do_loop(val);
}

//3
function every1(array, test){
    for(let elem of array){
        if (!test(elem)) return false;
    }
    return true;
}

function every2(array, test){
    return !array.some(elem => !test(elem))
}

//4










































































































































//end
