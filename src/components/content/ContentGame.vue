<template>
    <div id="content">
        <info-game :rounds="counter"></info-game>
        <div class="game">
            <div class="gameCard" v-for="card in allCards" :key="card.id">
                <card-game
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

    const shuffleCards = (arrCards)=> {
        for (let i = arrCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrCards[i], arrCards[j]] = [arrCards[j], arrCards[i]];
        }
        allCards = arrCards
    }
    

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
      renderGame: Object
  },
  methods:{
      shuffle(arrCards){
          shuffleCards(arrCards);
      },
      calcCounter(){
          this.counterClick += 1
          if (this.counterClick == 2) {
                this.counter += 1;
                this.counterClick = 0;
          }          
      },
      setRounds(rounds){
          this.user.PlayerRounds = this.counter;
      }
  },
  created: function(){
      this.counterClick;
      this.counter;
    }
   
}
</script>

<style lang="scss">
#content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .game{
        width: 65%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    
        .gameCard{
            width: 100px;
            height: 110px;
            margin: 10px;
        }
    }
}
</style>
