<template>
  <div>
      <div>
      <h1 class="header-title grey--text">
        Get pricing and terms
        <br>
        <span class="white--text">your bank can't compete</span> with.
      </h1>
    </div>
    <div>
      <div class="grey--text header-sub-title mb-2" >
        We're making commercial property financing easier.
        <br>
        Click the button below to get started.
      </div>
    </div>
    <div class="mt-5">
      <h5 class="white--text">
        <a @click="nextStep" class="btn btn--orange rounded-btn orange--bg white--text">
          Get started &rarr;
        </a>
      </h5>
      
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        nextStep(){
            this.$emit('nextStep')
        }
    }
}
</script>

<style>

</style>