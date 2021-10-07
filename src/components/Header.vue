<template>
  <header>
    <Menu 
      v-bind:navItems="navItems"
    />
    <div class="header">
      <img src="@/assets/bg_text.png" alt="Maricano" class="header__bg-text">
      <div class="container">
        <div class="header__hero">
           <img src="@/assets/header-img.png" alt="" class="header__img">
           <div class="header__info">
             <h1 class="header__title">Implement your IT project</h1>
             <p class="header__subtitle">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione cumque dignissimos exercitationem ea quia maiores a doloribus, possimus sapiente, asperiores dicta voluptate iusto quibusdam vel. Aut nobis numquam qui veniam?
             </p>
             <div class="more-details">
               More details
               <img src="@/assets/design items/arrow-right-up.svg" alt="arrow" class="more-details__up-right">
             </div>
           </div>
        </div>       
      </div>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Header',
  components: {
    Menu
  },
  props: {
    navItems: Array
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
  font-weight: 600;
  line-height: 80px;
  font-size: 80px;
  margin-bottom: 26px;
}
.header__subtitle{
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: var(--text-color);
}
.more-details{
  font-size: 20px;
  line-height: 24px;
  color: var(--primary-color);
  position: relative;
  align-self: flex-end;
  width: 120px;
}
.more-details__up-right{
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  right: 0;
}
</style>
