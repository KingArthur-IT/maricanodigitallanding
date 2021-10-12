<template>
  <div class="menu-wrapper">
      <div class="container">
          <nav class="menu">
            <img src="@/assets/Logo.svg" alt="Maricano Digital" class="logo">
            <ul class="menu__nav" v-if="windowWidth > showMobileMenuBrakepoint">
                    <li class="menu__item"
                        v-for="navItem in this.navItems" v-bind:key="navItem"
                    >
                        <a class="menu__link"  :href="`#${navItem}`" >{{navItem}}</a>
                    </li>
                    <li>
                        <button class="btn btn-rect menu__btn">
                            Back call
                        </button>
                    </li>
            </ul>
            <div class="mobile-menu-item" v-if="windowWidth <= showMobileMenuBrakepoint">
                <img src="@/assets/design items/menu.svg" alt="menu">
            </div>
        </nav>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        navItems: Array
    }, 
    data(){
        return{
            windowWidth: window.innerWidth,
            showMobileMenuBrakepoint: 950
        }
    },
    methods: {
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
.menu-wrapper{
    background: var(--bg-lighter);
}
.menu{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    height: 40px;
}
.menu__nav{
    display: flex;
    list-style: none;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    flex-basis: 60%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}
.menu__item{
    position: relative;
    cursor: pointer;
}
.menu__link{
    color: #fff;
    text-decoration: none;
}
.menu__item:after{
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
.menu__item:hover:after{
    opacity: 1;
    left: 50%;
}
.menu__btn{
    width: 151px;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
}
.mobile-menu-item{
    background: var(--primary-color);
    width: 44px;
    height: 44px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.mobile-menu-item img{
    width: 18px;
    height: 18px;
}
@media screen and (max-width: 950px){
    .menu__btn{ width: 115px;}
}
</style>
