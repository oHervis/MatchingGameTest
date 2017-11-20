<template>
  <aside>
    <h2>Ranking Game</h2>
  	<div class="user-rank">
      <ul v-if="Status == 'PROGRESS'">
        <li v-for="item in Users" :key="item.id" >
          <p>{{ item.name }} | {{item.wins}}/{{item.rounds}}</p> 
        </li>
      </ul>
    </div>
    </aside>
</template>

<script>
export default {
  name: 'header-game',
  data () {
    return {
      
    }
  },
  props:{
      Users:Array,
      Status:String
  }
}
  
</script>

<style lang="scss">
$borderBottom : 1px solid rgba(255,255,255,.1);
aside {
    width: 20%;
    overflow-y: auto;
    background: #2c373c;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    justify-content: center;
    h2{
      color: #fff;
    }    
    .user-rank{
      color: #fff;
      width: 100%;
      ul{
        list-style-type: none;
        li{
          padding: 5px;
          width: 80%;
          font-size: 18px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          border-bottom: $borderBottom;
          p{
            width: auto;
          }
        }
      }
    }
}
</style>
