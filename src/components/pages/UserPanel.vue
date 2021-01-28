<template>
<div class="h-screen overflow-hidden flex items-center justify-center bg-gray-900" v-if="isLoggedIn">
    <div class="flex flex-wrap bg-gray-100 w-full h-screen">
    <div class="w-3/12 bg-gray-900 rounded p-3 shadow-lg">
        <div class="flex items-center space-x-4 p-2 mb-5">
            <img class="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="Nazwa Użytkownika">
            <div>
                <h4 class="font-semibold text-lg text-white capitalize font-poppins tracking-wide">Nazwa Użytkownika</h4>
                <span class="text-sm tracking-wide flex items-center space-x-1">
                    <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg><span class="text-gray-600">Verified</span>
                </span>
            </div>
        </div>
        <ul class="space-y-2 text-sm">

           <li>
                <div class="flex items-center space-x-3 text-white p-2 rounded-md font-medium bg-gray-700 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                    </span>
                    <span>Moja spiżarka</span>
                </div>
            </li>

            <li class="ml-4">
                <router-link to="/userpanel" class="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-700 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                    </span>
                    <span>Alkohole</span>
                </router-link>
            </li>

            <li class="ml-4">
                <router-link to="/userpanel" class="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-700 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                    </span>
                    <span>Konopie</span>
                </router-link>
            </li>

            <li class="ml-4">
                <router-link to="/userpanel" class="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-700 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                    </span>
                    <span>Miody</span>
                </router-link>
            </li>

            <li class="ml-4">
                <router-link to="/userpanel" class="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-700 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                    </span>
                    <span>Wędliny</span>
                </router-link>
            </li>

            <li>
                <router-link to="/userpanel" class="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-700 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                    </span>
                    <span>Wiadomości</span>
                </router-link>
            </li>

            <li>
                <router-link to="/userpanel" class="flex items-center space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-700 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                    </span>
                    <span>Ustawienia</span>
                </router-link>
            </li>

        </ul>
    </div>

    <div class="w-9/12">
        <div class="p-4 text-gray-500">
            Dashboard
            <router-view></router-view>
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
