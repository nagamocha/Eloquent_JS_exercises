//in what ways does "var" vary from "let"

//favour the use of "let" over "var"


//a binding without a value is assigned 'undefined'

let theNumber = Number("56");
if(!Number.isNaN(theNumber)){
    console.log("Your Num doubled is: " + (theNumber + theNumber));
}else{
    console.log("Invalid number");
}

let n = 4;
while(n > 0){
    console.log(n * n);
    n = n - 1;
}

for(let n = 4; n > 0; n = n - 1){
    console.log(n * n)
}


let a_new_toy = "toycar";



























































































//end
