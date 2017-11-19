<template>
  <header>
  	<nav>
      <h1>{{titulo}}</h1>
      <counter-game :User="User" :Wins="Wins" :Rounds="Rounds"></counter-game>
    </nav>
  </header>
</template>

<script>
import CounterGame from './CounterGame'
export default {
  name: 'header-game',
  data () {
    return {
      titulo: 'Jogo da Memoria '
    }
  },
  props:{
    User:Object,
    Wins:Number,
    Rounds:Number
  },
  components:{
    CounterGame
  }
}
</script>

<style lang="scss">
header{
  width: 100%;
  background: #000;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0,0,0,.2);
  box-shadow: -1px 3px 7px 0px rgba(0,0,0,.1);
  nav{
    width: 90%;
    h1{
      font-size: 22px;
      font-family: arial;
    }
  }
}
</style>
