<template>
  <div>
    <the-header></the-header>
    <welcome-page></welcome-page>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import WelcomePage from './components/pages/WelcomePage.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    WelcomePage
  }
}
</script>

<style>
</style>
