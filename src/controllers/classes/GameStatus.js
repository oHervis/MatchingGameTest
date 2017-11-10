import storage from '../metodos/storage'

export default class Game {
    constructor(status, playerData){
        this._status = status;
        this._playerData = {
            name:playerData.name,
            hits:playerData.hits,
            rounds:playerData.rounds
        }
    }

    gameOver(data){
        
        storage(data.getUserRanking.ranking)           
        
    }

    set setStatusGame(statusGame){
        
        this._status = statusGame;     
       
    }

    set setDataPlayer(playerData){
        this.gameOver(playerData)
    }
    get getStatusGame(){
        return{
            status:this._status
        }
    }
}