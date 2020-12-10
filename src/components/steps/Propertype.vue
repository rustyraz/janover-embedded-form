<template>
  <div class="multistep-step long-form-top-margin">
      <h2 class="multistep-step__title fs--36 ">
          Property Type
          <div class="tooltip" @click="show_tool_tip = !show_tool_tip" @mouseenter="show_tool_tip = true" @mouseleave="show_tool_tip = false">
              <div class="tooltip__icon">
                  <svg data-v-4118cd26="" width="4" height="8" viewBox="0 0 5 8"><path d="M1.87 5.75c.45 0 .78.34.78.79 0 .44-.32.78-.78.78s-.82-.33-.82-.78.36-.79.82-.79zM1.95 0c1.13 0 2.24.68 2.24 1.88 0 1.59-1.81 1.52-1.81 2.52v.53H1.26V4.3c0-1.36 1.6-1.38 1.6-2.36 0-.44-.43-.78-.94-.78-.45 0-1.06.24-1.32.41L0 .63C.47.29 1.23 0 1.95 0z"></path></svg>
              </div>
              <div class="tooltip__body" v-show="show_tool_tip">
                <p class="">
                    If the property is a mix of multifamily and other uses such as office or retail, please select "Multifamily" as your property type.
                </p>
              </div>
          </div>
      </h2>
      <p class="multistep-step__subtitle">What type of property are you inquiring about?</p>
    
    <div class="multistep-step__content">            
        <div class="multistep-selector">
            <label 
                class="multistep-selector__option"
                :class="setToActive(option.title)"
                v-for="option in propertyTypes " :key="option.value"
            >
                <input @click="nextStep" type="radio" v-model="picked_property_type" name="propertyType" :value="option.title">
                <span >{{option.title}}</span>
                <div class="validator">
                    <svg data-v-45f2ff0a="" width="6" height="8" viewBox="0 0 8 6"><path d="M7.707.285c.36.35.388.903.083 1.285l-.083.092L3.25 6 .293 3.122c-.39-.38-.39-.997 0-1.377.36-.35.928-.378 1.32-.08l.094.08L3.25 3.247 6.293.285c.36-.35.928-.378 1.32-.08l.094.08z"></path></svg>
                </div>
            </label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{},
    data(){   
        return {            
            test: "test",     
            show_tool_tip: false,
            picked_property_type: "",
            propertyTypes: [
                { value: 1, title: "Multifamily 5+ Units"  },
                { value: 2, title: "Office"  },
                { value: 3, title: "Retail"  },
                { value: 4, title: "Industrial"  },
                { value: 5, title: "Hospitality"  },
                { value: 6, title: "1-4 Unit Residential"  },
            ],
        }
    },
    methods: {
        nextStep(){
            this.$emit('nextStep', { prop: "propertyType", value: this.picked_property_type})
        },
        setToActive(value){
            return (this.picked_property_type === value) ? "is-active": ""
        }
    },
    watch: {
        picked_property_type(){}
    }
}
</script>

<style>

</style>