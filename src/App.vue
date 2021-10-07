<template>
  <div id="app">
    <Header 
      v-bind:navItems="navItems"
    />
    <Experience />
    <Development />
    <Discuss />
    <WhatWeDo />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Experience from '@/components/Experience.vue'
import Development from '@/components/Development.vue'
import Discuss from '@/components/Discuss.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'

export default {
  name: 'App',
  components: {
    Header, Experience, Development, Discuss, WhatWeDo
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

:root {
  --bg-lighter: #222222;
  --bg-darker: #1D1D1D;
  --primary-color: #52A921;
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
  background: var(--primary-color);
  padding: 10px;
  border-radius: 150px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
