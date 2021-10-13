<template>
    <section class="development padding">
        <div class="container">
            <div class="grid-wrapper" v-if="windowWidth > showMobileMenuBrakepoint">
                <div class="title development__title">Directions <br> for development</div>
                <div    v-for="data in listData" v-bind:key="data.id"
                        :class="data.className">
                    <div class="box__content">
                        <div class="item-title">
                            <img :src="data.icon" :alt="data.iconAlt" class="item-img">
                            <span>{{data.title}}</span>
                        </div>
                        <p class="item-text">{{data.text}}</p>
                    </div>
                    <CircleMoreBtn />
                </div>
                <img 
                    v-for="img in imagesList" v-bind:key="img.imageAlt"                
                    :src="img.image" :alt="img.imageAlt"  :class="img.className">
            </div>
            <div v-if="windowWidth <= showMobileMenuBrakepoint">
                <div class="title development__title mobile-title">Directions <br> for development</div>
                <DevMobileItem 
                    v-for="data in listData" v-bind:key="data.id"
                    v-bind:title="data.title"
                    v-bind:icon="data.icon"
                    v-bind:text="data.text"
                    v-bind:id="data.id"
                    v-bind:expandedItem="expandedItem"
                    @setNewExpandItem="setNewExpandItemEvent"
                />
            </div>
        </div>
    </section>
</template>

<script>
import DevMobileItem from '@/components/DevMobileItem.vue'
import CircleMoreBtn from '@/components/CircleMoreBtn.vue'

export default {
    name: 'Development',
    components: {
        DevMobileItem, CircleMoreBtn
    },
    data(){
            return{
                windowWidth: window.innerWidth,
                showMobileMenuBrakepoint: 950,
                expandedItem: -1
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
        setNewExpandItemEvent(param){
            this.expandedItem = param.id;
        }
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
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 0px 1fr 0px 0.5fr 0px 1fr 0px 1fr;
    grid-template-columns: repeat(2, 1fr) 0.5fr repeat(2, 1fr);
    -ms-grid-rows: 0.7fr 0px 0.3fr 0px 0.2fr 0px 1fr 0px 0.5fr 0px 0.5fr;
    grid-template-rows: 0.7fr 0.3fr 0.2fr 1fr 0.5fr 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    color: #fff;
}.grid-wrapper > *:nth-child(1) {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
}.grid-wrapper > *:nth-child(2) {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
}.grid-wrapper > *:nth-child(3) {
    -ms-grid-row: 1;
    -ms-grid-column: 5;
}.grid-wrapper > *:nth-child(4) {
    -ms-grid-row: 1;
    -ms-grid-column: 7;
}.grid-wrapper > *:nth-child(5) {
    -ms-grid-row: 1;
    -ms-grid-column: 9;
}.grid-wrapper > *:nth-child(6) {
    -ms-grid-row: 3;
    -ms-grid-column: 1;
}.grid-wrapper > *:nth-child(7) {
    -ms-grid-row: 3;
    -ms-grid-column: 3;
}.grid-wrapper > *:nth-child(8) {
    -ms-grid-row: 3;
    -ms-grid-column: 5;
}.grid-wrapper > *:nth-child(9) {
    -ms-grid-row: 3;
    -ms-grid-column: 7;
}.grid-wrapper > *:nth-child(10) {
    -ms-grid-row: 3;
    -ms-grid-column: 9;
}.grid-wrapper > *:nth-child(11) {
    -ms-grid-row: 5;
    -ms-grid-column: 1;
}.grid-wrapper > *:nth-child(12) {
    -ms-grid-row: 5;
    -ms-grid-column: 3;
}.grid-wrapper > *:nth-child(13) {
    -ms-grid-row: 5;
    -ms-grid-column: 5;
}.grid-wrapper > *:nth-child(14) {
    -ms-grid-row: 5;
    -ms-grid-column: 7;
}.grid-wrapper > *:nth-child(15) {
    -ms-grid-row: 5;
    -ms-grid-column: 9;
}.grid-wrapper > *:nth-child(16) {
    -ms-grid-row: 7;
    -ms-grid-column: 1;
}.grid-wrapper > *:nth-child(17) {
    -ms-grid-row: 7;
    -ms-grid-column: 3;
}.grid-wrapper > *:nth-child(18) {
    -ms-grid-row: 7;
    -ms-grid-column: 5;
}.grid-wrapper > *:nth-child(19) {
    -ms-grid-row: 7;
    -ms-grid-column: 7;
}.grid-wrapper > *:nth-child(20) {
    -ms-grid-row: 7;
    -ms-grid-column: 9;
}.grid-wrapper > *:nth-child(21) {
    -ms-grid-row: 9;
    -ms-grid-column: 1;
}.grid-wrapper > *:nth-child(22) {
    -ms-grid-row: 9;
    -ms-grid-column: 3;
}.grid-wrapper > *:nth-child(23) {
    -ms-grid-row: 9;
    -ms-grid-column: 5;
}.grid-wrapper > *:nth-child(24) {
    -ms-grid-row: 9;
    -ms-grid-column: 7;
}.grid-wrapper > *:nth-child(25) {
    -ms-grid-row: 9;
    -ms-grid-column: 9;
}.grid-wrapper > *:nth-child(26) {
    -ms-grid-row: 11;
    -ms-grid-column: 1;
}.grid-wrapper > *:nth-child(27) {
    -ms-grid-row: 11;
    -ms-grid-column: 3;
}.grid-wrapper > *:nth-child(28) {
    -ms-grid-row: 11;
    -ms-grid-column: 5;
}.grid-wrapper > *:nth-child(29) {
    -ms-grid-row: 11;
    -ms-grid-column: 7;
}.grid-wrapper > *:nth-child(30) {
    -ms-grid-row: 11;
    -ms-grid-column: 9;
}
.box{
    font-family: 'Futura New Book';
    padding: 15px;
    border: 1px solid var(--border-color);
    color: #646464;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}
.development__title { 
    -ms-grid-row: 1; 
    -ms-grid-row-span: 2; 
    -ms-grid-column: 1; 
    -ms-grid-column-span: 3; 
    grid-area: 1 / 1 / 3 / 4; 
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.mobile-title{
    margin-bottom: 20px;
}
.pwa-apps { 
    -ms-grid-row: 1; 
    -ms-grid-row-span: 1; 
    -ms-grid-column: 5; 
    -ms-grid-column-span: 1; 
    grid-area: 1 / 5 / 2 / 6; 
}
.web-dev { 
    -ms-grid-row: 3; 
    -ms-grid-row-span: 3; 
    -ms-grid-column: 1; 
    -ms-grid-column-span: 1; 
    grid-area: 3 / 1 / 6 / 2; 
}
.site-design { 
    -ms-grid-row: 3; 
    -ms-grid-row-span: 2; 
    -ms-grid-column: 2; 
    -ms-grid-column-span: 1; 
    grid-area: 3 / 2 / 5 / 3; 
    border-left: none;
}
.numbers-img { 
    -ms-grid-row: 1; 
    -ms-grid-row-span: 1; 
    -ms-grid-column: 4; 
    -ms-grid-column-span: 1; 
    grid-area: 1 / 4 / 2 / 5; 
    width: 100%;
    height: 100%;
    max-height: 260px;
}
.turnkey-site { 
    -ms-grid-row: 2; 
    -ms-grid-row-span: 3; 
    -ms-grid-column: 4; 
    -ms-grid-column-span: 1; 
    grid-area: 2 / 4 / 5 / 5; 
}
.landing { 
    -ms-grid-row: 4; 
    -ms-grid-row-span: 1; 
    -ms-grid-column: 5; 
    -ms-grid-column-span: 1; 
    grid-area: 4 / 5 / 5 / 6; 
    border-left: none;
}
.landing-img { 
    -ms-grid-row: 2; 
    -ms-grid-row-span: 2; 
    -ms-grid-column: 5; 
    -ms-grid-column-span: 1; 
    grid-area: 2 / 5 / 4 / 6; 
    width: 100%;
    height: 100%;
    max-height: 160px;
}
.busines-site { 
    -ms-grid-row: 5; 
    -ms-grid-row-span: 2; 
    -ms-grid-column: 2; 
    -ms-grid-column-span: 2; 
    grid-area: 5 / 2 / 7 / 4; 
    border-left: none;
    border-top: none;
}
.design { 
    -ms-grid-row: 5; 
    -ms-grid-row-span: 2; 
    -ms-grid-column: 4; 
    -ms-grid-column-span: 1; 
    grid-area: 5 / 4 / 7 / 5; 
    border-left: none;
    border-top: none;
}
.logo-design { 
    -ms-grid-row: 5; 
    -ms-grid-row-span: 2; 
    -ms-grid-column: 5; 
    -ms-grid-column-span: 1; 
    grid-area: 5 / 5 / 7 / 6; 
    border-left: none;
    border-top: none;
}
.phone-img { 
    -ms-grid-row: 3; 
    -ms-grid-row-span: 2; 
    -ms-grid-column: 3; 
    -ms-grid-column-span: 1; 
    grid-area: 3 / 3 / 5 / 4; 
    width: 100%;
    height: 100%;
    max-height: 360px;
}
.screen-img { 
    -ms-grid-row: 6; 
    -ms-grid-row-span: 1; 
    -ms-grid-column: 1; 
    -ms-grid-column-span: 1; 
    grid-area: 6 / 1 / 7 / 2; 
    width: 100%;
    height: 100%;
    max-height: 160px;
}
.item-title{
    color: #fff;
    margin-bottom: 10px;
    font-size: 26px;
    line-height: 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
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
</style>