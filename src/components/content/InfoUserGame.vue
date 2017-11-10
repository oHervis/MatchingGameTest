<template>
    <div id="userModal" v-if="showModal">
        <div class="contentModal">
            <h1>Olá, seja bem vindo ao jogo da Memória</h1>
            <p>Para Começar, digite o seu nome :)</p>
            <div class="actions">
                <input v-bind:class="{ 'errorInput': showError}" type="text" placeholder="Ex: João da silva" v-model="nameUser">
                <p class="error" v-show="showError">Preencha seu nome Corretamente</p>
                <button @click="getInfoUser">Começar o Jogo</button>
            </div>
        </div> 
    </div>
</template>

<script>
    
import Player from '../../controllers/classes/Players'
export default {

  name: 'info-user',
  data () {
    return {
        nameUser:'',
        showModal:true,
        showError: false,
    }
  },
  props:{
      user:Object,
      render:Object,
      rank:Object
  },
  methods:{
      getInfoUser(){
        if(this.nameUser.length > 3){
            this.user.setPlayerName = this.nameUser
            this.render.setConditionRender =  true
            this.rank.setUserRanking = this.user
            this.showError = false
            this.showModal = false
            
        }else{
            this.showError = true
        }
      }
  }
  
  
 
}
</script>

<style lang="scss">
    $displayDefault: flex;
    #userModal{
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
