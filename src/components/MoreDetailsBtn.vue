<template>
    <div class="more-details"
        @mouseover="btnHover"
        @mouseleave="btnHover"
    >
        More details
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="more-details__up-right">
          <path d="M2 1H10V9" :stroke="color" stroke-linecap="square"/>
          <path d="M9 2L1 10" :stroke="color" stroke-linecap="square"/>
        </svg>
    </div>
</template>

<script>

export default {
  name: 'MoreDetailsBtn',
  data () {
      return {
        isArrowHover: false,
        color: '#52A921'
      }
  },
  methods: {
    btnHover() {
        this.isArrowHover = !this.isArrowHover;
        this.color = !this.isArrowHover ? '#52A921' : '#37800E'
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