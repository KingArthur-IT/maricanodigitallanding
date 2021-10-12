<template>
    <section class="do">
        <div class="container">
            <img src="@/assets/solving.png" alt="Solving" class="bg-image">
            <div class="do-wrapper">
                <h3 class="text">
                    We turn technology and design into a solution of business problems
                </h3>
                <img src="@/assets/img_circle.png" alt="img" class="image">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WhatWeDo',
    
}
</script>

<style scoped>
.do{
    background: var(--bg-darker);
    height: 344px;
}
.do-wrapper{
    min-height: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.bg-image{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}
.text{
    display: block;
    color: #fff;
    font-size: 55px;
    line-height: 70px;
    letter-spacing: 0.04em;
    font-weight: 900;
}
.image{
    width: 350px;
    height: 360px;
}
@media screen and (max-width: 1300px){
    .text{font-size: 50px; }
}
@media screen and (max-width: 1100px){
    .image{
        position: absolute;
        width: 250px;
        height: 250px;
        right: 0;
        bottom: -150px;
    }
    .do{ height: 375px; }
}
@media screen and (max-width: 750px){
    .text{ font-size: 42px; line-height: 55px;  }
    .image{ right: -40px; }
}
</style>