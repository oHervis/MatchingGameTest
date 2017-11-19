export default function getCards(){
    let cards = fetch('./cards.json');
    let arrCards = []
    let counter = 0;
    cards.then((result) => {
        result.json().then((cards) => {
            for (let item in cards) {
                counter = Math.floor(Math.random() * (cards.length + 1));
                if (counter % 2 == 0) {
                    arrCards.push(cards[item])                    
                } else{
                    arrCards.unshift(cards[item])
                }
                
            }
        })
    })
    return arrCards
}