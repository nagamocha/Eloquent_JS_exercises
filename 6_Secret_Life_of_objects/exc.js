


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
































































































//end
