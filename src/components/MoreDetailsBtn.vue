<template>
    <div class="more-details"
        @mouseover="btnHover"
        @mouseleave="btnHover"
    >
        More details
        <img :src="arrowIcon[boolToInt(isArrowHover)]" 
             alt="arrow" class="more-details__up-right"
        >
    </div>
</template>

<script>
import Arrow from "@/assets/design items/arrow-right-up.svg"
import ArrowHover from "@/assets/design items/arrow-right-up_hover.svg"

export default {
  name: 'MoreDetailsBtn',
  data () {
      return {
        isArrowHover: false,
        arrowIcon: [Arrow, ArrowHover]     
      }
  },
  methods: {
    boolToInt(bool){
        return bool ? 1 : 0;
    },
    btnHover() {
        this.isArrowHover = !this.isArrowHover;
    },
  }
}
</script>

<style scoped>
.more-details{
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: var(--primary-color);
  position: relative;
  align-self: flex-end;
  width: 120px;
  cursor: pointer;
  z-index: 15;
}
.more-details:hover{
  color: var(--primary-hover-color);
}
.more-details__up-right{
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  right: 0;
}
</style>