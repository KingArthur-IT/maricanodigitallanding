<template>
    <section class="portfolio padding">
        <div class="container">
            <h2 class="title portfolio__title">Portfolio</h2>
            <div class="slider">
                <div class="slider__item">
                    <div>
                        <p class="slider__direction">Site design</p>
                        <p class="slider__prj-name">
                            Business card website: <span>Happytel</span>
                        </p>
                    </div>
                    <img src="@/assets/portfolio/1.jpg" alt="Happytel">
                    <div class="btn more">See <br> project</div>
                </div>
                <div class="slider__item">
                    <div>
                        <p class="slider__direction">Site design</p>
                        <p class="slider__prj-name">
                            Site design: <span>Dr. Wise</span>
                        </p>
                    </div>
                    <img src="@/assets/portfolio/2.jpg" alt="Happytel">
                    <div class="btn more">See <br> project</div>
                </div>
                <div class="slider__item">
                    <div>
                        <p class="slider__direction">Site design</p>
                        <p class="slider__prj-name">
                            Site design: <span>Wunity</span>
                        </p>
                    </div>
                    <img src="@/assets/portfolio/3.jpg" alt="Happytel">
                    <div class="btn more">See <br> project</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.portfolio{
    background: var(--bg-lighter);
}
.portfolio__title{
    margin-bottom: 26px;
}
.slider{
    display: flex;
    justify-content: space-between;
}
.slider__item{
    background: #181818;
    padding: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 30%;
    position: relative;
}
.slider__direction{
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #D9D9D9;
    margin-bottom: 12px;
}
.slider__prj-name{
    font-family: 'Futura New Book';
    font-size: 35px;
    line-height: 38px;
    letter-spacing: 0.04em;
    color: #fff;
    margin-bottom: 30px;
}
.slider__prj-name span{
    font-family: 'Futura New';
    font-weight: 400;
}
.slider__item img{
    
}
.more{
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 97px;
    height: 97px;
    border-radius: 50%;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translateY(30%);
    font-weight: 500;
}
</style>