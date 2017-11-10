<template>
  <div id="app">
    <info-user-game 
              :rank="ranking" 
              :render="renderGame" 
              :user="playerData">
    </info-user-game>
    <sidebar-game
              :rank="ranking" 
              :render="renderGame" 
              :user="playerData">
    </sidebar-game>
    <section>
      <header-game 
              :render="renderGame">
      </header-game>
      <content-game
              :status="gameStatus"
              :render="renderGame" 
              :user="playerData"></content-game>
    </section>
  </div>
</template>

<script>
import HeaderGame from './components/header/HeaderGame'
import SidebarGame from './components/sidebar/SidebarGame'
import ContentGame from './components/content/ContentGame'
import InfoUserGame from './components/content/InfoUserGame'
import Player from './controllers/classes/Players'
import Render from './controllers/classes/Render'
import Ranking from './controllers/classes/Ranking'
import GameStatus from './controllers/classes/GameStatus'
import SendStorage from './controllers/classes/SendStorage'
export default {
  name: 'app',
  data () {
    return {
      playerData: new Player('',0,0),
      renderGame: new Render(false),
      ranking: new Ranking([]),
      gameStatus: new GameStatus('INIT'),
      storage: new SendStorage({})

    }
  },
  components:{
    HeaderGame,
    SidebarGame,
    ContentGame,
    InfoUserGame
  }
}
</script>

<style lang="scss">
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
