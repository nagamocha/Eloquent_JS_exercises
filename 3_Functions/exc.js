
//min
function min(a,b) {
    return (a < b ? a : b);
}



//recursive test for parity, positive whole numbers

function isEven(n){
    switch (n){
        case 0:
            return true;
        case 1:
            return false;
        default:
            return isEven(n-2)
    }
}

//bean counting
//returns a function that takes a string s
//and returns count of instances of c in s
function makeCharCounter(chr){
    function counter (str){
        let c = 0;
        for(i = 0; i < str.length; i++){
            if (str[i] == chr) c++;
        }
        return c;
    }
    return counter;
}

let countBs = makeCharCounter('B');
let countChar = (str, chr) => (makeCharCounter(chr))(str);

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));








































































//end
