<template>
    <section class="development padding">
        <div class="container">
            <div class="grid-wrapper" v-if="windowWidth > showMobileMenuBrakepoint">
                <div class="title development__title">Directions <br> for development</div>
                <div    v-for="data in listData" v-bind:key="data.title"
                        :class="data.className">
                    <div class="box__content">
                        <div class="item-title">
                            <img :src="data.icon" :alt="data.iconAlt" class="item-img">
                            <span>{{data.title}}</span>
                        </div>
                        <p class="item-text">{{data.text}}</p>
                    </div>
                    <div class="btn more-btn">More</div>
                </div>
                <img 
                    v-for="img in imagesList" v-bind:key="img.imageAlt"                
                    :src="img.image" :alt="img.imageAlt"  :class="img.className">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Development',
    data(){
            return{
                windowWidth: window.innerWidth,
                showMobileMenuBrakepoint: 950
            }
        },
    props: {
        listData: Array,
        imagesList: Array,
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
.development{
    background: var(--bg-darker);    
}
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr) 0.5fr repeat(2, 1fr);
    grid-template-rows: 0.7fr 0.3fr 0.2fr 1fr 0.5fr 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    color: #fff;
}
.box{
    font-family: 'Futura New Book';
    padding: 15px;
    border: 1px solid var(--border-color);
    color: #646464;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.box__content{

}
.development__title { 
    grid-area: 1 / 1 / 3 / 4; 
    display: flex;
    align-items: center;
}
.pwa-apps { 
    grid-area: 1 / 5 / 2 / 6; 
}
.web-dev { 
    grid-area: 3 / 1 / 6 / 2; 
}
.site-design { 
    grid-area: 3 / 2 / 5 / 3; 
    border-left: none;
}
.numbers-img { 
    grid-area: 1 / 4 / 2 / 5; 
    width: 100%;
    height: 100%;
}
.turnkey-site { 
    grid-area: 2 / 4 / 5 / 5; 
}
.landing { 
    grid-area: 4 / 5 / 5 / 6; 
    border-left: none;
}
.landing-img { 
    grid-area: 2 / 5 / 4 / 6; 
    width: 100%;
    height: 100%;
}
.busines-site { 
    grid-area: 5 / 2 / 7 / 4; 
    border-left: none;
    border-top: none;
}
.design { 
    grid-area: 5 / 4 / 7 / 5; 
    border-left: none;
    border-top: none;
}
.logo-design { 
    grid-area: 5 / 5 / 7 / 6; 
    border-left: none;
    border-top: none;
}
.phone-img { 
    grid-area: 3 / 3 / 5 / 4; 
    width: 100%;
    height: 100%;
}
.screen-img { 
    grid-area: 6 / 1 / 7 / 2; 
    width: 100%;
    height: 100%;
}
.item-title{
    color: #fff;
    margin-bottom: 10px;
    font-size: 26px;
    line-height: 32px;
    display: flex;
    align-items: center;
}
.item-img{
    width: 21px;
    height: 21px;
    margin-right: 10px;
}
.item-text{
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
}
.more-btn{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 12px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
}
</style>