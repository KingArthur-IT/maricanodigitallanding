<template>
  <div id="app">
    <Header 
      v-bind:navItems="navItems"
      v-bind:sliderData="headerSliderData"
    />
    <Experience 
      v-bind:firstItem="{ value: '20',  text: 'specialists in the team'}"
      v-bind:secondItem="{value: '10',  text: 'years of experience'}"
      v-bind:thirdItem="{ value: '95',  text: '% of satisfied customers'}"
      v-bind:fourthItem="{ value: '75', text: '+ active projects'}"
    />
    <Development 
      :id="navItems[0]"
      v-bind:listData="devListData"
      v-bind:imagesList="devImages"
    />
    <Discuss />
    <WhatWeDo />
    <Portfolio 
      :id="navItems[1]"
      v-bind:dataList="portfolioListData"
    />
    <TechList />
    <Reviews 
      :id="navItems[2]"  
    />
    <Discuss 
      :id="navItems[3]"
      v-bind:isBgDark="true"
    />
    <Footer 
      v-bind:navItems="navItems"
      v-bind:tel="`+380 97 658 45 24`"
      v-bind:adress="`Office adress`"
      v-bind:email="`Email`"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Experience from '@/components/Experience.vue'
import Development from '@/components/Development.vue'
import Discuss from '@/components/Discuss.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import Portfolio from '@/components/Portfolio.vue'
import TechList from '@/components/TechList.vue'
import Reviews from '@/components/Reviews.vue'
import Footer from '@/components/Footer.vue'

//images for header slider
import HeaderSliderImg1 from "@/assets/header-img.png"
//icons for blocks in development component
import PWAAppsIcon      from "@/assets/dev icons/pwa-apps.png"
import WebDevIcon       from "@/assets/dev icons/web-dev.png"
import SiteDesignIcon   from "@/assets/dev icons/site-design.png"
import TurnkeyIcon      from "@/assets/dev icons/turnkey.png"
import LandingIcon      from "@/assets/dev icons/landing.png"
import BusinesIcon      from "@/assets/dev icons/busines.png"
import DesignIcon       from "@/assets/dev icons/design.png"
import LogoDesignIcon   from "@/assets/dev icons/logo-design.png"
//images for blocks in development component
import LandingImage     from "@/assets/landing.png"
import NumbersImage     from "@/assets/numbers.png"
import PhoneImage       from "@/assets/phone.png"
import ScreenImage      from "@/assets/screen.png"
//images for portfolio cases
import HappytelImage   from "@/assets/portfolio/1.jpg"
import DrWiseImage   from "@/assets/portfolio/2.jpg"
import WunityImage   from "@/assets/portfolio/3.jpg"

export default {
  name: 'App',
  components: {
    Header, Experience, Development, Discuss, WhatWeDo, Portfolio,
    TechList, Reviews, Footer
  },
  data () {
      return {
          //items for navigation
          navItems: [
            'Services',
            'Portfolio',
            'Reviews',
            'Discuss the project',
          ],
          //data for header slider
          headerSliderData: [
            {
              id: 1,
              title: 'Implement your IT project',
              subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione cumque dignissimos exercitationem ea quia maiores a doloribus, possimus sapiente, asperiores dicta voluptate iusto quibusdam vel. Aut nobis numquam qui veniam?',
              image: HeaderSliderImg1,
              imageAlt: 'Header image'
            },
            {
              id: 2,
              title: 'Implement your IT project',
              subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione cumque dignissimos exercitationem ea quia maiores a doloribus, possimus sapiente, asperiores dicta voluptate iusto quibusdam vel. Aut nobis numquam qui veniam?',
              image: HeaderSliderImg1,
              imageAlt: 'Header image'
            },
            {
              id: 3,
              title: 'Implement your IT project',
              subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione cumque dignissimos exercitationem ea quia maiores a doloribus, possimus sapiente, asperiores dicta voluptate iusto quibusdam vel. Aut nobis numquam qui veniam?',
              image: HeaderSliderImg1,
              imageAlt: 'Header image'
            }
          ],
          //data for development component
          devListData: [
            {   icon: PWAAppsIcon, iconAlt: 'pwa', title: 'PWA-apps', className: 'box pwa-apps',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime.'
            },
            {   icon: WebDevIcon, iconAlt: 'webdev', title: 'Web-dev', className: 'box web-dev',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque repudiandae ad possimus esse repellat, recusandae ipsum error facere ex fugit. Numquam, quisquam! '
            },
            {   icon: SiteDesignIcon, iconAlt: 'design', title: 'Site design', className: 'box site-design',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque repudiandae ad possimus esse repellat, recusandae ipsum error facere ex fugit. Numquam, quisquam!'
            },
            {   icon: TurnkeyIcon, iconAlt: 'turnkey', title: 'Turnkey site', className: 'box turnkey-site',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque repudiandae ad possimus esse repellat, recusandae ipsum error facere ex fugit. Numquam, quisquam!'
            },
            {   icon: LandingIcon, iconAlt: 'landing', title: 'Landing page', className: 'box landing',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque.'
            },
            {   icon: BusinesIcon, iconAlt: 'busines', title: 'Bisines site', className: 'box busines-site',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsa quam molestias? Nostrum velit ab ipsam labore sint deleniti minus perferendis at corporis, voluptate adipisci praesentium veniam pariatur ex unde!'
            },
            {   icon: DesignIcon, iconAlt: 'design', title: 'Design', className: 'box design',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque.'
            },
            {   icon: LogoDesignIcon, iconAlt: 'design', title: 'Logo design', className: 'box logo-design',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque.'
            },
          ],
          devImages: [
              {image: LandingImage,   imageAlt: 'landing',    className: 'landing-img'},
              {image: NumbersImage,   imageAlt: 'numbers',    className: 'numbers-img'},
              {image: PhoneImage,     imageAlt: 'phone',      className: 'phone-img'},
              {image: ScreenImage,    imageAlt: 'screen',     className: 'screen-img'},
          ],
          //portfolio data list
          portfolioListData: [
            {id: 1, direction: 'Site design', description: 'Business card website:',
             name: 'Happytel', image: HappytelImage, imageAlt: 'Happytel'  },
            {id: 2, direction: 'Site design', description: 'Site design:',
             name: 'Dr. Wise', image: DrWiseImage, imageAlt: 'Dr.Wise'  },
            {id: 3, direction: 'Site design', description: 'Site design:',
             name: 'Wunity', image: WunityImage, imageAlt: 'Wunity'  },
            {id: 4, direction: 'Site design', description: 'Business card website:',
             name: 'Happytel', image: HappytelImage, imageAlt: 'Happytel'  },
            {id: 5, direction: 'Site design', description: 'Site design:',
             name: 'Dr. Wise', image: DrWiseImage, imageAlt: 'Dr.Wise'  },
            {id: 6, direction: 'Site design', description: 'Site design:',
             name: 'Wunity', image: WunityImage, imageAlt: 'Wunity'  },
          ]
      }
    },
}
</script>

<style>
#app {
  font-family: Futura New;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
    font-family: 'Futura New';
    src: url('~@/fonts/FuturaNewMedium-Reg.eot');
    src: local('~@/fonts/Futura New Medium Reg'), local('FuturaNewMedium-Reg'),
        url('~@/fonts/FuturaNewMedium-Reg.eot?#iefix') format('embedded-opentype'),
        url('~@/fonts/FuturaNewMedium-Reg.woff2') format('woff2'),
        url('~@/fonts/FuturaNewMedium-Reg.woff') format('woff'),
        url('~@/fonts/FuturaNewMedium-Reg.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Futura New';
    src: url('~@/fonts/FuturaNewHeavy-Reg.eot');
    src: local('~@/fonts/Futura New Heavy Reg'), local('FuturaNewHeavy-Reg'),
        url('~@/fonts/FuturaNewHeavy-Reg.eot?#iefix') format('embedded-opentype'),
        url('~@/fonts/FuturaNewHeavy-Reg.woff2') format('woff2'),
        url('~@/fonts/FuturaNewHeavy-Reg.woff') format('woff'),
        url('~@/fonts/FuturaNewHeavy-Reg.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}
@font-face {
    font-family: 'Futura New Book';
    src: url('~@/fonts/FuturaNewBook-Reg.eot');
    src: local('~@/fonts/Futura New Book Reg'), local('FuturaNewBook-Reg'),
        url('~@/fonts/FuturaNewBook-Reg.eot?#iefix') format('embedded-opentype'),
        url('~@/fonts/FuturaNewBook-Reg.woff2') format('woff2'),
        url('~@/fonts/FuturaNewBook-Reg.woff') format('woff'),
        url('~@/fonts/FuturaNewBook-Reg.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Futura New';
    src: url('~@/fonts/FuturaNewLight-Reg.eot');
    src: local('~@/fonts/Futura New Light Reg'), local('FuturaNewLight-Reg'),
        url('~@/fonts/FuturaNewLight-Reg.eot?#iefix') format('embedded-opentype'),
        url('~@/fonts/FuturaNewLight-Reg.woff2') format('woff2'),
        url('~@/fonts/FuturaNewLight-Reg.woff') format('woff'),
        url('~@/fonts/FuturaNewLight-Reg.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'Futura New Demi';
    src: url('~@/fonts/FuturaNewDemi-Reg.eot');
    src: local('~@/fonts/Futura New Demi Reg'), local('FuturaNewDemi-Reg'),
        url('~@/fonts/FuturaNewDemi-Reg.eot?#iefix') format('embedded-opentype'),
        url('~@/fonts/FuturaNewDemi-Reg.woff2') format('woff2'),
        url('~@/fonts/FuturaNewDemi-Reg.woff') format('woff'),
        url('~@/fonts/FuturaNewDemi-Reg.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Futura New';
    src: url('~@/fonts/FuturaNewBold-Reg.eot');
    src: local('~@/fonts/Futura New Bold Reg'), local('FuturaNewBold-Reg'),
        url('~@/fonts/FuturaNewBold-Reg.eot?#iefix') format('embedded-opentype'),
        url('~@/fonts/FuturaNewBold-Reg.woff2') format('woff2'),
        url('~@/fonts/FuturaNewBold-Reg.woff') format('woff'),
        url('~@/fonts/FuturaNewBold-Reg.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}
@font-face {
  font-family: 'icomoon';
  src:  url('~@/fonts/icomoon.eot?jwu3pc');
  src:  url('~@/fonts/icomoon.eot?jwu3pc#iefix') format('embedded-opentype'),
    url('~@/fonts/icomoon.ttf?jwu3pc') format('truetype'),
    url('~@/fonts/icomoon.woff?jwu3pc') format('woff'),
    url('~@/fonts/icomoon.svg?jwu3pc#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-arrow-left-bottom:before {
  content: "\e900";
  color: var(--primary-color);
  font-size: 11px;
  margin-left: 15px;
}

:root {
  --bg-lighter: #222222;
  --bg-darker: #1D1D1D;
  --primary-color: #52A921;
  --primary-hover-color: #37800E;
  --border-color: #474747;
  --secondary-color: #FFC869;
  --text-color: #C7C7C7;
  --secondary-hover-color: #F4A010;
}

* {
  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1140px;
  margin: auto;
  position: relative;
}

button{
  appearance: none;  
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.btn{
  font-family: Futura New;
  font-weight: 500;
  background: var(--primary-color);  
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
.btn:hover{
  background: var(--primary-hover-color);  
}
.btn-rect{
  padding: 10px;
  border-radius: 150px;
}
.title { 
    font-size: 80px;
    line-height: 85px;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.04em;
}
.padding{
  padding: 100px 0;
}
@media screen and (max-width: 1300px){
  .container{padding: 0 75px}
}
@media screen and (max-width: 1100px){
  .title{font-size: 70px; line-height: 75px;}
}
@media screen and (max-width: 1000px){
  .title{font-size: 62px; line-height: 65px;}
}
</style>
