<template>
    <section class="discuss" :class="{dark: isBgDark}">
        <div class="container">
            <div class="padding discuss__wrapper">
            <div class="title-wrapper">
                <h2 class="title discuss__title">Discuss <br v-if="windowWidth > showMobileMenuBrakepoint"> the project</h2>
                <div class="subtitle">
                    <img src="@/assets/design items/arrow-right-bottom.svg" alt="arrow" v-if="windowWidth > showMobileMenuBrakepoint">
                    <h3>Successful projects start by filling out this form
                        <span class="icon-arrow-left-bottom" v-if="windowWidth <= showMobileMenuBrakepoint"></span>
                    </h3>
                </div>
            </div>
            <form>
                <div class="input-wrapper">
                    <label for="email" :class="{normalFont: emailInputFocused}">E-mail</label>
                    <input type="email" name="email"  
                        @focus="emailInputFocused = true" @blur="emailInputFocused = false"
                        :placeholder="emailInputFocused ? '' : 'E-mail*'" 
                        v-model="email"
                        class="email-input" :class="{dark: isBgDark}"
                    >
                    <div class="validateMessage">{{ validation.firstError('email') }}</div>
                </div>
                <div class="input-wrapper">
                    <label for="text" :class="{normalFont: textInputFocused}">Describe your idea</label>
                    <input type="text" name="text" 
                        @focus="textInputFocused = true" @blur="textInputFocused = false"
                        :placeholder="textInputFocused ? '' : 'Describe your idea'" 
                        v-model="text"
                        class="text-input" :class="{dark: isBgDark}"
                    >
                    <div class="validateMessage">{{ validation.firstError('text') }}</div>
                </div>
                <input type="button" value="Send" class="btn btn-rect btn-input"
                    @click="SendInfo" href="#"
                >
            </form>
        </div>
        </div>
    </section>
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
export default {
  name: 'Discuss',
  props: {
    isBgDark: Boolean
  },
  data() {
      return{
          //validator data
          text: '',
          email: '',
          //is input focus
          emailInputFocused: false,
          textInputFocused: false,
          //is form is success
          isSuccess: false,
          //for addaptive
          windowWidth: window.innerWidth,
          showMobileMenuBrakepoint: 950
      }
  },
  validators: {
      email: function (value) {
        return Validator.value(value).required().email();
      },
      text: function(value) {
        return Validator.value(value).required().minLength(10);
      }
    },
    methods: {
        SendInfo(e){
            //rezult of validation
            let rezValue = this.$validate()
                .then(function (success) {
                if (success) {    
                    e.preventDefault(); 
                    return true;                
                }
                });
            rezValue
                .then(result => this.isSuccess = result);

            //show success or error block 
            console.log(this.isSuccess)
        },
        resizeEvent(){
            this.windowWidth = window.innerWidth;
        },
    },
    created() {
        window.addEventListener("resize", this.resizeEvent);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeEvent);
    },
}
</script>

<style scoped>
.discuss{
    background: var(--bg-lighter);
}
.dark{background: var(--bg-darker) !important;}
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
.input-wrapper{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}
.input-wrapper label{
    font-family: 'Futura New Book';
    font-size: 0px;
    letter-spacing: 0.04em;
    color: #777777;
    padding-left: 13px;
    transition: all 0.2s ease-in;
    position: absolute;
    top: 20px;
    left: 0;
}
.normalFont{
    font-size: 16px !important;
    top: -20px !important;
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
    color: #fff;
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
.validateMessage{
    margin-top: 10px;
    color: #ff00008f;
    font-family: 'Futura New';
    font-size: 16px;
    font-weight: 300;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus
{
 -webkit-transition: background-color 1000s ease-in-out 0s;
  -o-transition: background-color 1000s ease-in-out 0s;
  transition: background-color 1000s ease-in-out 0s;
  -webkit-text-fill-color: #999999;
  color: #999999
}

@media screen and (max-width: 950px){
  .title-wrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .discuss__title{
        margin-bottom: 15px;
    }
}
@media screen and (max-width: 850px){
    .email-input{width: 100%;}
    .btn-input{
        align-self: center;
    }
}
</style>