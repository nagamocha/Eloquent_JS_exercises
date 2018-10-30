

function Person(name, age){
    this.name = name;
    this.age = age;
    this.talk2 = (line) => {
        console.log(`${this.name} says: ${line}`);
    }
}
Person.prototype.talk = (line) => {
    console.log(`${this.name} says: ${line}`);
}

jerry = new Person("Jerry", 43);
jerry.talk2("Hello there!");

console.log("********************************");

Person2 = {
    talk(line){
        console.log(`${this.name} says: ${line}`);
    }
}

function make_Person2(name, age){
    let p = Object.create(Person2);
    p.name = name;
    p.age = age;
    return p;
}
let jack = make_Person2("Jack", 24);
jack.talk("Hi There");
console.log("********************************");
let Person3 = {
    talk(line){
        console.log(`${this.name} says: ${line}`);
    }
}
function make_Person3(name, age){
    let p = Object.create(Person3);
    p.name = name;
    p.age = age;
    return p;
}
let jill = make_Person3("Jill", 30);
jill.talk("Howdy Y'all!");
console.log("********************************");

class Person4{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(line){
        console.log(`${this.name} says: ${line}`);
    }
}
jane = new Person4("Jane", 27);
jane.talk("Hi folks");
console.log("********************************");
class Person5{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(line){
        console.log(`${this.name} says: ${line}`);
    }
}

Person5.prototype["jump1"] = () => {
    console.log(`${this.name} is jumping1!!`);
};
Person5.prototype["jump2"] = function(){
    console.log(`${this.name} is jumping2!!`);
};


let honey = new Person5("Honey", 24);
honey.jump1();
honey.jump2();

console.log("********************************");



let height = Symbol["height"];
let jump = Symbol["jump"];
jane[height] = "6 ft";
jane[jump] = function() {
    console.log(`jump jump!`);
}
console.log(jane[height]);
jane[jump]();
console.log("********************************");
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

console.log("********************************");
let okIterator = "abcdef"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}
console.log(okIterator.next());

console.log("********************************");
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }

  //returns square matrix
  //you dont use 'new' keyword with this one
  static square(x, element =(x, y) => undefined){
      return new Matrix(x,x, element);
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}


Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};
let zero_matrix_filler = (x,y) => 0;
let identity_matrix_filler = (x,y) => {
    if(x == y) return 1;
    else return 0;
}
let matrix = Matrix.square(2, identity_matrix_filler);
for  (let {x,y,value} of matrix){
    console.log(`${x},${y}: ${value}`);
}


console.log("********************************");

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}










































































































//end
