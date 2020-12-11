<template>
  <div class="multistep-step  long-form-top-margin">
      
      <div class="text-align--center round-orange-div">
       <svg width="248px" height="248px" viewBox="0 0 248 248" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Success check_big</title>
            <defs>
                <circle id="path-1" cx="30" cy="30" r="30"></circle>
                <filter x="-220.8%" y="-195.8%" width="100.7%" height="100.7%" filterUnits="objectBoundingBox" id="filter-2">
                    <feMorphology radius="9.5" operator="erode" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                    <feOffset dx="0" dy="15" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                    <feMorphology radius="9.5" operator="dilate" in="SourceAlpha" result="shadowInner"></feMorphology>
                    <feOffset dx="0" dy="15" in="shadowInner" result="shadowInner"></feOffset>
                    <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
                    <feGaussianBlur stdDeviation="42" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.917647059   0 0 0 0 0.431372549   0 0 0 0 0.231372549  0 0 0 0.427174388 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
            </defs>
            <g id="Embedded-form-(multistep)-320" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Success-check_big" transform="translate(19.000000, 19.000000)">
                    <g id="Oval">
                        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                        <use stroke="#EC820E" stroke-width="2" xlink:href="#path-1"></use>
                    </g>
                    <polyline id="Stroke-1-Copy" stroke="#F29531" stroke-width="3" transform="translate(30.500000, 30.000000) rotate(-270.000000) translate(-30.500000, -30.000000) " points="26.5 23.5 34.5 31.6256212 29.7 36.5"></polyline>
                </g>
            </g>
        </svg>
      </div>
      <h2 class="multistep-step__title fs--34 mb-2">
          Thank you, {{name}}. <br>
          Your Information Has Been Received!
      </h2>
      <p class="multistep-step__subtitle fs--15" v-if="!already_selected_rating">
          While you're waiting for us to get back to you with an industrial property mortgage quote... <br>
          Have you had a 5 star experience with us? Click below.          
      </p>

      <p class="multistep-step__subtitle fs--20" v-else>Thanks for the positive feedback! <span class="orange--text fs--xl">☺️</span> </p>
    
    <div class="multistep-step__content">     
        <div class="d-flex mt-2 justify-content--center" v-if="!already_selected_rating">
          <span class="star-rating mr-1 mb-2"
            v-for="(star, index) in 5"
            :key="index" 
            @click="selectStar(star)"   
            @mouseenter="hoverUpdate(star)"     
          >
            <img :src="require(`@/assets/${pickStar(star)}.svg`)"  alt="">
          </span>
      </div>

      <!-- SECTION TO SHOW IF THE USER HAS ALREADY SELECTED A RATING -->
      <div v-if="already_selected_rating" class="ml-3 mr-3 opaque--bg d-flex text-align--center">
          <div class="fs--15 p-2 text--white flex--1">
              Can you please share your 5 star experience by leaving us a Google Review?
          </div>
          <div class="flex--1 p-2">
              <div class="google_btn d-flex" @click="openModal">
                  <div class="logo_section">
                      <p class="text--center ma-1">
                          <img :src="require('@/assets/google-icon_2.svg')" width="90%" alt="" > 
                      </p>
                     
                  </div>
                  <div class="blue_section white--text">
                      <p class="">                          
                        Click here to leave us a review on Google!
                      </p>
                  </div>
                  
              </div>
              
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
        selected_stars: 0, //by default we set the star rating to 3,
        already_selected_rating: false,
        show_popup: false
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
        hoverUpdate(value){
            this.selected_stars = value
        },
        updateForm(){
            this.$emit('updateForm', { prop: "rating", value: this.selected_stars})
            console.log(this.selected_stars)
        },
        openModal(){
            this.$emit('openModal')
        }
    }
}
</script>

<style>

</style>