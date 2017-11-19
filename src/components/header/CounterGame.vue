<template>
    <div class="info">        
        <div class="counter">
            <p> Jogador: <span> {{User.getName}} </span> </p>
            <p> Wins: <span> {{Wins}} </span> </p>
            <p> Rounds: <span> {{Rounds}} </span> </p>
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
      Rounds:Number,
      Wins:Number,
      User:Object
  }
  
 
}
</script>

<style lang="scss">
.info{
     width: 90%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .counter{
         padding: 10px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    p{
        margin: 10px;
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
