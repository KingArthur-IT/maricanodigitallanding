<template>
  <header>
    <Menu 
      v-bind:navItems="navItems"
      v-bind:menuIcon="menuIcon"
      @showMenuEvent="showMenuMethod"
      @showThankForm="showThankFormEvent"
    />
    <div class="mobileMenu" :class="{showMenu: isMenuVisible}">
        <div class="container"> 
              <ul class="mobileMenu__wrapper">
                  <li class="mobileMenu__item"
                      v-for="navItem in this.navItems" v-bind:key="navItem"
                  >
                      <a class="mobileMenu__link"  :href="`#${navItem}`" >{{navItem}}</a>
                  </li>
              </ul>
              <button class="btn btn-rect menu__btn"
                @click="showThankFormEvent"
              >
                  Back call
              </button>
        </div>
    </div>
    <div class="header" v-if="isHeaderVisible">
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
                    <MoreDetailsBtn />
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
          <NextSlideBtn 
            @nextSlideEvent="nextSlide"
          />
        </div>    
      </div>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu.vue'
import MoreDetailsBtn from '@/components/MoreDetailsBtn.vue'
import NextSlideBtn from '@/components/NextSlideBtn.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

//menu icons
import MenuIcon from '@/assets/design items/menu.svg'
import CrossIcon from '@/assets/design items/cross.svg'

//custom images for radio button
import RadioDefauilt from "@/assets/design items/radio-btn.svg"
import RadioCheched from "@/assets/design items/radio-btn-checked.svg"

export default {
  name: 'Header',
  components: {
    Menu, VueSlickCarousel, NextSlideBtn, MoreDetailsBtn
  },
  props: {
    navItems: Array,
    sliderData: Array,
    isHeaderVisible: Boolean
  },
  data () {
      return {
        radioBtnIndexChecked : 1,   
        isMenuVisible: false,
        menuIcon: MenuIcon,     
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
    },
    showMenuMethod(){
      this.isMenuVisible = !this.isMenuVisible;
      if (this.isMenuVisible)
        this.menuIcon = CrossIcon;
      else this.menuIcon = MenuIcon;
    },
    showThankFormEvent(){
      this.$emit('showThankForm');
      this.isMenuVisible = false;
      if (this.isMenuVisible)
        this.menuIcon = CrossIcon;
      else this.menuIcon = MenuIcon;
    },
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
  left: 0;
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

.mobileMenu{
  background: var(--bg-lighter);
  position: absolute;
  z-index: 20;
  width: 100%;
  min-height: 100vh;
  transform: translateY(-120vh);
  transition: all 0.5s ease-in-out;
  opacity: 0;
}
.showMenu{
  transform: translateY(0);
  opacity: 1;
}
.mobileMenu__wrapper{
  list-style: none;
}
.mobileMenu__link{
    text-decoration: none;
    color: #fff;
    font-size: 40px;
    line-height: 80px;
    position: relative;
}
.mobileMenu__link:after{
    content: '';
    position: absolute;
    height: 7px;
    width: 7px;
    background: var(--primary-color);
    border-radius: 50%;
    top: 50%;
    right: -30px;
    opacity: 0;
    transition: all 0.1s ease-in-out;
    transform: scale(0);
}
.mobileMenu__link:hover{
    color: var(--primary-color);
}
.mobileMenu__link:hover:after{
    opacity: 1; transform: scale(1);
}
.menu__btn{
    width: 350px;
    height: 55px;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    margin-top: 30px;
}
@media screen and (max-width: 400px){
  .menu__btn{ width: 100%; }
  .mobileMenu__link{font-size: 38px; }
}
</style>
