<template>
  <div :name="idElement" id="cards" @click="showCard(target, idElement)">
        <div class="flip-container">
            <div class="flipper">
                <div class="front">
                    {{target}}
                    <img :src="imgFront" alt="teste"/>
                </div>
                <div class="back">
                    <img :src="imgBack" alt="teste"/>
                    <p>{{target}}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

let cardSelected = []
let arrElements = []
const flipCardShow = (card) =>{
    card.classList.add('rotate')
}
const flipCardReset = (card)=>{
    card.classList.add('disable')
}
const disableCard = (arrCard) =>{
    arrCard.forEach((elemento)=>{
        elemento.classList.add('disable');
    })
    arrElements = [];
}
const checkCard = (data, el, id) =>{
        console.log(el.name);
        let element = el.querySelector('.flipper')
        
        arrElements.push(el)

        flipCardShow(element);
        
        if (cardSelected.length < 1 ) {
                
                cardSelected.push(data)
                
        } 
        else if(cardSelected[0] == data ){
            
            console.log('Acertou');
            
            disableCard(arrElements);
            
            cardSelected = []
        }
    
}


export default {
    name: 'counter-game',
    data () {
    return {
      cardSelected,
    }
  },
    props:{
        imgBack:String,
        imgFront:String,
        target:String,
        idElement:String
        
    },
    methods:{
        showCard:(data, nameElement)=>{
                let element = document.querySelector(`[name="${nameElement}"]`)
                checkCard(data, element, nameElement)
                
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
    width: 5em;
	height: 10em;
    
    .flipper {
        transition: 0.6s;
        transform-style: preserve-3d;
        position: relative;
        .front,.back {
            width: 5em;
            height: 10em;
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;            
            img{
                width: 100%;
            }
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
