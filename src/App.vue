<template>
  <div id="app"
       class="container">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Header from './components/layout/Header'

  export default {
    name: 'App',
    components: {
      Header
    },
    methods: {
      ...mapActions([
        'userInit'
      ])
    },
    mounted () {
      this.userInit()
    }
  }
</script>

<style src="./../src/assets/scss/main.scss" lang="scss"></style>
