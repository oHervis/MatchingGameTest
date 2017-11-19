export  function setStorage(infoGame){
    let userData = infoGame;

    let lastUsers = JSON.parse(localStorage.getItem('Users'))

    
    
    console.log(userData);
    
    if (!lastUsers) {
        let defaultUser = []
        localStorage.setItem('Users', JSON.stringify(defaultUser))
        userData.id = 0
    } else {
        
        userData.id = lastUsers.length + 1 
    }

    lastUsers = JSON.parse(localStorage.getItem('Users'))

    lastUsers.push(userData)

    localStorage.setItem('Users', JSON.stringify(lastUsers))  


}

export  function getStorage(){
    return JSON.parse(localStorage.getItem('Users'))
}