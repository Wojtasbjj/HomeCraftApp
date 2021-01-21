<template>
  <div>
    <the-header></the-header>
    <p>tutaj bedzie router view</p>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
</style>
