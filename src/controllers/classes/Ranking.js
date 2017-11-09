export default class Ranking {
    constructor(userData){
        this._infoPlayer = userData
    }

    set setUserRanking(data){
        console.log(data);
        this._infoPlayer = data
    }
    get getUserRanking(){
        return{
            ranking:this._infoPlayer
        }
    }
}