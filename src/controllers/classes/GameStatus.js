import SendStorage from './SendStorage'

export default class Game {
    constructor(status, playerData){
        this._status = status;
        this._playerData = {
            name:playerData.name,
            hits:playerData.hits,
            rounds:playerData.rounds
        }
    }

    endGame(data){
        let data = new SendStorage(data)
        console.log(data)
    }

    set setStatusGame(statusGame, playerData){
        this._status = statusGame;
        this._playerData = playerData
       
        if (this._status == 'END') {
            endGame(this._playerD/ata)
        }
    }
    get getStatusGame(){
        return{
            status:this._status
        }
    }
}