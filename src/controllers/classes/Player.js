export default class Player {
    constructor(name){
        this.name = name
    }

    set setName(name){
        this.name = name
    }
    
    get getName(){
        return this.name
    }
}