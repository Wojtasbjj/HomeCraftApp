<template>
<div class="relative bg-gray-900">
  <div class="h-20 max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img class="h-10 w-auto sm:h-10" src="https://www.brandcrowd.com/gallery/brands/pictures/picture15596472609519.jpg" alt="">
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        <!-- nawigacja jest w tym miejscu jbc -->
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

           <router-link v-if="!isLoggedIn" to="/user/login" class="whitespace-nowrap text-base font-medium text-white hover:text-gray-400">Zaloguj się</router-link>

        <router-link v-if="!isLoggedIn" to="/user/register" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Dołącz</router-link>

        <button @click="logout" v-if="isLoggedIn" to="/auth" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Wyloguj</button>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>
