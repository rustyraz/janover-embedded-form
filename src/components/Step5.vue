<template>
  <div>
      <div class="text--center">
          <img :src="require('@/assets/orange-tick.png')" width="200px" alt="">
      </div>
      <h2 class="white--text header-title mb-0 mt-0">
          Thanks, {{name}}.
          <br>
          Your Information Has Been Received!
      </h2>
      <div class="fs--md fw-3" v-if="!already_selected_rating">
          While you're waiting for us to get back to you with an industrial property mortgage quote...
          <br>
          Have you had a 5 star experience with us? Click below.
      </div>

      <div class="d-flex mt-2 justify-content--center" v-if="!already_selected_rating">
          <span class="star-rating ma-1"
            v-for="(star, index) in 5"
            :key="index" 
            @click="selectStar(star)"        
          >
            <img :src="require(`@/assets/${pickStar(star)}.svg`)" alt="">
          </span>
      </div>

      <!-- SECTION TO SHOW IF THE USER HAS ALREADY SELECTED A RATING -->
      <div v-if="already_selected_rating" class="p-3 opaque--bg d-flex">
          <div class="fs--md text--white flex--1">
              Can you please share your 5 star experience by leaving us a Google Review?
          </div>
          <div class="flex--1">
              <div class="google_btn">
                 <img :src="require('@/assets/google-icon_2.svg')" width="50px" alt=""> 
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ""
        }
    },
    data: () => ({
        selected_stars: 3, //by default we set the star rating to 3,
        already_selected_rating: false
    }),
    methods: {
        selectStar(value){
            this.selected_stars = value
            this.already_selected_rating = true
            this.$emit('setSelected', value)
            this.updateForm()
        },
        /*A method to select the stars depending on the selected value */
        pickStar(value){
            if(value <= this.selected_stars){
                return 'star-orange'
            } else {
                return 'star-grey'
            }
        },
        updateForm(){
            this.$emit('updateForm', { prop: "rating", value: this.selected_stars})
            console.log(this.selected_stars)
        }
    }
}
</script>

<style>

</style>