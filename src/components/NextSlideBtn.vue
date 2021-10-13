<template>
    <img    @mouseover="btnHover"
            @mouseleave="btnHover"                        
            :src="nextBtn[boolToInt(isNextSlideBtnHover)]" 
            alt="Next" 
            class="nextCarouselBtn"
            @click="$emit('nextSlideEvent')"
    >
</template>

<script>
import sliderNextBtn from "@/assets/design items/slider-btn-right.svg"
import sliderNextBtnHover from "@/assets/design items/slider-btn-right_hover.svg"

export default {
  name: 'NextSlideBtn',
  data () {
      return {
        isNextSlideBtnHover: false,
        nextBtn: [sliderNextBtn, sliderNextBtnHover]     
      }
  },
  methods: {
    boolToInt(bool){
        return bool ? 1 : 0;
    },
    btnHover() {
        this.isNextSlideBtnHover = !this.isNextSlideBtnHover;
    },
  }
}
</script>

<style scoped>
.nextCarouselBtn{
  height: 55px;
  cursor: pointer;
}
</style>