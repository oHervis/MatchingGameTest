<template>
  <div id="app">
    <sidebar-game></sidebar-game>
    <section>
      <header-game></header-game>
      <content-game></content-game>
    </section>
  </div>
</template>

<script>
import HeaderGame from './components/header/HeaderGame'
import SidebarGame from './components/sidebar/SidebarGame'
import ContentGame from './components/content/ContentGame'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HeaderGame,
    SidebarGame,
    ContentGame
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  section{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }
}

</style>
