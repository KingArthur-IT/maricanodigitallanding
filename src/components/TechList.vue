<template>
    <div class="software">
        <div class="container">
            <div class="software__title-wrapper">
                <h3 class="software__title">
                    List of Software Technologies we use
                    <span class="icon-arrow-left-bottom"></span>
                </h3>
            </div>
            <div class="list" v-if="windowWidth > showSliderBrakepoint">
                <div class="list__item" v-for="data in dataList" v-bind:key="data.id">
                    <div><img :src="data.image" :alt="data.text"></div>
                    <p>{{data.text}}</p>
                </div>
            </div>
            <div class="slider-wrapper" v-if="windowWidth <= showSliderBrakepoint">
                <VueSlickCarousel 
                    ref="techListCarousel" :arrows="false" :dots="false" :slidesToShow="slidesToShow"
                    @afterChange="onChangeCarousel"
                >
                    <div class="list__item" v-for="data in dataList" v-bind:key="data.id">
                        <div><img :src="data.image" :alt="data.text"></div>
                        <p>{{data.text}}</p>
                    </div>
                </VueSlickCarousel> 
            </div>
            <div class="slider-controls-wrapper" v-if="windowWidth <= showSliderBrakepoint">
                <div class="dots-wrapper" v-for="data in dataList" v-bind:key="data.id">
                    <SliderDot 
                        v-bind:size="18"
                        v-bind:color="`#D5D5D5`"
                        v-bind:colorHover="`#52A921`"
                        v-bind:isChecked="radioBtnIndexChecked == data.id"
                        @clickEvent="goToSlide(data.id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderDot from '@/components/SliderDot.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import PhpIcon from "@/assets/tech list/php.png"
import MySqlIcon from "@/assets/tech list/mysql.png"
import NodeJSIcon from "@/assets/tech list/nodejs.png"
import ReactIcon from "@/assets/tech list/react.png"
import FigmaIcon from "@/assets/tech list/figma.png"
import AfterEffectsIcon from "@/assets/tech list/aftereffects.png"

export default {
  name: 'TechList',
  components: {
    VueSlickCarousel, SliderDot
  },
  props: {
      
  },
  data () {
      return {
        //for sliser
        radioBtnIndexChecked : 1,  
        slidesToShow: window.innerWidth < 600 ? 2 : window.innerWidth < 775 ? 3 : 4,
        //for addaptive
        windowWidth: window.innerWidth,
        showSliderBrakepoint: 950,
        dataList: [
            {id: 1, image: PhpIcon, text: 'PHP'},
            {id: 2, image: MySqlIcon, text: 'MySQL'},
            {id: 3, image: NodeJSIcon, text: 'NodeJS'},
            {id: 4, image: ReactIcon, text: 'React'},
            {id: 5, image: FigmaIcon, text: 'Figma'},
            {id: 6, image: AfterEffectsIcon, text: 'AfterEffects'},
        ]
      }
  },
  methods: {
    nextSlide(){
      this.$refs.techListCarousel.next();
      this.radioBtnIndexChecked ++;
      if (this.radioBtnIndexChecked > this.dataList.length)
        this.radioBtnIndexChecked = 1;
    },
    goToSlide(num){
      this.$refs.techListCarousel.goTo(num - 1);
      this.radioBtnIndexChecked = num - 1;
    },
    onChangeCarousel(slideIndex){
        this.radioBtnIndexChecked = slideIndex + 1;
    },
    resizeEvent(){
        this.windowWidth = window.innerWidth;
        if (window.innerWidth <= 950) this.slidesToShow = 4;
        if (window.innerWidth < 775) this.slidesToShow = 3;
        if (window.innerWidth < 600) this.slidesToShow = 2;
    },
  },
    created() {
        window.addEventListener("resize", this.resizeEvent);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeEvent);
    },
}
</script>

<style scoped>
.software{
    z-index: 5;
    background: var(--bg-lighter);
    position: relative;
}
.software__title-wrapper{
    display: flex;
    align-items: baseline;
    margin-bottom: 50px;
}
.software__title-wrapper img{
    width: 14px;
    height: 14px;
}
.software__title{
    font-size: 60px;
    line-height: 70px;
    color: #fff;
    font-weight: 400;
    margin-right: 30px;
}
.list,.slider-wrapper
{
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 33px 0;
}
.list
{
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 33px 0;
    display: flex;
    justify-content: space-between;
}
.list__item{
    display: flex;
    flex-direction: column;
    flex-basis: 15.3%;
}
.list__item div{
    background: var(--bg-darker);
    height: 90px;
    margin-bottom: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.list__item p{
    font-family: 'Futura New Book';
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    text-align: center;
    font-weight: 400;
}
.slider-controls-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}
.dots-wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
}
@media screen and (max-width: 950px){
    .list__item div{
        margin-right: 20px;
    }
}
@media screen and (max-width: 1300px){
    .software__title{font-size: 50px; }
}
@media screen and (max-width: 750px){
    .software__title{ font-size: 42px; line-height: 55px;  }
}
@media screen and (max-width: 550px){
  .software__title{font-size: 38px; line-height: 45px;}
}
@media screen and (max-width: 400px){
  .software__title{font-size: 26px; line-height: 35px;}
}
</style>