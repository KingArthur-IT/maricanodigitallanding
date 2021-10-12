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
              <div class="header__info">
                    <h1 class="title header__title">{{data.title}}</h1>
                    <p class="header__subtitle">{{data.subtitle}}</p>
                    <div class="more-details">
                      More details
                      <img src="@/assets/design items/arrow-right-up.svg" alt="arrow" class="more-details__up-right">
                    </div>
              </div>
              <img :src="data.image" :alt="data.imageAlt" class="header__img">
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
      this.$refs.carousel.goTo(num - 1);
      this.radioBtnIndexChecked = num - 1;
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
  margin-bottom: 26px;
}
.header__subtitle{
  font-family: 'Futura New Book';
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: var(--text-color);
  margin-bottom: 10px;
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
  z-index: 10;
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
  bottom: 20%;
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
  cursor: pointer;
}
.nextCarouselBtn{
  height: 55px;
  cursor: pointer;
}
@media screen and (max-width: 1300px){
  .header__bg-text{width: 80%; }
  .header__img{ top: 6%; }
  .header__info{ width: 60%; }
  .slider-controls-wrapper{ right: 20%; }
  .header{min-height: 700px; }
  .header__hero{min-height: 700px; }
}
@media screen and (max-width: 1100px){
  .header__img{ top: auto; bottom: 0; }
  .header__hero{min-height: 650px; }
}
@media screen and (max-width: 1000px){
  .header{  padding-top: 0px; min-height: 600px;}
  .header__hero{min-height: 600px; }
  .header__title{ margin-bottom: 15px; }
  .slider-controls-wrapper{ bottom: 10%; }
}
@media screen and (max-width: 900px){
  .header__info{width: 100%; position: relative;}
  .header__img{position: relative;}
  .slider-controls-wrapper{ right: 10%; }
  .header__bg-text{top: 230px; }
}
@media screen and (max-width: 700px){
  .slider-controls-wrapper{ bottom: 0; left: 50%;}
  .header__img{width: 100vw;}
  .header__hero{min-height: 775px;}
  .header{min-height: 630px;}
}
@media screen and (max-width: 600px){
  .header__bg-text{left: 20px; }
  .header__img{width: 120vw;}
  .header__hero{min-height: 660px;}
  .slider-controls-wrapper{left: auto;}
}
@media screen and (max-width: 450px){
  .header__hero{min-height: 605px;}
}
@media screen and (max-width: 375px){
  .header__img{width: 115vw;}
  .header__subtitle{
    line-height: 22px;
    font-size: 14px;
  }

}
</style>
