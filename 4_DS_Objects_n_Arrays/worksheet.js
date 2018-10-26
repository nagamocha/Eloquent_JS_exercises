//array in js
let arr = [3,9,1,5,2,8,6,9];
console.log(arr[0]);

console.log(arr["length"]);
console.log(arr["1"]);


let arr2 = [];
arr2.push(4);
console.log(arr2.pop());


let todolist = [];
function add_task(task){
    todolist.push(task)
}
function add_urgent_task(task){
    todolist.unshift(task);
}
function get_task(){
    return todolist.shift();
}
function search_task_index(task){
    return todolist.indexOf(task);
}

function remove_task(task){
    let i = search_task_index(task);
    if( i != -1){
        todolist = remove(todolist, i)
    }
}

function remove(arr, i){
    return (arr.slice(0,i)).concat(arr.slice(i+1));
}


//function that accepts any number of arguments
function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number > result) result = number;
    }
    console.log(this.rest);
    return result;
}

console.log(max(4,5,6));



























































































//end
