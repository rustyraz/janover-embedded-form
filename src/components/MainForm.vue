<template>
  <div class="wrapper">
      <div class="steps">
          <div class="steps__progress progress">
              <div class="progress__bar">
                  <span :style="`width: ${progress_percent}%`"></span>
              </div>
              <div class="progress__points">
                <span 
                    class="progress__point" 
                    v-for="point_step in totalSteps" :key="point_step"
                    :class="getStepClass(point_step)"
                ></span>
              </div>

            <property-type v-show="step === 1" @nextStep="nextStep" />
            <purpose v-show="step === 2" @nextStep="nextStep" @previousStep="previousStep" />
            <loan-amount v-show="step === 3" @nextStep="nextStep" @previousStep="previousStep" />
            <contact-details v-show="step === 4" @nextStep="nextStep" @previousStep="previousStep" />
            <thank-you v-show="step === 5" :name="form.name" @updateForm="updateForm"/>
          </div>
      </div>
  </div>
</template>

<script>
import PropertyType from './steps/Propertype'
import Purpose from './steps/Purpose'
import LoanAmount from './steps/LoanAmount'
import ContactDetails from './steps/ContactDetails'
import ThankYou from './steps/ThankYou'
export default {
    components: {
        PropertyType,
        Purpose,
        LoanAmount,
        ContactDetails,
        ThankYou
    },
data: () => ({
    step: 1,
    totalSteps: 6,
    currentStepIsValid: false,   
    form: {
      propertyType: null,
      purpose: null,
      loanAmount: 0,
      contactDetails: null,
      rating: 0
    }, 
    propertyTypes: [
      { value: 1, title: "Multifamily 5+ Units"  },
      { value: 2, title: "Office"  },
      { value: 3, title: "Retail"  },
      { value: 4, title: "Industrial"  },
      { value: 5, title: "Hospitality"  },
      { value: 6, title: "1-4 Unit Residential"  },
    ],
    purposes: [
      { value: 'purchase', title: "Purchase" },
      { value: 'refinance', title: "Refinance" },
      { value: 'construction', title: "Construction" }
    ]
  }),
  computed: {
    progress_percent(){
        return (this.step * 20) -20
    },
    getName(){
      if(this.form.contactDetails && this.form.contactDetails.first_name){
        return this.form.contactDetails.first_name + ' ' + this.form.contactDetails.last_name
      }else {
        return ''
      }
    },
    showStepsNavigationSection(){
      if(!this.step || this.step === 1 || this.step === 5) {
        return false
      }else{
        return true
      }
    },
    validateStep(){
        return true
    //   switch (this.step) {
    //     case 3:
    //       // If the amount is empty or zero then next step will be invalid
    //       return this.form.loanAmount > 0 ? true : false
    //     case 4:
    //       //must accept terms
    //       return (this.form.contactDetails && this.form.contactDetails.accepted_terms )? true : false
    //     default:
    //       return true
    //   }
    }
  },
  methods: {
    updateForm(val){
      // The val object is OPTIONAL but should have this structure { prop: 'name_of_prop_in_FORM', value: 'value_to_change'}
      if(val){
        this.form[val.prop] = val.value
      }
    },
    nextStep(val){
        console.log(val)
      if(this.validateStep){
        this.step < this.totalSteps ? this.step++ : this.totalSteps

        // The val object is OPTIONAL but should have this structure { prop: 'name_of_prop_in_FORM', value: 'value_to_change'}
        if(val){
          this.updateForm(val)
        }
      }
      
    },
    previousStep(){
      this.step > 0 ? this.step-- :  0
    },
    getStepClass(value){
      if(value < this.step){
        return "is-previous"
      }else if(value  == this.step){
        return "is-active"
      }else{
        return ""
      }
    }
  }
}
</script>

<style>

</style>