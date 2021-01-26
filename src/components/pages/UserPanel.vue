<template>
<div v-if="isLoggedIn">
   <div class="bg-gray-100 font-sans leading-normal tracking-normal">
      <div class="flex md:flex-row-reverse flex-wrap">
<!-- MAIN CONTENT  --> TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? TUTAJ WJEZDZA MAIN CONTENT ? 
         <div class="w-full md:w-4/5 bg-gray-100">
            <div class="container bg-gray-100 pt-16 px-6">
            </div>
         </div>
<!-- SLIDE BAR  -->
         <div class="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div class="md:relative mx-auto lg:float-right lg:px-6">
               <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
                   <li class="mr-3 flex-1">
                       <router-link to="/userpanel" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"><i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Panel</span></router-link>
                  </li>
                  <li class="mr-3 flex-1">
                       <router-link to="/userpanel" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"><i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span></router-link>
                  </li>
                  <li class="mr-3 flex-1">
                       <router-link to="/userpanel" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"><i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link 2</span></router-link>
                  </li>
                  <li class="mr-3 flex-1">
                       <router-link to="/userpanel" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"><i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link 3</span></router-link>
                  </li>
                  <li class="mr-3 flex-1">
                       <router-link to="/userpanel" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"><i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link 4</span></router-link>
                  </li>
                  <li class="mr-3 flex-1">
                     <a href="#" @click="logout" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                     <i class="fas fa-link pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Wyloguj się</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
    methods: {
        logout() {
      this.$store.dispatch('logout');
      this.$router.push('/welcome')
    }
    },
     computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        }
  },
}
</script>
