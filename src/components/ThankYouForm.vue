<template>
    <div class="thank">
        <div class="container">
            <div class="thank__wrapper">
                <div class="thank__title">
                    Thank you <br> for your <br> request
                    <p>Our manager will contact you within an hour</p>
                </div>
            </div>
            <img src="@/assets/Thank you.png" alt="Thank you" class="bg-image">
            <button class="btn thank-btn" @click="$emit('BackToMain')">
                <a href="#">
                    Back main <br> page
                </a>
            </button>
        </div>
    </div>    
</template>

<style scoped>
.thank{
    background: var(--bg-lighter);
    overflow: hidden;
}
.thank__wrapper{
    width: 80%;
    min-height: 80vh;
    padding-top: 15px;
    position: relative;
    z-index: 5;
}
.thank__title{
    font-size: 100px;
    line-height: 110px;
    color: #fff;
    font-weight: 600;
    position: relative;
}
.thank__title p{
    font-size: 30px;
    line-height: 36px;
    position: absolute;
    bottom: 15px;
    left: 55%;
    color: rgb(199, 199, 199);
    font-weight: normal;
    width: 50%;
    letter-spacing: 0.04em;
}
.bg-image{
    position: absolute;
    bottom: 5vh;
    left: 60vw;
    width: 70vh;
    z-index: 0;
}
.thank-btn{
    position: absolute;
    right: 0;
    top: 20%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    z-index: 10;
}
.thank-btn a{
    text-decoration: none;
    color: #fff;
    font-size: 18px;
}
@media screen and (max-width: 1300px){
    .thank-btn{
        right: 75px;
    }
}
@media screen and (max-width: 1150px){
    .thank__title{
        font-size: 80px;
        line-height: 90px;
    }
    .thank-btn{
        top: 10%;
    }
    .thank__title p{
        left: 50%;
    }
}
@media screen and (max-width: 1000px){
    .thank__title{
        font-size: 50px;
        line-height: 55px;
    }
    .thank__wrapper{
        width: 70%;
        padding-top: 0px;
    }
    .thank__title p{
        width: 60%;
        left: 50%;
        font-size: 20px;
        line-height: 26px;
        bottom: 0;
    }
    .thank-btn{
        top: 5%;
        width: 120px;
        height: 120px;
        font-size: 14px;
    }
}
@media screen and (max-width: 850px){
    .thank__wrapper{
        width: 80%;
        display: flex;
        flex-direction: column;
    }
    .thank__title p{
        position: relative;
        bottom: auto;
        left: auto;
        width: 80%;
        margin-top: 15px;
    }
    .bg-image{
        left: 0;
        width: 80vw;
    }
    .thank-btn{
        top: 40%;
    }
}
@media screen and (max-width: 775px){
    .thank__wrapper{
        width: 100%;
    }
    .thank__title{
        font-size: 40px;
        line-height: 45px;
    }
}
@media screen and (max-width: 500px){
    .thank__title p{
        width: 90%;
    }
    .thank-btn{
        top: 33%;
    }
}
@media screen and (max-width: 400px){
    .thank__title{
        font-size: 40px;
        line-height: 40px;
    }
    .thank__title p{
        font-size: 18px;
        line-height: 20px;
    }
    .thank-btn{
        width: 100px;
        height: 100px;
        top: 31%;
    }
    .thank-btn a{
        font-size: 14px;
    }
    .bg-image{
        bottom: 40vh;
    }
}
@media screen and (max-width: 350px){
    .thank__title{
        font-size: 40px;
        line-height: 50px;
    }
}
</style>