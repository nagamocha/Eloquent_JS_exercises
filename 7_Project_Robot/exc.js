


//PERSISTENT GROUP

class PGroup{
    constructor(arr = []){
        this._set = arr;
    }
    static empty(){
        return new PGroup();
    }

    has(x){
        return (this._set.indexOf(x) !== -1);
    }

    //rather than modify curr PGroup, a new group is
    //returned with the new element added
    //if the element was already in the group (~)
    add(x){
        if (this.has(x) == false ){
            return new PGroup(this._set.concat(x));
        }else{
            return this;
        }
    }

    delete(x){
        if (this.has(x)){
            return new PGroup (this._set.filter((i) => i !== x));
        }else{
            return this;
        }
    }

}



let e = new PGroup();
let a = e.add("a");
console.log(a);
let ab = a.add("b");
console.log(ab);
let b = ab.delete("a");
console.log(b);

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false






















































































































//end
