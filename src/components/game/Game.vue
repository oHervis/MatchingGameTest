<template>
  <div class="wrapper">
      <sidebar-game
                :Users="userList" :Status="statusGame">
      </sidebar-game>
      <content-game
                @getUser="getUser"
                @endGame="endGame" 
                :Cards="cardList"
                :Status="statusGame"
                :User="user">        
      </content-game>
      <modal-info-player
                :Status="statusGame"
                :User="user"
                @progressGame="progressGame">
      </modal-info-player>
      <modal-end-game
                :Status="statusGame"
                :Info="info"
                @initGame="initGame">
      </modal-end-game>



    
  </div>
</template>

<script>

import SidebarGame from '../sidebar/SidebarGame'
import ContentGame from '../content/ContentGame'
import ModalInfoPlayer from '../content/ModalInfoPlayer'
import ModalEndGame from '../content/ModalEndGame'

import Player from '../../controllers/classes/Player'
import getCards from '../../controllers/methods/getCards'
import ranking from '../../controllers/methods/ranking'
import {getStorage, setStorage} from '../../controllers/methods/storage'
import {initShowCards} from '../../controllers/methods/flipCard'
import shuffleCards from '../../controllers/methods/shuffleCards'
export default {
  name: 'Game',
  data () {
    return {
      userList:[],
      cardList:getCards(),
      statusGame:'',
      user: new Player('Player'),
      info:{}
  
    }
  },
  components:{
      SidebarGame,
      ContentGame,
      ModalInfoPlayer,
      ModalEndGame
  },
  methods:{
    initGame(){
      this.statusGame = 'INIT'      
    },
    progressGame(){
      this.statusGame = 'PROGRESS'
      initShowCards(shuffleCards(this.cardList))
    },
    endGame(rnd, win){
      this.statusGame = 'END'
      this.info = {
        name: this.user.getName,
        rounds: rnd,
        wins: win
      }      
      setStorage(this.info)

    },
    getUser(){
      let lastUsers = getStorage()     

      if (lastUsers) {           
        this.userList = lastUsers
           this.checkRank()     
      }
    },
    checkRank(){
      this.userList = ranking(this.userList)

    }
  },
  created:function(){
    this.initGame()
    this.getUser()
  }
}
</script>

<style lang="scss">
.wrapper{
  display: flex;
  flex-wrap: wrap;
  width: 100%;

}
</style>

