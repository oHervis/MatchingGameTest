<template>
    <div id="content">
        
        <header-game 
                :User="User"
                :Wins="wins"
                :Rounds="rounds"
        ></header-game>
       
        <div class="game">
            <div class="gameCard" v-for="card in Cards" :key="card.id">                   
                    <card-game @click.native="checkCards(card.id, card.target)"
                            @counterRounds="counterRounds"
                            @calcWins="calcWins"
                            @endGame="endGame"
                            @reset="reset"
                            :Id="card.id"
                            :ImgBack="card.imgBack"
                            :ImgFront="card.imgFront"
                            :Target="card.target"
                            >
                    </card-game>             
            </div>
        </div>
    </div>
</template>

<script>
import HeaderGame from '../header/HeaderGame'
import CardGame from './CardGame'
import {flipCardResetEndGame,flipCardShow,flipCardReset,flipCardDisable} from '../../controllers/methods/flipCard'
import matchCard from '../../controllers/methods/match'
import checkCardDisabled from '../../controllers/methods/checkCardDisabled'



let primeiraCarta = undefined;
let cartasSelecionada = []
let cartasDesablitadas = [];

export default {

  name: 'content-game',
  data () {
    return {
        rounds:0,
        wins:0,
        counter:0
    }
  },
  components:{
    HeaderGame,
    CardGame,
  },
  props:{
      Cards:Array,
      Status:String,
      User:Object
  },
  methods: {
      counterRounds() {          
          this.rounds +=1
      },
      calcWins(){
          this.wins += 1;
      },
      endGame(){
         this.$emit('endGame', this.rounds, this.wins)
         this.$emit('getUser')
      },
      reset(){
          this.rounds = 0;
          this.wins = 0;
          this.counter = 0;
          primeiraCarta = undefined;
          cartasSelecionada = []
          cartasDesablitadas = [];
          flipCardResetEndGame()
          
      },
      checkCards(idCarta, target) {

        if (checkCardDisabled(target, cartasDesablitadas)){
                console.log('essa carta ja foi desabilitada :/');
                                               

        } else{
                
                if (!primeiraCarta) {
                        console.log('Opa, não tinha nenhuma carta selecionada, agora tem :)');
                        flipCardShow(idCarta)
                        primeiraCarta = idCarta
                        cartasSelecionada.push(target)
                                                   

                } else if(primeiraCarta == idCarta){
                    
                    console.log('opa, ja tem uma carta carta cartas Selecionada');
                    
                    console.log('mas voce clicou na mesma duas vezes .-.');
                    
                    primeiraCarta = undefined;
                    
                    cartasSelecionada = [];
                    
                } else if (primeiraCarta != idCarta){
                    
                    flipCardShow(idCarta)
                    
                    console.log('as cartas são diferentes, insira no array de cartas e compare \o/ ');
                    
                    cartasSelecionada.push(target)
                    
                    console.log('aqui esta o seu array das cartas dessa rodada ->', cartasSelecionada);
                    
                    if (matchCard(cartasSelecionada)) {
                            this.calcWins();
                            this.counterRounds()
                            console.log('opa, voce acertou! :)');
                            cartasDesablitadas.push(target)
                            console.log('aqui esta seu array de cartas desabilitadas ->', cartasDesablitadas);
                            flipCardDisable([primeiraCarta, idCarta]);
                            cartasSelecionada = [];
                            primeiraCarta = undefined
                            if (cartasDesablitadas.length == 10) {
                                    this.endGame()
                                    this.reset()
                            }
                    
                    } else{
                            console.log('vish, voce errou :/');
                            this.counterRounds()
                            flipCardReset([primeiraCarta, idCarta])
                            cartasSelecionada = [];
                            primeiraCarta = undefined
                        }
                }
        }
     },
      
    },
    

   
}


</script>

<style lang="scss">
#content {
    position: fixed;
    width: 80%;
    margin-left: 20%;
    display: flex;
    background: #333;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
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
