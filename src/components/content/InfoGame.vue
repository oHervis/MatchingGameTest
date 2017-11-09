<template>
    <div class="info">
        <div class="counter">
            <p>Contador de Rodadas</p>
            <h2>{{rounds}}</h2>
        </div>
        <div class="actions">
            <button>Reordenar as Cartas</button>
        </div>
    </div> 
</template>

<script>
    
  
export default {

  name: 'info-game',
  data () {
    return {
        
    }
  },
  props:{
      rounds:Number
  }
  
 
}
</script>

<style lang="scss">
.info{
     width: 90%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .counter{
        padding: 10px;
        text-align: center;
    }
    .actions{
        margin: 10px;
        button{
            background-color: #4c61d3;
            padding: 10px;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
            width: 15em;
            font-size: 14px;
            border: none;
            &:hover{
                background: #3F51B5;
            }&:focus {
                outline: -webkit-focus-ring-color auto 0px;
            }

        }
    }
}

</style>
