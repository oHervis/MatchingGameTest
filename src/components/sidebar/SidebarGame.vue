<template>
  <aside>

    <h2>Ranking Game</h2>
  	<div class="user-rank">
      <ul>
        <li
          v-for="item in UserList" :key="item.id">
          {{ item._name }}
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
      UserList : [this.user]
    }
  },
  props:{
    user: Object,
    render:Object,
    rank:Object
  }
 
}
</script>

<style lang="scss">
$borderBottom : 1px solid rgba(255,255,255,.1);
aside {
    width: 20%;
    background: #3F51B5;
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
          width: 60%;
          font-size: 18px;
          border-bottom: $borderBottom;
        }
      }
    }
}
</style>
