<template>
    <footer :class="{fixed: footerFixed}">
        <div class="container">
            <div class="footer">
            <div class="footer__info">
                <img src="@/assets/Logo.svg" alt="Maricano Digital" class="footer__logo">
                <p>We are in social networks</p>
                <div class="socials-wrapper">
                    <img 
                        @mouseover="instaHover"
                        @mouseleave="instaHover"                        
                        :src="instaIcon[boolToInt(isInstaHover)]" 
                        alt="insta" class="social">
                    <img 
                        @mouseover="facebookHover"
                        @mouseleave="facebookHover"                        
                        :src="facebookIcon[boolToInt(isFacebookHover)]" 
                        alt="fb" class="social">
                    <img 
                        @mouseover="telegramHover"
                        @mouseleave="telegramHover"                        
                        :src="telegramIcon[boolToInt(isTelegramHover)]" 
                        alt="telegram" class="social">
                </div>
            </div>
            <nav class="footer__nav" v-if="windowWidth > mobileBrakepoint">
                <ul>
                    <li class="nav-item"
                        v-for="navItem in this.navItems" v-bind:key="navItem"
                    >
                        <a class="nav-link"  :href="`#${navItem}`" >{{navItem}}</a>
                    </li>
                </ul>
            </nav>
            <div class="contacts">
                <div class="contacts__item">
                    <img src="@/assets/footer/phone.svg" alt="phone">
                    <a :href="`tel:${tel}`" class="contact__info">{{tel}}</a>
                </div>
                <div class="contacts__item">
                    <img src="@/assets/footer/map.svg" alt="map">
                    <p class="contact__info">{{adress}}</p>
                </div>
                <div class="contacts__item">
                    <img src="@/assets/footer/e-mail.svg" alt="email">
                    <a :href="`mailto:${email}`" class="contact__info">{{email}}</a>
                </div>
            </div>
        </div>
        </div>
    </footer>
</template>

<script>
import Inst from '@/assets/footer/inst.svg'
import InstHover from '@/assets/footer/inst_hover.svg'
import Facebook from '@/assets/footer/facebook.svg'
import FacebookHover from '@/assets/footer/facebook_hover.svg'
import Telegram from '@/assets/footer/telegram.svg'
import TelegramHover from '@/assets/footer/telegram_hover.svg'

export default {
  name: 'Footer',
  components: {
      
  },
  props: {
    navItems: Array,
    tel: String,
    adress: String,
    email: String,
    footerFixed: Boolean
  },
  data () {
      return {
          isInstaHover: false,
          isFacebookHover: false,
          isTelegramHover: false,
          instaIcon: [Inst, InstHover],
          facebookIcon: [Facebook, FacebookHover],
          telegramIcon: [Telegram, TelegramHover],
          //for addaptive
          windowWidth: window.innerWidth,
          mobileBrakepoint: 1000
      }
    },
  methods: {
      boolToInt(bool){
          return bool ? 1 : 0;
      },
      instaHover() {
          this.isInstaHover = !this.isInstaHover;
      },
      facebookHover() {
          this.isFacebookHover = !this.isFacebookHover;
      },
      telegramHover() {
          this.isTelegramHover = !this.isTelegramHover;
      },
      resizeEvent(){
            this.windowWidth = window.innerWidth;
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
footer{
    background: var(--bg-lighter);
}
.fixed{
  position: absolute;
  width: 100%;
  bottom: 0;
}
.footer{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 0;
}
.footer__info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.footer__logo{
    width: 250px;
    margin-bottom: 15px;
}
.footer__info p{
    color: #fff;
    font-size: 16px;
    font-family: 'Futura New Book';
    margin-bottom: 15px;
}
.socials-wrapper{
    display: flex;
}
.social{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-right: 10px;
    cursor: pointer;
}
.contacts{
    display: flex;
    flex-direction: column;
}
.contacts__item{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
}
.contacts__item img{
    width: 26px;
    height: 26px;
    margin-right: 13px;
}
.contact__info{
    font-family: 'Futura New Book';
    font-weight: normal;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
}
.footer__nav{
    flex-basis: 40%;
}
.footer__nav ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-item{
    position: relative;
    cursor: pointer;
}
.nav-link{
    color: #fff;
    text-decoration: none;
    font-family: 'Futura New Book';
    font-size: 14px;
}
.nav-item:after{
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    background: var(--primary-color);
    border-radius: 50%;
    bottom: -4px;
    left: 0%;
    opacity: 0;
    transition: all 0.1s ease-in-out;
}
.nav-item:hover:after{
    opacity: 1;
    left: 50%;
}
@media screen and (max-width: 500px){
  .footer{flex-direction: column;}
  .contacts{margin-top: 30px;}
}
</style>