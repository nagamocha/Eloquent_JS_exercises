

console.log("********************************");
//2D VECTORS
class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus({x,y}){
        return new Vec(this.x + x, this.y + y);
    }

    minus({x,y}){
        return new Vec(this.x - x, this.y - y);
    }

    get length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    toString(){
        return`[${this.x},${this.y}]`;
    }
}


let s = new Vec(1, 2).plus(new Vec(2, 3));

let t = String(s);
console.log(t);

console.log("********************************");
//GROUPS
//based on sets
class Group{
    constructor(){
        this._set = [];
    }

    has(x){
        return (this._set.indexOf(x) !== -1);
    }

    add(x){
        //returns bool val to indicate whether add was
        //successful
        if (this.has(x) == false ){
            this._set.push(x);
            return true;
        }else{
            return false;
        }
    }

    delete(x){
        if (this.has(x)){
            this._set = this._set.filter((i) => i !== x);
            return true;
        }else{
            return false;
        }
    }

    static from(iterable){
        let group = new Group();
        for (let i of iterable){
            group.add(i);
        }
        return group;
    }
}


class GroupIterator{
    constructor(group){
        this.i = -1;
        this.group = group;
    }

    next(){
        if (this.i === this.group._set.length){
            return {value: null, done: true};
        }
        else {
            this.i++;
            return {value: this.group._set[this.i], done: false};
        }
    }
}

Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
























































































//end
