<template>
    <div class="reviews">
        <div class="container">
        <div class="padding">
            <div class="title__wrapper">
              <h2 class="title reviews__title">
                Recommendations <br> of our clients
                <span class="icon-arrow-left-bottom"></span>
              </h2>
          </div>
          <VueSlickCarousel 
              ref="reviewsCarousel" :arrows="false" :dots="false" :slidesToShow="slidesToShow"
              @afterChange="onChangeCarousel" 
          >
              <div class="slider-item"
                  v-for="data in reviewsList" v-bind:key="data.id"
                  :class="{lastItem: data.id == reviewsList.length}"
              >
                  <div class="slider-item__title">
                      <p class="slider-item__name">{{data.name}}</p>
                      <div class="date-wrapper">
                          <img src="@/assets/calendar.png">
                          <p class="slider-item__date">{{data.date}}</p>
                      </div>
                  </div>
                  <p class="slider-item__text">{{data.text}}</p>
                  <div class="btn more">Read <br> more</div>
              </div>
          </VueSlickCarousel> 
          <div class="slider-controls-wrapper" >
            <div class="dots-wrapper" v-for="data in reviewsList" v-bind:key="data.id">
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
          <img src="@/assets/clients.png" alt="" class="reviews__bg">
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

//custom images for radio button
import RadioDefauilt from "@/assets/design items/radio-btn.svg"
import RadioCheched from "@/assets/design items/radio-btn-checked.svg"

export default {
  name: 'Reviews',
  components: {
    VueSlickCarousel
  },
  props: {
    
  },
  data () {
      return{
          radioBtnIndexChecked : 1, 
          reviewsList: [
              { id: 1, name: 'James Alfie', date: '23.09.2021', 
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam`
              },
              { id: 2, name: 'Saphie Mia', date: '23.09.2021', 
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam`
              },
              { id: 3, name: 'Jack Riley', date: '23.09.2021', 
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam`
              },
              { id: 4, name: 'James Alfie', date: '23.09.2021', 
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam`
              },
              { id: 5, name: 'Saphie Mia', date: '23.09.2021', 
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam`
              },
              { id: 6, name: 'Jack Riley', date: '23.09.2021', 
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam`
              },
          ],
          slidesToShow: window.innerWidth < 750 ? 1 : window.innerWidth < 1024 ? 2 : 3,
      }
  },
  methods: {
    nextSlide(){
      this.$refs.reviewsCarousel.next();
      this.radioBtnIndexChecked ++;
      if (this.radioBtnIndexChecked > this.reviewsList.length)
        this.radioBtnIndexChecked = 1;
    },
    goToSlide(num){
      this.$refs.reviewsCarousel.goTo(num - 1);
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
    resizeEvent(){
      this.slidesToShow = 3;
        if (window.innerWidth < 1024) this.slidesToShow = 2;
        if (window.innerWidth < 750) this.slidesToShow = 1;
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
.reviews{
    z-index: 2;
    background: var(--bg-lighter);
    position: relative;
}
.reviews__bg{
  position: absolute;
  bottom: 175px;
  left: 0;
  z-index: -1;
  max-width: 100%;
}
.title__wrapper{
    position: relative;
    display: block;
    margin-bottom: 60px;
}
.arrow{
    position: absolute;
    bottom: 10%;
    left: 48%;
    width: 14px;
    height: 14px;
}
.slider-item{
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    flex-basis: 33.3%;
    padding: 20px 20px 20px 30px;
    min-height: 350px;
    position: relative;
    display: flex !important;
    flex-direction: column;
}
.lastItem{
    border-right: 1px solid var(--border-color);
}
.slider-item__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.slider-item__name{
    color: #fff;
    font-size: 26px;
    line-height: 35px;
    letter-spacing: 0.04em;
    font-weight: 500;
}
.date-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.date-wrapper img{
    width: 10px;
    height: 10px;
    margin-right: 6px;
}
.slider-item__date{
    font-weight: 300;
    color: #fff;
    font-size: 14px;
    line-height: 35px;
    font-weight: 300;
}
.slider-item__text{
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.04em;
    font-weight: 300;
    color: #A7A7A7;
}
.more{
    width: 68px;
    height: 68px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: flex-end;
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
.dots{
  margin-right: 15px;
  width: 18px;
  height: 18px;
  background-size: cover;
  cursor: pointer;
}
.nextCarouselBtn{
  height: 55px;
  width: 75px;
  cursor: pointer;
}
</style>