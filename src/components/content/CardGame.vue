<template>
  <div  :id="idElement" @click="showCard(target, idElement)">
        <div class="flip-container">
            <div class="flipper">
                <div class="front">
                    <img :src="imgFront" alt="teste"/>
                </div>
                <div class="back">
                    <img :src="imgBack" alt="teste"/>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

    let cardSelected = []
    let arrElements = []
    let numberHits = 0;
    const flipCardShow = card => {

    let element = card.querySelector('.flipper')
    element.classList.add('rotate')
    }
    const flipCardReset = arrCard => {
    setTimeout(function () {
        arrCard.forEach((card) => {
        let element = card.querySelector('.flipper')
        element.classList.remove('rotate');
        })
    }, 500);

    }
    const flipCardDisable = arrCard => {

    arrCard.forEach(elemento => {
        elemento.classList.add('disable');
    })



    }
    



    export default {
            name: 'card-game',
            data() {
                return {
                cardSelected,
                
                }
            },
            props: {
                imgBack: String,
                imgFront: String,
                target: String,
                idElement: String,
                hits:Object,
                status:String

            },
            methods: {
                showCard(data, nameElement) {                
                    let element = document.getElementById(`${nameElement}`)
                    this.checkCard(data, element)
                                        
                },
                checkCard(data, el){

                        arrElements.push(el)

                        flipCardShow(el);

                        if (cardSelected.length < 1) {

                            cardSelected.push(data)

                        } else if (cardSelected[0] == data && arrElements[0] != el) {
                            this.checkEndGame();
                            
                            
                            this.hits.setPlayerHits = numberHits += 1; 
                            flipCardDisable(arrElements);
                            arrElements = [];
                            cardSelected = []

                        } else {
                            flipCardReset(arrElements);
                            arrElements = [];
                            cardSelected = []
                        }

                },
                checkEndGame(){
                    let element = document.querySelectorAll('.gameCard')
                    element.forEach(item=>{
                        if(item.classList.contains('disable')){
                            this.status.setStatusGame = 'END'
                        }
                    })
                    
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
