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
      <HeaderSlider 
        v-bind:sliderData="sliderData"
      />
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu.vue'
import HeaderSlider from '@/components/HeaderSlider.vue'

//menu icons
import MenuIcon from '@/assets/design items/menu.svg'
import CrossIcon from '@/assets/design items/cross.svg'

export default {
  name: 'Header',
  components: {
    Menu, HeaderSlider
  },
  props: {
    navItems: Array,
    sliderData: Array,
    isHeaderVisible: Boolean
  },
  data () {
      return {
        isMenuVisible: false,
        menuIcon: MenuIcon,     
      }
  },
  methods: {
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

@media screen and (max-width: 1300px){
  .header__bg-text{width: 80%; }
  .header{min-height: 700px; }
}
@media screen and (max-width: 1000px){
  .header{  padding-top: 0px; min-height: 600px;}
}
@media screen and (max-width: 900px){
  .header__bg-text{top: 230px; }
}
@media screen and (max-width: 700px){
  .header{min-height: 630px;}
}
@media screen and (max-width: 600px){
  .header__bg-text{left: 20px; }
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
