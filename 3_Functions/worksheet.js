




//ways to define functions
let addx_1 = function(x,i){
    return x + i;
}

const addx_2 = function(x,i){
    return x + i;
}

function addx_3(x,i){
    return
}
//arrow functions
//allow for less verbosity ie conciseness
const addx_4 = (x,i) => {
    return x + i;
}


//passing too few a number of args
function minus(a,b){
    //deep comparison since 0 == undefined is true
    if (b === undefined) return a;
    else return a - b;
}

//giving default arguments
function plus(a, b = 0){
    return a + b;
}

function multiplier(factor) {
    return n => n * factor;
}
let double = multiplier(2);
let triple = multiplier(3);

console.log(double(10));




//function that given a number, adds zeros until it
//is of a certain length

function pad_number(n, l){
    let output = String(n);
    while(output.length < l){
        output = "0" + output;
    }
    return output;
}































































//end
