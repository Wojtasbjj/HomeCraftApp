<template>
  <div>
    <the-header></the-header>
    <welcome-page></welcome-page>
    <user-auth></user-auth>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import WelcomePage from './components/pages/WelcomePage.vue'
import UserAuth from './components/pages/auth/UserAuth.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    WelcomePage,
    UserAuth,
  }
}
</script>

<style>
</style>
