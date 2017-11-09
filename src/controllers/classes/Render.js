export default class render {
    constructor(condition) {
        this._condition = condition;
        

    }

    set setConditionRender(value) {
        this._condition = value;
    }


    get getConditionRender() {
       return{
           condition: this._condition
       } 
    }

}