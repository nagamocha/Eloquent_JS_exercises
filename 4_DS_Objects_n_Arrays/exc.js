


//takes start and end, returns arr containing
//all numbers from start up to and including end

let range = function(start, end, step = 1){
    let arr = [];
    while(start <= end){
        arr.push(start)
        start = start + step;
    }
    return arr;
}

let sum = function(nums){
    let s = 0;
    for(let n of nums){
        s += n;
    }
    return s;
}


//reverse array
let reverseArray = function(arr){
    arr2 = arr.slice();
    reverseArrayInPlace(arr2);
    return arr2;
}



let reverseArrayInPlace = function(arr){
    let i = 0, j = arr.length - 1, temp = null;
    while (i < j){
        temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
}

//List data structures
let arrayToList = function (arr){
    function builder(i){
        if (arr[i] ==  undefined) return null
        else return {value: arr[i], rest: builder(i + 1)}
    }
    return builder(0);
}

let listToArray = function(lst){
    let arr = [];
    while (lst != null){
        arr.push(lst.value);
        lst = lst.rest;
    }
    return arr;
}

let prepend = function(elem, lst){
    return {value: elem, rest: lst};
}

let nth = function(pos, lst){
    if(lst == null) return undefined;
    else if (pos == 0) return lst.value
    else return nth(pos - 1, lst.rest);
}


let lst = arrayToList([1,2,3]);
console.log(lst);
let arr = listToArray(lst);
console.log(arr);
console.log(nth(7, arrayToList([0,1,2,3,4,5,6])));


//deep comparson
let deepEqual = function(a1, a2){
    //compare values
    if (typeof a1 !== "object" && typeof a2 !== "object"){
        return a1 === a2;
    }else if (a1 === null || a2 === null){
        return a1 === a2;
    }else{
        for(let key of Object.keys(a1)){
            if (deepEqual(a1[key], a2[key])) continue;
            else return false;
        }
    }
    return true;
}

























































































//end
