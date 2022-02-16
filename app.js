class Graph{
    constructor(){
        this.adjacentList ={}
        this.numberOfNodes = 0;
    }
    addVertex(value){
        if(this.adjacentList.hasOwnProperty(value))
        throw new Error("Vertex has been initialized !");
        
        this.adjacentList[value]=[];
        this.numberOfNodes++;
    }
    addEdge(vertex1 , vertex2){
        if(!this.adjacentList[vertex1].includes(vertex2)){
        this.adjacentList[vertex1].push(vertex2);
        if(!this.adjacentList[vertex2].includes(vertex1)){
        this.adjacentList[vertex2].push(vertex1);
        }
        }
    }
}

const g = new Graph();
g.addVertex("hello");
g.addVertex("hi");
g.addVertex("u there ?");
g.addEdge('hello','hi');