<template>
    <section class="portfolio padding">
        <div class="container">
            <h2 class="title portfolio__title">Portfolio</h2>
            <div class="slider">
                <div class="slider__item">
                    <div>
                        <p class="slider__direction">Site design</p>
                        <p class="slider__prj-name">
                            Business card website: Happytel
                        </p>
                    </div>
                    <img src="@/assets/portfolio/1.jpg" alt="Happytel">
                    <div class="more">See <br> project</div>
                </div>
                <div class="slider__item">
                    <div>
                        <p class="slider__direction">Site design</p>
                        <p class="slider__prj-name">
                            Site design: Dr. Wise
                        </p>
                    </div>
                    <img src="@/assets/portfolio/2.jpg" alt="Happytel">
                    <div class="more">See <br> project</div>
                </div>
                <div class="slider__item">
                    <div>
                        <p class="slider__direction">Site design</p>
                        <p class="slider__prj-name">
                            Site design: Wunity
                        </p>
                    </div>
                    <img src="@/assets/portfolio/3.jpg" alt="Happytel">
                    <div class="more">See <br> project</div>
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
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #D9D9D9;
    margin-bottom: 12px;
}
.slider__prj-name{
    font-size: 35px;
    line-height: 38px;
    letter-spacing: 0.04em;
    color: #fff;
    margin-bottom: 30px;
}
.slider__item img{
    
}
.more{
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 97px;
    height: 97px;
    background: var(--primary-color);
    border-radius: 50%;
    color: #fff;
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translateY(30%);
    font-weight: 500;
}
</style>