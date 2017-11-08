<template>
  <header>
  	<nav>{{titulo}}</nav>
    <counter-game></counter-game>
  </header>
</template>

<script>

import CounterGame from '../content/CounterGame'
export default {
  name: 'header-game',
  data () {
    return {
      titulo: 'Jogo da Memoria '
    }
  },
  components:{
    CounterGame
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
  }
}
</style>
