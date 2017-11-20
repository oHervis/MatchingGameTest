<template>
    <div id="endModal" v-show="Status == 'END'">
        
        <div class="contentModal">        
            <h1>Fim de jogo {{Info.name}}</h1>
            <p>Seu Placar</p>
            <div>
                <p>Rodadas  <span>{{Info.rounds}}</span></p>
                <p>Acertos  <span>{{Info.wins}}</span></p>
            </div>
            <div class="actions">
                <button @click="newGame">Novo Jogo</button>
            </div>
        </div> 
    </div>
</template>

<script>
    

export default {

  name: 'modal-end-game',
  data () {
    return {
        statusGame:this.status,        
    }
  },
  props:{
      Status:String,
      Info:Object
      },
  methods:{
         newGame(){
             this.$emit('initGame')
          }
  }
 

}
  
</script>

<style lang="scss">
    $displayDefault: flex;
    #endModal{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;
        background: rgba(0,0,0,.3);
        display: $displayDefault;
        flex-wrap: wrap;
        justify-content: center;
        .contentModal{
                width: 70%;
                height: 70%;
                display: $displayDefault;
                justify-content: center;
                align-content: flex-start;
                flex-wrap: wrap;
                margin-top: 100px;
                text-align: center;
                background: #171717;
                color:#fff;
                box-shadow: 0px 4px 7px rgba(0,0,0,.2);
                h1,p{
                    width: 100%;
                    
                }
                div{
                    width: 100%;
                }
                .actions{
                    width: 70%;
                    display: $displayDefault;
                    flex-wrap: wrap;
                    justify-content: center;
                    justify-content: center;
                    input{                        
                        border: none;
                        color: #fff;
                        width: 100%;
                        background: transparent;
                        border-bottom: 1px solid rgba(255,255,255,.3);
                        margin: 50px;
                        font-size: 50px;
                        &:focus{
                                outline: -webkit-focus-ring-color auto 0px;

                        }
                    }
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
                    .error{
                        color:#f32616;
                    }
                    .errorInput{
                        border-bottom: 1px solid #f32616;
                    }

                }
        }
    }

</style>
