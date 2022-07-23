<template>
  <div>
    <Nav/>

    <router-view/>

    <Footer/>
</div>

</template>

<script>
import axios from 'axios'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.user.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  }
}
</script>

<style lang="scss">

@import '../node_modules/bulma'
</style>

<style>
  *{
      font-family: 'Assistant', sans-serif;
      margin: 0;
      padding: 0;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      text-transform: capitalize;
      text-decoration: none !important;
      outline: none;
      border: none;
      scroll-behavior: smooth;
    }

    /* assistant-regular - latin_hebrew */
    @font-face {
      font-family: 'Assistant';
      font-style: normal;
      font-weight: 400;
      src: url('../src/assets/webfonts/assistant-v15-latin_hebrew-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('../src/assets/webfonts/assistant-v15-latin_hebrew-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../src/assets/webfonts/assistant-v15-latin_hebrew-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('../src/assets/webfonts/assistant-v15-latin_hebrew-regular.woff') format('woff'), /* Modern Browsers */
          url('../src/assets/webfonts/assistant-v15-latin_hebrew-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../src/assets/webfonts/assistant-v15-latin_hebrew-regular.svg#Assistant') format('svg'); /* Legacy iOS */
    }
</style>
