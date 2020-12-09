<template>
  <div class="multistep-step">
      <h2 class="multistep-step__title fs--36">
          Contact Details
      </h2>
      <p class="multistep-step__subtitle">
          Please share your contact information with us. We respect your privacy.
      </p>
    
    <div class="multistep-step__content">
        <div class="columned-fields">
            <div class="form-group">
                <label for="firstName" class="form-group__label"> First name </label>
                <div class="form-group__input-wrap is-filled" :class="showErrorIcon('first_name')">
                    <input type="text" id="firstName" placeholder="John" v-model.trim="form.first_name" @keyup="validateInput('first_name')" >
                    <div class="form-group__alert input-alert">
                        <div class="input-alert__indicator">
                            <svg width="2" height="10" viewBox="0 0 2 10"><path d="M1 8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.513 0 .936.386 1 1v5c0 .552-.448 1-1 1-.513 0-.936-.386-1-1V1c0-.552.448-1 1-1z"></path></svg>
                        </div>
                        <div class="input-alert__message">
                            <p >Please, enter your first name</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="lastName" class="form-group__label"> Last Name </label>
                <div class="form-group__input-wrap is-filled" :class="showErrorIcon('last_name')">
                    <input type="text" id="lastName" placeholder="Appleseed" autocomplete="family-name" v-model.trim="form.last_name" @keyup="validateInput('last_name')">
                    <div class="form-group__alert input-alert">
                        <div class="input-alert__indicator">
                            <svg width="2" height="10" viewBox="0 0 2 10"><path d="M1 8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.513 0 .936.386 1 1v5c0 .552-.448 1-1 1-.513 0-.936-.386-1-1V1c0-.552.448-1 1-1z"></path></svg>
                        </div>
                        <div class="input-alert__message">
                            <p >Please, enter your last name</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group" >
                <label for="phoneNumber" class="form-group__label"> Phone Number </label>
                <div class="form-group__input-wrap" :class="showErrorIcon('phone_number')">
                    <input type="tel" id="phoneNumber" placeholder="(123) 456 7890" autocomplete="tel-national" inputmode="numeric" v-model.trim="form.phone_number" @keyup="validateInput('phone_number')">
                    <div class="form-group__alert input-alert">
                        <div class="input-alert__indicator">
                            <svg width="2" height="10" viewBox="0 0 2 10"><path d="M1 8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.513 0 .936.386 1 1v5c0 .552-.448 1-1 1-.513 0-.936-.386-1-1V1c0-.552.448-1 1-1z"></path></svg>
                        </div>
                        <div class="input-alert__message">
                            <p >Please, enter a valid phone number</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="form-group__label"> Email Address </label>
                <div class="form-group__input-wrap" :class="showErrorIcon('email')">
                    <input type="email" id="email" placeholder="me@company.com" @keyup="validateInput('email')" v-model.trim="form.email">
                    <div class="form-group__alert input-alert">
                        <div class="input-alert__indicator">
                            <svg width="2" height="10" viewBox="0 0 2 10"><path d="M1 8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.513 0 .936.386 1 1v5c0 .552-.448 1-1 1-.513 0-.936-.386-1-1V1c0-.552.448-1 1-1z"></path></svg>
                        </div>
                        <div class="input-alert__message">
                            <p >Please, enter a valid email</p>
                        </div>
                    </div>
                </div>
            </div>
        <p class="fs--11 line-height--1-73">
            By clicking Get Started, I confirm that I have read and consent to the Terms of Use, Privacy Policy and receiving calls, including via cell phone, and messages, including emails, SMS, autodialed or pre-recorded calls for marketing purposes, from Janover Ventures ("JV") and its  partners using the information provided above and that I may opt out any time.
        </p>
        </div>
    </div>

    <div class="multistep-step__buttons-wrap">
        <a @click.prevent="previousStep" href="#" class="button-back">
            <svg width="5" height="8" viewBox="0 0 5 8"><g transform="scale (-1, 1)" transform-origin="center"><path d="M.27.293c.333-.36.857-.388 1.22-.083l.086.083L5 4 1.576 7.707c-.36.39-.945.39-1.306 0-.332-.36-.358-.928-.076-1.32l.077-.094L2.387 4 .27 1.707C-.062 1.347-.088.78.194.387L.27.293z"></path></g></svg> 
            Back 
        </a>
        <button @click="nextStep" type="button" class="button"> 
            Next step <svg width="5" height="8" viewBox="0 0 5 8"><path d="M.27.293c.333-.36.857-.388 1.22-.083l.086.083L5 4 1.576 7.707c-.36.39-.945.39-1.306 0-.332-.36-.358-.928-.076-1.32l.077-.094L2.387 4 .27 1.707C-.062 1.347-.088.78.194.387L.27.293z"></path></svg>
        </button>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({  
        loan_amount: "",
        errorFound: false,
        invalidInputs: [],
        firstInputDone: false,
        showErrorMessage: false,
        form: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: ''
        },
    }),
    computed:{
        nextStepValid(){
            return (this.invalidInputs.length < 1 ) ? true : false            
        }
    },
    methods: {
        nextStep(){
            if(!this.firstInputDone){
                // Next step button was clicked before any input
                this.invalidInputs = ['first_name', 'last_name', 'phone_number', 'email']
            }
            if(this.nextStepValid && this.firstInputDone){
                this.$emit('nextStep', { prop: "contactDetails", value: this.form})
            }
            
        },
        previousStep(){
            this.$emit('previousStep')
        },
        setToActive(){
            return (this.loan_amount > 0) ? "is-active": ""
        },
        validateInput(name){  
            this.firstInputDone = true;          
            if(name === 'email'){
                const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                const errorFound = pattern.test(this.form.email)                
                //if we have an error
                this.editInvalidInputs(name, errorFound)                
                return errorFound ? true : false            
            }else{
                const errorFound = (this.form[name]) ? true : false
                this.editInvalidInputs(name, errorFound)
                return errorFound
            }
            
        },
        editInvalidInputs(name, value){
            const invalidIndex = this.invalidInputs.indexOf(name)
            if(value && invalidIndex > -1 ){
                this.invalidInputs.splice(invalidIndex, 1)
            }else if(!value && invalidIndex === -1){
                this.invalidInputs.push(name)
            }else{
                return null
            }
        },
        showErrorIcon(name){
            return this.invalidInputs.indexOf(name) > -1 ? 'is-invalid' : 'is-valid'
        }
    },

}
</script>

<style>

</style>