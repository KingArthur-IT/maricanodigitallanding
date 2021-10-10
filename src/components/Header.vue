<template>
  <header>
    <Menu 
      v-bind:navItems="navItems"
    />
    <div class="header">
      <img src="@/assets/bg_text.png" alt="Maricano" class="header__bg-text">
      <div class="container">
        <VueSlickCarousel 
            ref="carousel" :arrows="false" :dots="false" 
            @afterChange="onChangeCarousel"
        >
          <div class="header__hero" v-for="data in sliderData" v-bind:key="data.id">
              <img :src="data.image" :alt="data.imageAlt" class="header__img">
              <div class="header__info">
                    <h1 class="header__title">{{data.title}}</h1>
                    <p class="header__subtitle">{{data.subtitle}}</p>
                    <div class="more-details">
                      More details
                      <img src="@/assets/design items/arrow-right-up.svg" alt="arrow" class="more-details__up-right">
                    </div>
                  </div>
            </div>
        </VueSlickCarousel> 
        <div class="slider-controls-wrapper" >
          <div class="dots-wrapper" v-for="data in sliderData" v-bind:key="data.id">
            <div class="dots" 
              :style="{ backgroundImage: `url(${getModalRadio(data.id)})` }"
              @click="goToSlide(data.id)"
            ></div>
          </div>
          <img  src="@/assets/design items/slider-btn-right.svg" alt="Next" 
                @click="nextSlide" class="nextCarouselBtn"
          >
        </div>    
      </div>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

//custom images for radio button
import RadioDefauilt from "@/assets/design items/radio-btn.svg"
import RadioCheched from "@/assets/design items/radio-btn-checked.svg"

export default {
  name: 'Header',
  components: {
    Menu, VueSlickCarousel
  },
  props: {
    navItems: Array,
    sliderData: Array
  },
  data () {
      return {
        radioBtnIndexChecked : 1,        
      }
  },
  methods: {
    nextSlide(){
      this.$refs.carousel.next();
      this.radioBtnIndexChecked ++;
      if (this.radioBtnIndexChecked > this.sliderData.length)
        this.radioBtnIndexChecked = 1;
    },
    goToSlide(num){
      this.$refs.carousel.goTo(num);
      this.radioBtnIndexChecked = num;
    },
    getModalRadio(el){
      if (this.radioBtnIndexChecked == el )
        return RadioCheched;
      return RadioDefauilt;
    },
    onChangeCarousel(slideIndex){
        this.radioBtnIndexChecked = slideIndex + 1;
      }
  }
}
</script>

<style scoped>
.header{
  background: var(--bg-lighter);
  min-height: 800px;
  position: relative;
  padding-top: 30px;
}
.header__bg-text{
  position: absolute;
  top: 80px;
  left: 100px;
  z-index: 0;
}
.header__hero{
  position: relative;
  z-index: 2;
  min-height: 750px;
}
.header__img{
  width: 100%;
  position: absolute;
  left: -9%;
  top: 0;
}
.header__info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 30px;
  right: 0;
  color: #fff;
  width: 582px;
}
.header__title{
  font-weight: 900;
  line-height: 80px;
  font-size: 80px;
  margin-bottom: 26px;
}
.header__subtitle{
  font-family: 'Futura New Book';
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: var(--text-color);
}
.more-details{
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: var(--primary-color);
  position: relative;
  align-self: flex-end;
  width: 120px;
  cursor: pointer;
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
.slider-controls-wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 15%;
  right: 10%;
}
.dots-wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.dots{
  margin-right: 15px;
  width: 18px;
  height: 18px;
  background-size: cover;
}
.nextCarouselBtn{
  height: 55px;
}
</style>
