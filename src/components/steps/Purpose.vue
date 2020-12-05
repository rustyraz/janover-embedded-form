<template>
  <div class="multistep-step">
      <h2 class="multistep-step__title">
          Purpose
      </h2>
      <p class="multistep-step__subtitle">What is the purpose of this loan?</p>
    
    <div class="multistep-step__content">         
        <div class="multistep-selector">
            <label 
                class="multistep-selector__option"
                :class="setToActive(option.title)"
                v-for="option in purposes " :key="option.value"
            >
                <input type="radio" @change="nextStep" v-model="picked_purpose" name="propertyType" :value="option.title">
                <span >{{option.title}}</span>
                <div class="validator">
                    <svg data-v-45f2ff0a="" width="6" height="8" viewBox="0 0 8 6"><path d="M7.707.285c.36.35.388.903.083 1.285l-.083.092L3.25 6 .293 3.122c-.39-.38-.39-.997 0-1.377.36-.35.928-.378 1.32-.08l.094.08L3.25 3.247 6.293.285c.36-.35.928-.378 1.32-.08l.094.08z"></path></svg>
                </div>
            </label>
        </div>
    </div>
    <div class="multistep-step__buttons-wrap">
        <a @click.prevent="previousStep" href="#" class="button-back">
            <svg width="5" height="8" viewBox="0 0 5 8"><g transform="scale (-1, 1)" transform-origin="center"><path d="M.27.293c.333-.36.857-.388 1.22-.083l.086.083L5 4 1.576 7.707c-.36.39-.945.39-1.306 0-.332-.36-.358-.928-.076-1.32l.077-.094L2.387 4 .27 1.707C-.062 1.347-.088.78.194.387L.27.293z"></path></g></svg> 
            Back 
        </a>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({  
        picked_purpose: "",      
        purposes: [
            { value: 'purchase', title: "Purchase" },
            { value: 'refinance', title: "Refinance" },
            { value: 'construction', title: "Construction" }
        ]
    }),
     methods: {
        nextStep(){
            this.$emit('nextStep', { prop: "purpose", value: this.picked_purpose})
        },
        previousStep(){
            this.$emit('previousStep')
        },        
        setToActive(value){
            return (this.picked_purpose === value) ? "is-active": ""
        }
    },
    watch:{ }

}
</script>

<style>

</style>