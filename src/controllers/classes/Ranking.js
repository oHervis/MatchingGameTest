export default class Ranking {
    constructor(userData){
        this._infoPlayer = userData
    }

    checkRank(getUserRanking){
        console.log(getUserRanking)
    
    }
    set setUserRanking(data){
        this._infoPlayer = data
    }
    get getUserRanking(){
        return{
            ranking:this._infoPlayer
        }
    }
}