<template>
  <header>
  	<nav>
      <h1>{{titulo}}</h1>
      <counter-game></counter-game>
      <shuffle-game></shuffle-game>
    </nav>
  </header>
</template>

<script>

import CounterGame from '../content/CounterGame'
import ShuffleGame from '../content/ShuffleGame'

export default {
  name: 'header-game',
  data () {
    return {
      titulo: 'Jogo da Memoria '
    }
  },
  components:{
    CounterGame,
    ShuffleGame
  }
}
</script>

<style lang="scss">
header{
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  nav{
    width: 90%;
    h1{
      font-size: 22px;
      font-family: arial;
    }
  }
}
</style>
