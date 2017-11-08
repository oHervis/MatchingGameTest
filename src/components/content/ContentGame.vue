<template>
    <div id="content">

        <div id="gameCard" v-for="card in cards" :key="card.id">
            <card-game  
                :imgFront="card.imgFront" 
                :imgBack="card.imgBack" 
                :name="card.name">
            </card-game>            
        </div>
    </div>
</template>

<script>
import CardGame from './CardGame'

export default {

  name: 'header-game',
  data () {
    return {
            cards:[{
                name:'teste1',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste2',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste3',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste4',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste5',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste6',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste7',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste8',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste9',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            },
            {
                name:'teste10',
                imgFront:'https://image.flaticon.com/icons/png/512/193/193996.png',
                imgBack:'https://image.flaticon.com/icons/png/512/193/193995.png',
                target:'1'
            }
        ]
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
