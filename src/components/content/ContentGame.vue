<template>
    <div id="content">
        <info-game :rounds="counter"></info-game>
        <div class="game">
            <div class="gameCard" v-for="card in allCards" :key="card.id">
                <card-game
                    :hits="user"
                    :statusGame="status"
                    v-on:click.native="calcCounter" 
                    :imgFront="card.imgFront" 
                    :imgBack="card.imgBack" 
                    :target="card.target"
                    :idElement="card.id">
                </card-game>                        
            </div>
        </div>
    </div>
</template>

<script>
    import CardGame from './CardGame'
    import InfoGame from './InfoGame'
    let allCards = [];

    let cards = fetch('./cards.json');

    cards.then((result)=>{
        result.json().then((cards)=>{
          for(let item in cards){
              allCards.push(cards[item])
          }              
        })
    })

  
    

export default {

  name: 'content-game',
  data () {
    return {
        allCards,
        counter:0,
        counterClick:0
    }
  },
  components:{
    CardGame,
    InfoGame

  },
  props:{
      user:Object,
      renderGame: Object,
      status:Object
  },
  methods: {
      calcCounter() {
        this.counterClick += 1
        console.log()
        if (this.counterClick == 2) {
          this.counter += 1;
          this.counterClick = 0;
          this.setRounds()
        }
      },
      setRounds() {
        this.user.setPlayerRounds = this.counter;
      },
      shuffleCards(arrCards) {
        for (let i = arrCards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arrCards[i], arrCards[j]] = [arrCards[j], arrCards[i]];
        }
        console.log(arrCards);
        
      }
    },
    created: function () {
      this.shuffleCards(this.allCards)
      this.counterClick;
      this.counter;
    }

   
}
</script>

<style lang="scss">
#content {
    width: 100%;
    display: flex;
    background: #333;
    flex-wrap: wrap;
    justify-content: center;
    .game{
        width: 65%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    
        .gameCard{
            cursor: pointer;
            width: 100px;
            height: 110px;
            margin: 10px;
            -webkit-transition: 0.4s ease all;
            -moz-transition: 0.4s ease all;
            transition: 0.4s ease all;
           
        }
    }
}
</style>
