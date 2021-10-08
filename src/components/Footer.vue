<template>
    <footer>
        <div class="container footer">
            <div class="footer__info">
                <img src="@/assets/Logo.svg" alt="Maricano Digital">
                <p>We are in social networks</p>
                <div class="socials-wrapper">
                    <div class="social">
                        <img src="@/assets/instagram.png" alt="insta">
                    </div>
                    <div class="social">
                        <img src="@/assets/facebook.png" alt="fb">
                    </div>
                    <div class="social">
                        <img src="@/assets/telegram.png" alt="telegram">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer{
    background: var(--bg-lighter);
    min-height: 200px;
}
.footer{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 0 50px;
}
.footer__info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.footer__info img{
    width: 250px;
    margin-bottom: 25px;
}
.footer__info p{
    color: #fff;
    font-size: 16px;
    font-family: 'Futura New Book';
    margin-bottom: 15px;
}
.socials-wrapper{
    display: flex;
}
.social{
    background: var(--bg-darker);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-right: 10px;
}
.social img{
    width: 19px;
    height: 19px;
}
</style>