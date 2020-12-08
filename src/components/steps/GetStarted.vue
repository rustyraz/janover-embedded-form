<template>
  <div class="multistep-step">
      <h2 class="multistep-step__title grey--text fs--36">
          Get pricing and terms 
          <br/>
          <span class="white--text">your bank can't compete</span> with.
      </h2>
      <p class="multistep-step__subtitle">
          We're making commercial property financing easier.
          <br/>
          Click the button below to get started.
      </p>
    

    <div class="multistep-step__buttons-wrap">
        <button @click="nextStep" type="button" class="button"> 
            Get Started &rarr;
        </button>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({}),
    methods: {
        nextStep(){
            this.$emit('nextStep', { })
        }
    },

}
</script>