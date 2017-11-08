<template>
    <div id="content">
        <div id="gameCard" v-for="card in allCards" :key="card.id">
            <card-game  
                :imgFront="card.imgFront" 
                :imgBack="card.imgBack" 
                :target="card.target"
                :idElement="card.id">
            </card-game>            
        </div>
    </div>
</template>

<script>
    import CardGame from './CardGame'
    let allCards = [];


    let cards = fetch('./cards.json');

    cards.then((result)=>{
        result.json().then((cards)=>{
          for(let item in cards){
              allCards.push(cards[item])
          }              
        })
    })

    const shuffleCards = (arrCards)=> {
        for (let i = arrCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrCards[i], arrCards[j]] = [arrCards[j], arrCards[i]];
        }
        allCards = arrCards
        console.log(allCards);
    }
    
  
export default {

  name: 'content-game',
  data () {
    return {
        allCards
    }
  },
  components:{
    CardGame

  },
  methods:{
      shuffle:(arrCards)=>{
          shuffleCards(arrCards);
      }
  }
 
}
</script>

<style lang="scss">
#content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    #gameCard{
        width: 150px;
        height: 100px;
        margin: 10px;
    }
}
</style>
