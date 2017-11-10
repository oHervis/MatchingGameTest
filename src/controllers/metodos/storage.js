export default function storage(data){
    let currentuser = data;
    let lastUsers = JSON.parse(localStorage.getItem('Users'))
    
    if (!lastUsers) {
            let defaultUser = []
            localStorage.setItem('Users', JSON.stringify(defaultUser))
        } 

        lastUsers = JSON.parse(localStorage.getItem('Users'))

        lastUsers.push(currentuser)

        localStorage.setItem('Users', JSON.stringify(lastUsers))  

}