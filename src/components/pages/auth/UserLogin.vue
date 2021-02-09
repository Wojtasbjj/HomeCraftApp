<template>
<div>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" v-if="!isLoggedIn">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://www.brandcrowd.com/gallery/brands/pictures/picture15596472609519.jpg" alt="Workflow">
    </div>
    <form class="mt-8 space-y-6" v-if="!isLoggedIn" @submit.prevent="submitForm">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <base-spinner v-if="isLoading"></base-spinner>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" v-model.trim="email" v-on:input="errorCancel">
        </div>


        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Hasło" v-model.trim="password" v-on:input="errorCancel"> 
        </div>
      </div>
      <error-dialog v-if="this.error" :error-text=this.error></error-dialog> 

      <div class="flex items-center justify-between">

        <div class="flex">
        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-blue-500 border-gray-300 rounded" v-model="rememberAccount">
        <label for="remember_me" class="ml-2 block text-sm text-gray-900">Zapamiętaj mnie</label>
        </div>

        <router-link to="/user/login" class="whitespace-nowrap text-base font-medium text-black hover:text-gray-400">Nie pamiętasz hasła ? </router-link>
        
      </div>
      <button v-if="!isLoggedIn" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-lightblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50" aria-required="true">Zaloguj się</button>


      <router-link to="/user/register" class="whitespace-nowrap text-base font-medium text-black hover:text-gray-400">Nie masz konta ? Zarejestruj się</router-link>

      <div>
      </div>
    </form>
  </div>
</div>
</div>
</template>

<script>
import ErrorDialog from '../../UI/ErrorDialog.vue';
export default {
  components: { ErrorDialog },
    data () {
        return {
            userName: '',
            email: '',
            password: '',
            formIsValid: true,
            isLoading: false,
            error: null,
            rememberAccount: this.$cookies.get('saveUser')
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        },
    },
    methods: {
      errorCancel() {
        this.error = null
      },
        async submitForm() { 
          this.error = null;
            this.fromIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            try {
               await this.$store.dispatch('login', {
                    userName: this.userName,
                    email: this.email,
                    password: this.password,
                })
            } catch (err) {
              if (err.message === 'INVALID_PASSWORD'){
                this.error = 'Błędne dane logowania'
                
              } else if (err.message === 'EMAIL_NOT_FOUND') {
                this.error = 'Nie ma takiego konta'
              } else {
                this.error = 'Nieznany błąd. Skontaktuj się z administratorem'
              }
              this.isLoading = false;
              return
            }
                this.isLoading = false;

                if(this.rememberAccount === true) {
                  this.$cookies.set('saveUser', true)
                } else {
                  this.$cookies.set('saveUser', false)
                }

            this.$router.push('/userpanel/panel')
        },
    }
}
</script>



