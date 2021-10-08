<template>
    <section class="development padding">
        <div class="container">
            <div class="grid-wrapper">
                <div class="title development__title">Directions <br> for development</div>
                <div class="box pwa-apps">
                    <div class="item-title">
                        <img src="@/assets/dev icons/pwa-apps.png" alt="pwa" class="item-img">
                        <span>PWA-apps</span>
                    </div>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime.
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <div class="box web-dev">
                    <div class="item-title">
                        <img src="@/assets/dev icons/web-dev.png" alt="pwa" class="item-img">
                        <span>Web-dev</span>
                    </div>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque repudiandae ad possimus esse repellat, recusandae ipsum error facere ex fugit. Numquam, quisquam!
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <div class="box site-design">
                    <div class="item-title">
                        <img src="@/assets/dev icons/site-design.png" alt="pwa" class="item-img">
                        <span>Site design</span>                        
                    </div>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque repudiandae ad possimus esse repellat, recusandae ipsum error facere ex fugit. Numquam, quisquam!
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <img src="@/assets/numbers.png" alt="numbers" class="numbers-img">
                <div class="box turnkey-site">
                    <div class="item-title">
                        <img src="@/assets/dev icons/turnkey.png" alt="pwa" class="item-img">
                        <span>Turnkey site</span>                        
                    </div>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque repudiandae ad possimus esse repellat, recusandae ipsum error facere ex fugit. Numquam, quisquam!
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <div class="box landing">
                    <div class="item-title">
                        <img src="@/assets/dev icons/landing.png" alt="pwa" class="item-img">
                        <span>Landing page</span>                        
                    </div>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque.
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <img src="@/assets/landing.png" alt="landing" class="landing-img">
                <div class="box busines-site">
                    <div class="item-title">
                        <img src="@/assets/dev icons/busines.png" alt="pwa" class="item-img">
                        <span>Bisines site</span>                        
                    </div>
                    <p class="item-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsa quam molestias? Nostrum velit ab ipsam labore sint deleniti minus perferendis at corporis, voluptate adipisci praesentium veniam pariatur ex unde!
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <div class="box design">
                    <div class="item-title">
                        <img src="@/assets/dev icons/design.png" alt="pwa" class="item-img">
                        <span>Design</span>                        
                    </div>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque.
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <div class="box logo-design">
                    <div class="item-title">
                        <img src="@/assets/dev icons/logo-design.png" alt="pwa" class="item-img">
                        <span>Logo design</span>                        
                    </div>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam officia nulla dolores ut velit maxime cumque.
                    </p>
                    <div class="more-btn">More</div>
                </div>
                <img src="@/assets/phone.png" alt="phone" class="phone-img">
                <img src="@/assets/screen.png" alt="screen" class="screen-img">
            </div>
        </div>
    </section>
</template>

<style scoped>
.development{
    background: var(--bg-darker);    
}
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr) 0.5fr repeat(2, 1fr);
    grid-template-rows: 0.7fr 0.3fr 0.2fr 1fr 0.5fr 0.3fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    color: #fff;
}
.box{
    padding: 15px;
    border: 1px solid var(--border-color);
    color: #646464;
    position: relative;
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
}
.landing-img { 
    grid-area: 2 / 5 / 4 / 6; 
    width: 100%;
    height: 100%;
}
.busines-site { 
    grid-area: 5 / 2 / 7 / 4; 
}
.design { 
    grid-area: 5 / 4 / 7 / 5; 
}
.logo-design { 
    grid-area: 5 / 5 / 7 / 6; 
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
    position: absolute;
    bottom: 14px;
    right: 14px;
    width: 48px;
    height: 48px;
    background: var(--primary-color);
    border-radius: 50%;
    font-size: 12px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
}
</style>