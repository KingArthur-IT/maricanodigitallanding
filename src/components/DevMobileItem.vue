<template>
    <div class="dev-item">
        <div class="dev-item__head" @click="itemClick">
            <div>
                <img :src="icon" :alt="title" class="dev-item__icon">
                <h4 class="dev-item__title">{{title}}</h4>
            </div>
            <img class="arrow" v-bind:class="{rotate: !isExpand}"
                src="@/assets/design items/arrow-left-bottom.svg">            
        </div>              
        <transition-expand>         
            <div v-if="isExpand">
                <div class="dev-item__text">{{text}}</div>      
                <CircleMoreBtn />      
            </div>                    
        </transition-expand>
    </div>
</template>

<script>
import CircleMoreBtn from '@/components/CircleMoreBtn.vue'
import {TransitionExpand} from 'vue-transition-expand'
import 'vue-transition-expand/dist/vue-transition-expand.css'

export default {
    name: 'DevMobileItem',
    components: {
        TransitionExpand, CircleMoreBtn
    },
    data () {
        return {
            isExpand: false,
        }
    },
    props: {
        title: {
            type: String
        },
        text: {
            type: String
        },
        id: {
            type: Number
        },
        expandedItem: {
            type: Number
        },
        icon: String
    },
    methods: {
        itemClick(){
            this.isExpand = !this.isExpand;
            if (this.isExpand){
                this.$emit('setNewExpandItem', {id: this.id});
            }
        }
    },
    watch: {
        expandedItem: function(){
            if (this.expandedItem != this.id){
                this.isExpand = false;
            }
        }
    }
}
</script>

<style scoped>
.dev-item{
    border: 1px solid var(--border-color);
    padding: 20px 15px;
}
.dev-item__head{
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
}
.dev-item__title{
    font-family: 'Futura New Book';
    font-weight: normal;
}
.dev-item__icon{margin-right: 10px;}
.dev-item__head div{display: flex;}
.arrow{
    transform: rotate(-45deg);
    transition: all 0.5s ease-in;
}
.rotate{
    transform: rotate(135deg);
}
.dev-item__text{
    font-size: 16px;
    line-height: 22px;
    color: #646464;
    margin-top: 15px;
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
    margin-left: auto;
    margin-top: 10px;
}
</style>