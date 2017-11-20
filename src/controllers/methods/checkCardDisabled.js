export default function checkCardDisabled(currentCard, arrCartas){
    if (arrCartas.length > 0) {
        return arrCartas.some(item => {
            return item == currentCard
        })
    }else{
        return false
    }
}