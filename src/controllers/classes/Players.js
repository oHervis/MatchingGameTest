export default class Player {
    constructor(name, rounds ){
        this._name = name;
        this._rounds = rounds;

    }

    set setPlayerName(name){
        this._name = name;
    }
    
    set setPlayerRounds(rounds){
        this._rounds = rounds
    }

    get getPlayerInfo(){
        return {
            name: this._name,
            rounds: this._rounds   
        }
    }
    
}