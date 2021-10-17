<template>
    <section class="portfolio padding">
        <div class="container">
            <h2 class="title portfolio__title">Portfolio</h2>
                <VueSlickCarousel 
                    ref="portfolioCarousel" :arrows="false" :dots="false" :slidesToShow="slidesToShow"
                    @afterChange="onChangeCarousel"
                >
                    <div class="slider__item"
                        v-for="data in dataList" v-bind:key="data.id"
                    >
                        <div class="slider__content">
                            <div class="slider__text-content">
                                <p class="slider__direction">{{data.direction}}</p>
                                <p class="slider__prj-name">
                                     {{data.description}}<span> {{data.name}}</span>
                                </p>
                            </div>
                            <img :src="data.image" :alt="data.imageAlt">
                            <div class="btn more">See <br> project</div>
                        </div>
                    </div>
                </VueSlickCarousel> 
                <div class="slider-controls-wrapper" >
                <div class="dots-wrapper" v-for="data in dataList" v-bind:key="data.id">
                    <SliderDot 
                        v-bind:size="18"
                        v-bind:color="`#D5D5D5`"
                        v-bind:colorHover="`#52A921`"
                        v-bind:isChecked="radioBtnIndexChecked == data.id"
                        @clickEvent="goToSlide(data.id)"
                    />
                </div>
                <NextSlideBtn 
                    @nextSlideEvent="nextSlide"
                />
                </div>
        </div>
    </section>
</template>

<script>
import NextSlideBtn from '@/components/NextSlideBtn.vue'
import SliderDot from '@/components/SliderDot.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Portfolio',
  components: {
    VueSlickCarousel, NextSlideBtn, SliderDot
  },
  props: {
      dataList: Array
  },
  data () {
      return {
        radioBtnIndexChecked : 1,  
        slidesToShow: window.innerWidth < 775 ? 1 : window.innerWidth < 1100 ? 2 : 3
      }
  },
  methods: {
    nextSlide(){
      this.$refs.portfolioCarousel.next();
      this.radioBtnIndexChecked ++;
      if (this.radioBtnIndexChecked > this.dataList.length)
        this.radioBtnIndexChecked = 1;
    },
    goToSlide(num){
      this.$refs.portfolioCarousel.goTo(num - 1);
      this.radioBtnIndexChecked = num - 1;
    },
    onChangeCarousel(slideIndex){
        this.radioBtnIndexChecked = slideIndex + 1;
    },
    setEqualHeightToSlider(){
        let minHeight = 0;
        let elements = document.getElementsByClassName('slider__text-content');
        elements.forEach(el => {
            minHeight = el.clientHeight > minHeight ? el.clientHeight : minHeight;
        });
        elements.forEach(el => {
            el.style.minHeight = minHeight + 'px';
        });
    },
    resizeEvent(){
        this.slidesToShow = 3;
        if (window.innerWidth < 1100) this.slidesToShow = 2;
        if (window.innerWidth < 775) this.slidesToShow = 1;

        this.setEqualHeightToSlider();        
    },
  },
    created() {
        window.addEventListener("resize", this.resizeEvent);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeEvent);
    },
    mounted(){
        this.setEqualHeightToSlider(); 
    }
}
</script>

<style scoped>
.portfolio{
    background: var(--bg-lighter);
}
.portfolio__title{
    margin-bottom: 26px;
}
.slider{
    display: flex;
    justify-content: space-between;
}
.slider__item{
    padding: 0 10px 40px;
}
.slider__content{
    background: var(--bg-darker);
    padding: 21px;
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}
.slider__direction{
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #D9D9D9;
    margin-bottom: 12px;
}
.slider__prj-name{
    font-family: 'Futura New Book';
    font-size: 35px;
    line-height: 38px;
    letter-spacing: 0.04em;
    color: #fff;
    margin-bottom: 30px;
    min-height: 80px;
}
.slider__prj-name span{
    font-family: 'Futura New';
    font-weight: 400;
}
.more{
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 97px;
    height: 97px;
    border-radius: 50%;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translateY(30%);
    font-weight: 500;
}
.slider-controls-wrapper{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 25px;
}
.dots-wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nextCarouselBtn{
  height: 55px;
  width: 75px;
  cursor: pointer;
}
</style>