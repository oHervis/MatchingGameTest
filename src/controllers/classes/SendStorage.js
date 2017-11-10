export default class SendStorage{
    constructor(data){
        this._dataUser = data
    }

    set setDataStorage(data){
        localStorage.setItem(data.name, JSON.stringify(data));
    }

    getDataStorage(data){
        let info = localStorage.getItem(data.name)
        return JSON.parse(data);
    }

}