export const initShowCards = data =>{
    data.forEach(item => {
        flipCardShow(item.id)
        setTimeout(()=>{
            flipCardResetEndGame()
        }, 4000);
    })
    
   
}
export const flipCardShow = data => {

    let card = document.getElementById(data)
    let element = card.querySelector('.flipper')
    element.classList.add('rotate')
}

export const flipCardReset = arrCard => {
    
    setTimeout(()=>{
        arrCard.forEach(data => {            
            let card = document.getElementById(data)
            let element = card.querySelector('.flipper')
            element.classList.remove('rotate');
        })
    }, 500);
}

export const flipCardDisable = arrCard => {

    arrCard.forEach(data => {
        let card = document.getElementById(data)
        card.classList.add('disable');
    })
}

export const flipCardResetEndGame = () => {
    let arrCard = document.querySelectorAll('.targetDisable')
        arrCard.forEach(data => {
            data.classList.remove('disable')
            let element = data.querySelector('.flipper')
            element.classList.remove('rotate');
        })
}