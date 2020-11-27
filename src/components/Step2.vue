<template>
  <div>
      <h2 class="white--text header-title mb-0">Purpose</h2>
      <div class="header-sub-title mb-2">What is the purpose of this loan?</div>
      <div class="d-flex justify-content--space-between">
        <div 
            v-for="purpose in purposes" :key="purpose.value"
            class="text-center white--bg dark-blue--text ma-3 d-flex-rows white-form-option-box"
            @click="nextStep(purpose)"
        >
            {{purpose.title}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        purposes: {
            type: Array,
            required: true
        }
    },
    methods: {
        nextStep(value){
            this.$emit('nextStep', { prop: "purpose", value})
        }
    }

}
</script>

<style>

</style>