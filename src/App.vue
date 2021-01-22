<template>
  <div>
    <the-header></the-header>
    <!-- <welcome-page v-if="!isLoggedIn"></welcome-page>
    <user-auth v-if="!isLoggedIn"></user-auth> -->
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
// import WelcomePage from './components/pages/WelcomePage.vue'
// import UserAuth from './components/pages/auth/UserAuth.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    // WelcomePage,
    // UserAuth,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>

<style>
</style>
