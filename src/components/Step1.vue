<template>
  <div>
      <h2 class="white--text header-title mb-0">Property Type</h2>
      <div class="header-sub-title mb-2">What type of property are you inquiring about?</div>
      <div class="d-flex justify-content--space-between">
        <div 
            v-for="property in propertyTypes" :key="property.value"
            class="text-center white--bg dark-blue--text ma-3 d-flex-rows white-form-option-box"
            @click="nextStep(property)"
        >
            {{property.title}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        propertyTypes: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        selected_value: null
    }),
    methods: {
        nextStep(value){
            this.$emit('nextStep', { prop: "propertyType", value})
        }
    }

}
</script>

<style>

</style>