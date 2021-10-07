<template>
  <div class="menu-wrapper">
        <nav class="container menu">
            <img src="@/assets/Logo.svg" alt="Maricano Digital" class="logo">
            <ul class="menu__nav">
                    <li class="menu__item"
                        v-for="navItem in this.navItems" v-bind:key="navItem"
                    >
                        <a class="menu__link"  :href="`#${navItem}`" >{{navItem}}</a>
                    </li>
                    <li>
                        <button class="btn menu__btn">
                            Back call
                        </button>
                    </li>
                </ul>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    navItems: Array
  }
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
    font-weight: normal;
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
</style>
