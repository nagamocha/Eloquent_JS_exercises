const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

//we're interested in destinations that we can reach from a given place.
//this function converts the list of roads to a data structure that,
//for each place, it states what can be reached from there
//adjacency list graph
function buildGraph(edges){
    let graph = Object.create(null);

    function addEdge(from, to){
        if(graph[from] ==  null){
            graph[from] = [to];
        }else{
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

let roadGraph = buildGraph(roads)
//the village state consisting off the most minimal set of values
//that define it: the robot's current location and the collection of
//undelivered parcels
//each parcel has a current location and destination address
//when a robot moves, rather than change the state, we compute a
//new state after the move

class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        //if there is no road from current position to
        //given destination, then return as is, since that
        //was an illegal move
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }else{
            //since we can reach next destination from our
            //current position, ie destination valid
            let parcels = this.parcels.map(p => {
                //1 we move all the parcels in this location
                //  to the next destination
                if(p.place != this.place) return p;
                else return {place: destination, address: p.address};

                //after updating the position of each parcel appropriately
                //given the move, we check if any of the parcels have
                //reached their destination and drop them
                //the parcels list now remains with only those
                //parcels that are yet to reach destination/address
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}


//the robot is essentially a function which given the current village state
//decides the next village state to move to
//remember when the move method is invoked on the village state, parcels
//in current place are moved to the next place, and those that have
//reached destination are dropped
//
//a robot, given the curr state and its memory, returns an 'action'
//this action encapsulates both the next direction(ie place)
//and an update to the memory
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

//a random robot
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

//adding a static method directly to the constructor
VillageState.random = function(parcelCount = 50) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};



//runRobot(VillageState.random(), randomRobot);

//work is an array of places that should be explored next
//along with route that got us there
//for each p
//given a new place 'at' we haven't explored yet, we go thru all the other
//  places 'at' is connected to ie "for (let 'place' of graph[at])"
//  if amongst the places is the destination, a route is immediately returned
//  otherwise, given the 'place', if the place hasn't been explored before
//  we add it to the work array to be explored next
function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if ( work.some(w => w.at == place) === false ) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}



//goal oriented robot
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            //get shortest route to where parcel is
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            //if we are at where the parcel is, then we get the
            //shortest route to where we can deliver the parcel
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}



//runRobot(VillageState.random(), randomRobot);
//runRobot(VillageState.random(), goalOrientedRobot, []);

//exc1: measuring a robot
let compareRobots = function(robot1, memory1, robot2, memory2){
    //generate random tasks
    function generateTasks(n){
        let tasks = [];
        for(let i = 0; i < n; i++){
            tasks.push( VillageState.random() );
        }
        return tasks;
    }

    //function for getting steps
    function getRobotSteps(state, robot, memory){
        let steps = 0;
        for (let turn = 0;; turn++) {
            if (state.parcels.length == 0) {
                break;
            }
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
            steps++;
        }
        return steps;
    }

    function getAverageSteps(tasks, robot, memory){
        let allSteps = tasks.map(s => getRobotSteps(s, robot, memory));
        let average = allSteps.reduce((t1,t2)=> t1 + t2, 0) / allSteps.length;
        return average;
    }

    function logRobotSteps(name, no_steps){
        console.log(`${name} took averagely ${no_steps} steps`)
    }

    let tasks = generateTasks(1000);

    logRobotSteps("Robot1_______Random", getAverageSteps(tasks, robot1, memory1));
    logRobotSteps("Robot2_ShortestPath", getAverageSteps(tasks, robot2, memory2));

}


let routeRobot = randomRobot;
compareRobots(routeRobot, [], goalOrientedRobot, []);
















































































//end
