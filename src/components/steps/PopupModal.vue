<template>
      <div class="popup-modal d-flex" >
          <div class="popup-text-section text-align--center white--bg p-2">
              <p class="text--right mb-0 text-align--right">
                  <a href="#" title="Close" @click.prevent="closeModal" class="fs--lg orange--text fw-5 mr-1 mt-0" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                            <g stroke="#EC820E" stroke-width="2">
                                <g>
                                    <path d="M5 0L10 5.001 5 10" transform="translate(-957 -254) translate(958 255) matrix(-1 0 0 1 15 0)"/>
                                    <path d="M0 0L5 5.001 0 10" transform="translate(-957 -254) translate(958 255)"/>
                                </g>
                            </g>
                        </g>
                    </svg>

                  </a>
              </p>
              <h3 class="dark-blue--text fs--20 fw--500 mb-3 mt-2">Thanks for the positive feedback! <span class="orange--text fs--20">☺️</span>  </h3>
              <p class="dark-blue--text fs--15 mb-1 ">
                Can you please share your 5 star experience <br> by leaving us a Google Review?
              </p>
              <div class="d-flex justify-content--center align-items--center">
                <div class="google_btn d-flex">
                    <div class="logo_section">
                        <p class="text-align--center ma-1">
                            <img :src="require('@/assets/google-icon_2.svg')" width="40px" alt=""> 
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
</template>

<script>
export default {
    methods: {
        closeModal(){
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>