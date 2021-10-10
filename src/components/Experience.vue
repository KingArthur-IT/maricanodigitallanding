<template>
    <section class="experience">
        <div class="container">
            <div class="title__wrapper">
                <h2 class="experience__title">Our diverse and voluminous experience</h2>
                <img src="@/assets/design items/arrow-left-bottom.svg" alt="arrow" class="arrow">
            </div>
            <div class="experience__block">
                <div class="experience__item">
                    <span>{{firstItem.value}}</span>
                    <p>{{firstItem.text}}</p>
                </div>
                <div class="experience__item">
                    <span>{{secondItem.value}}</span>
                    <p>{{secondItem.text}}</p>
                </div>
                <div class="experience__item">
                    <span>{{thirdItem.value}}</span>
                    <p>{{thirdItem.text}}</p>
                </div>
                <div class="experience__item">
                    <span>{{fourthItem.value}}</span>
                    <p>{{fourthItem.text}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    firstItem: Object,
    secondItem: Object,
    thirdItem: Object,
    fourthItem: Object,
  },
}
</script>

<style scoped>
.experience{
    background: var(--bg-lighter);
    color: #fff;
    padding: 50px 0px 100px;
}
.title__wrapper{
    position: relative;
    display: block;
    margin-bottom: 60px;
}
.experience__title{
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 0.04em;
    width: 80%;
    font-weight: 500;
}
.arrow{
    position: absolute;
    bottom: 10%;
    left: 31%;
    width: 13px;
    height: 13px;
}
.experience__block{
    display: flex;
}
.experience__item{
    flex-basis: 25%;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 260px;
}
.experience__item span{
    font-family: 'Futura New Demi';
    font-size: 80px;
    line-height: 70px;
    margin-bottom: 20px;
}
.experience__item p{
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    color: #D2D2D2;
}
</style>