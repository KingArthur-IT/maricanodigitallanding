<template>
    <div class="container padding reviews">
        <div class="title__wrapper">
            <h2 class="title reviews__title">Recommendations <br> of our clients</h2>
            <img src="@/assets/design items/arrow-left-bottom.png" alt="arrow" class="arrow">
        </div>
        <div class="reviews-slider">
            <div class="slider-item">
                <div class="slider-item__title">
                    <p class="slider-item__name">James Alfie</p>
                    <div class="date-wrapper">
                        <img src="@/assets/calendar.png" alt="">
                        <p class="slider-item__date">23.09.2021</p>
                    </div>
                </div>
                <p class="slider-item__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam.
                </p>
                <div class="more">Read <br> more</div>
            </div>
            <div class="slider-item">
                <div class="slider-item__title">
                    <p class="slider-item__name">Saphie Mia</p>
                    <div class="date-wrapper">
                        <img src="@/assets/calendar.png" alt="">
                        <p class="slider-item__date">23.09.2021</p>
                    </div>
                </div>
                <p class="slider-item__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam.
                </p>
                <div class="more">Read <br> more</div>
            </div>
            <div class="slider-item">
                <div class="slider-item__title">
                    <p class="slider-item__name">Jack Riley</p>
                    <div class="date-wrapper">
                        <img src="@/assets/calendar.png" alt="">
                        <p class="slider-item__date">23.09.2021</p>
                    </div>
                </div>
                <p class="slider-item__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam. Dolorem consectetur repellat ipsum? Dicta, temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio maxime ipsum soluta a officiis! At eos culpa perferendis aperiam accusamus atque adipisci pariatur ullam.
                </p>
                <div class="more">Read <br> more</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.reviews{

}
.title__wrapper{
    position: relative;
    display: block;
    margin-bottom: 60px;
}
.reviews__title{
    
}
.arrow{
    position: absolute;
    bottom: 10%;
    left: 48%;
    width: 14px;
    height: 14px;
}
.reviews-slider{
    display: flex;
}
.slider-item{
    border: 1px solid var(--border-color);
    flex-basis: 33.3%;
    padding: 20px 20px 20px 30px;
    min-height: 350px;
    position: relative;
}
.slider-item__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.slider-item__name{
    color: #fff;
    font-size: 26px;
    line-height: 35px;
    letter-spacing: 0.04em;
}
.date-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.date-wrapper img{
    width: 10px;
    height: 10px;
    margin-right: 6px;
}
.slider-item__date{
    font-weight: 300;
    color: #fff;
    font-size: 14px;
    line-height: 35px;
}
.slider-item__text{
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.04em;
    font-weight: 300;
    color: #A7A7A7;
}
.more{
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 68px;
    height: 68px;
    background: var(--primary-color);
    border-radius: 50%;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    /*transform: translateY(30%);*/
}
</style>