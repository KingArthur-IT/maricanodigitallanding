<template>
    <div class="software">
        <div class="container">
            <div class="software__title-wrapper">
                <h3 class="software__title">
                    List of Software Technologies we use
                </h3>
                <img src="@/assets/design items/arrow-left-bottom.svg" alt="arrow">
            </div>
            <div class="list">
                <div class="list__item">
                    <div>
                        <img src="@/assets/tech list/php.png" alt="php">
                    </div>
                    <p>PHP</p>
                </div>
                <div class="list__item">
                    <div>
                        <img src="@/assets/tech list/mysql.png" alt="mysql">
                    </div>
                    <p>MySQL</p>
                </div>
                <div class="list__item">
                    <div>
                        <img src="@/assets/tech list/nodejs.png" alt="nodejs">
                    </div>
                    <p>NodeJS</p>
                </div>
                <div class="list__item">
                    <div>
                        <img src="@/assets/tech list/react.png" alt="react">
                    </div>
                    <p>React</p>
                </div>
                <div class="list__item">
                    <div>
                        <img src="@/assets/tech list/figma.png" alt="figma">
                    </div>
                    <p>Figma</p>
                </div>
                <div class="list__item">
                    <div>
                        <img src="@/assets/tech list/aftereffects.png" alt="aftereffects">
                    </div>
                    <p>AfterEffects</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.software{
    z-index: 2;
    background: var(--bg-lighter);
    position: relative;
}
.software__title-wrapper{
    display: flex;
    align-items: baseline;
    margin-bottom: 50px;
}
.software__title-wrapper img{
    width: 14px;
    height: 14px;
}
.software__title{
    font-size: 60px;
    line-height: 70px;
    color: #fff;
    font-weight: 400;
    margin-right: 30px;
}
.list
{
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 33px 0;
    display: flex;
    justify-content: space-between;
}
.list__item{
    display: flex;
    flex-direction: column;
    flex-basis: 15.3%;
}
.list__item div{
    background: var(--bg-darker);
    height: 90px;
    margin-bottom: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.list__item p{
    font-family: 'Futura New Book';
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    text-align: center;
    font-weight: 400;
}
</style>