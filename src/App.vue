<template>
  <game></game>
</template>

<script>
import Game from './components/game/Game'
import './assets/default.scss'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Game,
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
  body,
html {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  font-family: arial;
}


}
</style>
