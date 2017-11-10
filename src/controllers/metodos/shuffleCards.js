export default function shuffleCards(arrCards){
   
    for (let i = arrCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCards[i], arrCards[j]] = [arrCards[j], arrCards[i]];
    }
    allCards = arrCards

    return allCards
}