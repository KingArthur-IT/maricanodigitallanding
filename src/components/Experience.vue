<template>
    <section class="experience">
        <div class="container">
            <div class="title__wrapper">
                <h2 class="experience__title">Our diverse and voluminous experience
                    <span class="icon-arrow-left-bottom"></span>
                </h2>
            </div>
            <div class="experience__block">
                <div class="experience__item">
                    <div>
                        <span class="experience__number">{{firstItem.value}}</span>
                        <p class="experience__text">{{firstItem.text}}</p>
                    </div>
                </div>
                <div class="experience__item">
                    <div>
                        <span class="experience__number">{{secondItem.value}}</span>
                        <p class="experience__text">{{secondItem.text}}</p>
                    </div>
                </div>
                <div class="experience__item">
                    <div>
                        <span class="experience__number">{{thirdItem.value}}</span>
                        <p class="experience__text">{{thirdItem.text}}</p>
                    </div>
                </div>
                <div class="experience__item">
                    <div>
                        <span class="experience__number">{{fourthItem.value}}</span>
                        <p class="experience__text">{{fourthItem.text}}</p>
                    </div>
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
.experience__item div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.experience__number{
    font-family: 'Futura New Demi';
    font-size: 80px;
    line-height: 70px;
    margin-bottom: 20px;
}
.experience__text{
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    color: #D2D2D2;
    text-align: center;
}
@media screen and (max-width: 1100px){
    .experience__item{ min-height: 225px; }
}
@media screen and (max-width: 1000px){
  .experience__title{
    font-size: 50px;
    line-height: 60px;
    }
}
@media screen and (max-width: 900px){
    .experience__block{ flex-wrap: wrap; }
    .experience__item{ flex-basis: 50%;}
    .title__wrapper{ margin-bottom: 40px;  }
}
@media screen and (max-width: 550px){
  .experience__title{
    font-size: 40px;
    line-height: 50px;
    }
}
@media screen and (max-width: 500px){
    .experience__item{min-height: 200px;}
}
@media screen and (max-width: 425px){
    .experience__item{
        justify-content: flex-start;
        padding-top: 45px;
    }
    .experience__text{width: 90%;}
}
@media screen and (max-width: 400px){
  .experience__title{
    font-size: 30px;
    line-height: 40px;
    }
}
@media screen and (max-width: 350px){
    .experience__item{ flex-basis: 100%;}
    .experience__text{width: 100%;}
    .experience__title{
        font-size: 28px;
        line-height: 30px;
    }
}
</style>