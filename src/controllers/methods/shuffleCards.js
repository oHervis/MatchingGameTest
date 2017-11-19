export default function shuffleCards(cardList) {
    console.log(cardList);
    let arrCards = []
    let counter = 0;
    
            for (let item in cardList) {
                counter = Math.floor(Math.random() * (cardList.length * 2));
                if (counter % 2 == 0) {
                    arrCards.push(cardList[item])
                } else {
                    arrCards.unshift(cardList[item])
                }

            }
    
    return arrCards
}