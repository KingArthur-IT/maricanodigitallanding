<template>
    <section class="discuss">
        <div class="container padding discuss__wrapper">
            <div class="title-wrapper">
                <h2 class="title discuss__title">Discuss <br> the project</h2>
                <div class="subtitle">
                    <img src="@/assets/design items/arrow-right-bottom.svg" alt="arrow">
                    <h3>Successful projects start by filling out this form</h3>
                </div>
            </div>
            <form>
                <input type="email" name="" id="" placeholder="E-mail*" class="email-input">
                <input type="text" name="" id="" placeholder="Describe your idea" class="text-input">
                <input type="button" value="Send" class="btn btn-rect btn-input">
            </form>
        </div>
    </section>
</template>

<style scoped>
.discuss{
    background: var(--bg-lighter);
}
.discuss__wrapper{
}
.title-wrapper{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 10px;
}
.discuss__title{
    margin-right: 58px;
}
.subtitle{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: #fff;
}
.subtitle img{
    width: 10px;
    height: 10px;
    margin-bottom: 17px;
}
.subtitle h3{
    font-family: 'Futura New Book';
    font-size: 24px;
    line-height: 28px;
    padding-bottom: 10px;
    font-weight: 400;
    letter-spacing: 0.04em;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    min-height: 250px;
}
.email-input, .text-input{
    font-family: 'Futura New Book';
    font-size: 16px;
    line-height: 19px;
    padding: 13px;
    height: 36px;
    background: var(--bg-lighter);
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    color: #999999;
    letter-spacing: 0.04em;
}
.email-input{width: 550px;}
.text-input{width: 100%;}
.btn-input{
    font-weight: 500;
    width: 150px;
    height: 55px;
    align-self: flex-end;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.04em;
}
</style>