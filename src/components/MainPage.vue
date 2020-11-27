<template>
  <div class="container dark-blue--bg white--text">
    <!-- STEP PROGRESS SECTION -->
    <div class="mb-5">
      <ul class="step-progressbar">
        <li
          v-for="current_step in totalSteps"
          :key="current_step"
          class="step-progressbar__item"
          :class="getStepClass(current_step)"
        ></li>
      </ul>
    </div>
    <!-- STEP PROGRESS SECTION -->

    <step-0 v-show="step === 0" @nextStep="nextStep"/>
    <step-1 v-show="step === 1" :propertyTypes="propertyTypes" @nextStep="nextStep" />
    <step-2 v-show="step === 2" :purposes="purposes" @nextStep="nextStep" />
    <step-3 v-show="step === 3" @updateForm="updateForm" />
    <step-4 v-show="step === 4" @updateForm="updateForm" />
    <step-5 v-show="step === 5 || step === 6" @updateForm="updateForm" />

    <section class="step-buttons mt-3" v-if="showStepsNavigationSection">
      <a @click="previousStep" class="btn orange-text--onhover"><span class="orange--text fw-5 mr-0"> &lt; </span> Back</a>
      <a v-show="step != 2" @click="nextStep" class="btn rounded-btn btn--orange orange--bg white--text">Next Step > </a>
    </section>

    <p class="mt-5 grey--text">
      The final form: <br>
      {{form}}
    </p>
  </div>
</template>

<script>
import Step0 from './Step0.vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import Step4 from './Step4.vue'
import Step5 from './Step5.vue'
export default {
  components: {
    Step0,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  data: () => ({
    step: 0,
    totalSteps: 5,   
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
    showStepsNavigationSection(){
      if(!this.step || this.step === 1) {
        return false
      }else{
        return true
      }
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
      this.step < this.totalSteps ? this.step++ : this.totalSteps

      // The val object is OPTIONAL but should have this structure { prop: 'name_of_prop_in_FORM', value: 'value_to_change'}
      if(val){
        this.updateForm(val)
      }
    },
    previousStep(){
      this.step > 0 ? this.step-- :  0
    },
    getStepClass(value){
      if(value < this.step){
        return "step-progressbar__item--complete"
      }else if(value == this.step){
        return "step-progressbar__item--active"
      }else{
        return ""
      }
    }
  }
}
</script>

<style>

</style>