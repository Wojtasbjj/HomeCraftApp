<template>
  <div>
    <the-header v-if="!isLoggedIn"></the-header>
    <router-view></router-view>
    <the-footer v-if="!isLoggedIn"></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'


export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    this.$store.dispatch('autoLogin');
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
