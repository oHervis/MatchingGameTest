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

  
export default {

  name: 'content-game',
  data () {
    return {
        allCards
    }
  },
  components:{
    CardGame

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
        margin: 10px;
    }
}
</style>
