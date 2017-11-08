<template>
  <div id="cards">
        <div class="flip-container">
            <div class="flipper">
                <div class="front">
                    <img :src="imgFront" alt="teste"/>
                    {{name}}
                </div>
                <div class="back">
                    <img :src="imgBack" alt="teste"/>
                    <p>back</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>


export default {
    name: 'counter-game',
    data () {
    return {
      contador:10,
    }
  },
    props:{
        imgBack:String,
        imgFront:String,
        name:String,
        
    }
}
</script>

<style lang="scss">
.flip-container {
    perspective: 1000px;
    width: 5em;
	height: 10em;
    &.flip-container:hover .flipper,{
            transform: rotateY(180deg);
    }
    
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
