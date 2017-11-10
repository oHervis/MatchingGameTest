<template>
  <div id="app">
    <info-user-game 
              :rank="ranking" 
              :render="gameStatus" 
              :user="playerData">
    </info-user-game>
    <modal-end-game 
              :rank="ranking" 
              :status="gameStatus" 
              :user="playerData">
    </modal-end-game>
    <sidebar-game
              :rank="ranking" 
              :render="gameStatus" 
              :user="playerData">
    </sidebar-game>
    <section>
      <header-game 
              :render="gameStatus">
      </header-game>
      <content-game
              :status="gameStatus"              
              :user="playerData">
              </content-game>
    </section>
  </div>
</template>

<script>

import HeaderGame from './components/header/HeaderGame'
import SidebarGame from './components/sidebar/SidebarGame'
import ContentGame from './components/content/ContentGame'
import InfoUserGame from './components/content/InfoUserGame'
import ModalEndGame from './components/content/ModalEndGame'


import Player from './controllers/classes/Players'
import Render from './controllers/classes/Render'
import Ranking from './controllers/classes/Ranking'
import GameStatus from './controllers/classes/GameStatus'
import storage from './controllers/metodos/storage'


export default {
  name: 'app',
  data () {
    return {
      playerData: new Player('',0,0),
      renderGame: new Render(false),
      ranking: new Ranking({}),
      gameStatus: new GameStatus('INIT', {}),

      

    }
  },
  components:{
    HeaderGame,
    SidebarGame,
    ContentGame,
    InfoUserGame,
    ModalEndGame
  },
  methods:{
    getUsers(){
      let lastUsers = localStorage.getItem('Users');
      console.log(lastUsers);      
        if (lastUsers) {
            this.ranking.setUserRanking = JSON.parse(lastUsers)
        }
    }
  },
  created:function(){
    this.getUsers()
  }
}
</script>

<style lang="scss">
@import 'assets/default.scss';
#app {
     width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  section{
    width: 80%;
    margin-left: 20%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }
}

</style>
