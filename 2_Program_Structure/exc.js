//LOOPING A TRIANGLE
let triangle_len = 1;
for(let u_char = '#'; u_char.length <= triangle_len; u_char += '#'){
    console.log(u_char);
}



//FIZZBUZZ
for(i = 1; i <= 0; i++){
    let x = "";
    if (i % 3 == 0) x += "Fizz"
    if (i % 5 == 0) x += "Buzz"
    if (x != "") console.log(x)
    else console.log(i)
}

//CHESSBOARD
let size = 8
let width = size;
let height = size;
let pattern = "";
//build base for row pattern
for(let i = 1; i < width; ++i){
    if(i % 2 != 0) pattern += "#";
    else pattern += " ";
}
//console.log(pattern)

//build entire board, by height
for(let i = 1; i <= height; ++i){
    if(i % 2 != 0) console.log("_" + pattern)
    else console.log(pattern + "_")
}




















































//end
