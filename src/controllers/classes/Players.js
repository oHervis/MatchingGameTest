export default class Player {
    constructor(name, rounds, hits ){
       
        this._name = name;
        this._rounds = rounds;
        this._hits = hits;

    }

    set setPlayerName(name){
        this._name = name;
    }
    
    set setPlayerRounds(rounds){
        this._rounds = rounds
    }
    
    set setPlayerHits(hits) {
        this._hits = hits
    }

    get getPlayerInfo(){
        return {
            name: this._name,
            rounds: this._rounds,
            hits: this._hits,

        }
    }
    
}