<template>
  <div  :id="Id" class="targetDisable">
        <div class="flip-container">
            <div class="flipper">
                <div class="front">
                    <img :src="ImgFront" alt="teste"/>
                </div>
                <div class="back">
                    <img :src="ImgBack" alt="teste"/>
                </div>
            </div>
        </div>
  </div>
</template>

<script>    
    export default {

            name: 'card-game',
            data() {
                return {
                                
                }
            },
            props: {
                Id: String,
                ImgFront: String,
                ImgBack: String,
                Target: String,              

            },
            methods: {
                checkEndGame(){
                    
                    let element = document.querySelectorAll('.targetDisable')                 
                    
                    element = Array.prototype.slice.call(element)                   
                    
                    let check = element.every(item=>{
                                                
                        return item.classList.contains('disable')
                    })
                     if (check) {
                            
                            this.$emit('endGame')
                            this.resetGame()
                     }
                    
                 },
                 resetGame(){
                     console.log(true);
                        let element = document.querySelectorAll('.targetDisable')                 
                        
                        element = Array.prototype.slice.call(element)
                        
                        element.forEach(item=>{
                            item.classList.remove('disable');
                            item.querySelector('.rotate').classList.remove('rotate')
                            
                        })
                        this.$emit('reset')
                 }
                }
                

            }
          
    
    </script>

    <style lang="scss">
    .rotate{
    transform: rotateY(180deg); 
    }
    .disable{
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }
    .flip-container {
        perspective: 1000px;
        width: 70%;
        height: auto;
        .flipper {
            transition: 0.6s;
            transform-style: preserve-3d;
            position: relative;
            .front,.back {                
                backface-visibility: hidden;
                position: absolute;
                top: 0;
                left: 0;            
                img{
                    width: 100%;            }
            }
            .front {
                z-index: 2;
                transform: rotateY(0deg);
            }
            .back {
                transform: rotateY(180deg);
            }
        }
}

</style>
