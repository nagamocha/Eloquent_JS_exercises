



let dog = {
    speak:  function(line){
        console.log(`The dog ${this.name} says '${line}'`);
    }
};
dog.name = "Peddie";
dog.eat = function(food){
    console.log(`The dog ${dog.name} is eating ${food}`);
}
dog.eat("Meat");

dog.speak("Bark")

function play(item){
    console.log(`The dog ${this.name} rabbit is playing with a ${item}`);
}

let terry = {name: "Terry", play};
terry.play("ball");

let norm = (obj, n) =>{
    return n/obj.length;
}
function normalize() {
  console.log(this.coords.map(n => norm(this, n)) );
}

normalize.call({coords: [0, 2, 3], length: 5});


let person_template = {
    //this is shortform
    run(km){
        console.log(`Person: ${this.name} ran ${km} kms`);
    }
}
//Version 1
function make_Person(name, km){
    let new_person = Object.create(person_template);
    new_person.name = name;
    new_person.run(km);
    return new_person;
}
let john = make_Person("John", 45);

//Version 2
function make_Person2(name, km){
    this.name = name;
    this.run(km);
}
make_Person2.prototype.run = function(km){
    console.log(`Person: ${this.name} ran ${km} kms`);
}
make_Person2.prototype.jog = function(km){
    console.log(`Person: ${this.name} jogged for ${km} kms`);
}
make_Person2.prototype.toString = function(){
    return `Person2: ${this.name}`;
}

let jerry = new make_Person2("Jerry",50);
jerry.run(50);
console.log(make_Person2.prototype);
console.log(String(jerry));
console.log("********************************");

let dog1 = new (class {
    constructor(name){this.name = name;}
    toString(){return `DOGGO: ${this.name}`;}
    bark(){console.log(`${this.name}: woof woof!`)}})("Fluffy");
dog1.bark();
console.log(String(dog1));
console.log("********************************");

//given array of pairs(themselves arrays). returns a map
//associating appropriateley

let makeMap = function(arr){
    new_map = new Map();
    for(let pair of arr){
        new_map.set(pair[0], pair[1])
    }
    return new_map;
}

let name_to_age = makeMap([["Jane", 19], ["Erica", 23], ["Dyl", 27]]);
console.log(name_to_age.keys());

console.log("********************************");
const toStringSymbol = Symbol("toString");
console.log([toStringSymbol]);
















































































































//end
