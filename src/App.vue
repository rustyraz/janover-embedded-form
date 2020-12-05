<template>
  <div id="app">
    <div class="container container-multistep">
      <MainPage v-if="false" />
      <main-form />
    </div>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage.vue'
import MainForm from '@/components/MainForm.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    MainForm
  }
}
</script>
<style src="./styles/style_2.scss" lang="scss"></style>
