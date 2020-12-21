<template>
  <div class="multistep-step">
      <h2 class="multistep-step__title">
          Loan Amount
      </h2>
      <p class="multistep-step__subtitle">
          What is the approximate loan amount?
          <br/>
          If you aren't entirely sure, please make your best educated guess.
      </p>
    
    <div class="multistep-step__content">     
        <div class="form-group" >
            <div 
                class="form-group__input-wrap is-filled"
                :class="showErrorIcon()"
            >
                <div class="form-group__currency">$</div>
                <input @keyup="validate" type="text" id="loanAmount" v-model.trim="loan_amount_formated" placeholder="1,000,000" inputmode="numeric">
                <div 
                    class="form-group__alert input-alert"
                    @mouseover="showErrorMessage = true"
                    @mouseleave="showErrorMessage = false"
                >
                    <div class="input-alert__indicator">
                        <svg v-if="!errorFound" data-v-45f2ff0a="" width="6" height="8" viewBox="0 0 8 6"><path d="M7.707.285c.36.35.388.903.083 1.285l-.083.092L3.25 6 .293 3.122c-.39-.38-.39-.997 0-1.377.36-.35.928-.378 1.32-.08l.094.08L3.25 3.247 6.293.285c.36-.35.928-.378 1.32-.08l.094.08z"></path></svg>
                        <svg v-if="errorFound" width="2" height="10" viewBox="0 0 2 10"><path d="M1 8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.513 0 .936.386 1 1v5c0 .552-.448 1-1 1-.513 0-.936-.386-1-1V1c0-.552.448-1 1-1z"></path></svg>
                    </div>
                    <div class="input-alert__message" v-show="showErrorMessage">
                        <p >Please, enter a valid value</p>
                    </div>
                </div>
            </div>
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
        firstInputDone: false,
        showErrorMessage: false
    }),
    computed: {
        loan_amount_formated: {
            get(){
                return this.loan_amount
            },
            set(newValue){
                newValue = (isNaN(parseFloat(newValue.replace(/,/g, ''))) ) ? '0' : newValue // handle empty
                this.loan_amount = (parseFloat(newValue.replace(/,/g, ''))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        }
    },
    methods: {
        nextStep(){
            if(!this.errorFound && this.firstInputDone){                
                this.$emit('nextStep', { prop: "loanAmount", value: this.loan_amount})
            }else{
                this.errorFound = true
            }
        },
        previousStep(){
            this.$emit('previousStep')
        },
        setToActive(){
            return (this.loan_amount > 0) ? "is-active": ""
        },
        validate(){
            this.firstInputDone = true

            //this.errorFound = this.loan_amount ? false : true 
            //let onlydigits = /^-?[\d.]+(?:e-?\d+)?$/.test(this.loan_amount.replace(/,/g, ''))
            if( parseFloat(this.loan_amount.replace(/,/g, '')) == 0 || !this.loan_amount){
                this.errorFound = true
            }else {
                this.errorFound = false
            }
        },
        showErrorIcon(){
            if(this.errorFound){
                return 'is-invalid'
            }else if(this.loan_amount !==""){
                return 'is-valid'
            }else {
                return ''
            }

            //return this.invalidInputs.indexOf(name) > -1 ? 'is-invalid' : 'is-valid'
        }
    },
    filters: {
        localCurrencyFormat: function(value){
            return `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        }
    }

}
</script>

<style>

</style>