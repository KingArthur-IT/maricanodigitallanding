<template>
    <div class="experience">
        <div class="container">
            <div class="title__wrapper">
                <h2 class="title">Our diverse and voluminous experience</h2>
                <img src="@/assets/design items/arrow-left-bottom.png" alt="arrow" class="arrow">
            </div>
            <div class="experience__block">
                <div class="experience__item">
                    <span>20</span>
                    <p>specialists in the team</p>
                </div>
                <div class="experience__item">
                    <span>10</span>
                    <p>years of experience</p>
                </div>
                <div class="experience__item">
                    <span>95</span>
                    <p>% of satisfied customers</p>
                </div>
                <div class="experience__item">
                    <span>75</span>
                    <p>+ active projects</p>
                </div>
            </div>
        </div>
    </div>
</template>

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
.title{
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 0.04em;
    width: 80%;
    font-weight: 400;
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
    font-weight: 600;
    font-size: 80px;
    line-height: 70px;
    margin-bottom: 20px;
}
.experience__item p{
    font-size: 18px;
    line-height: 20px;
    color: #D2D2D2;
}
</style>