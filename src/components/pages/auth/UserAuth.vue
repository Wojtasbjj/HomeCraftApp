<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" v-if="!isLoggedIn">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://www.brandcrowd.com/gallery/brands/pictures/picture15596472609519.jpg" alt="Workflow">
      <!-- <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          start your 14-day free trial
        </a>
      </p> -->
    </div>
    <form class="mt-8 space-y-6" v-if="!isLoggedIn" @submit.prevent="submitForm">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="user-name" class="sr-only">User Name</label>
          <input id="user-name" name="user-name" type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nazwa Użytkownika" v-if="mode === 'signup'" v-model.trim="userName">
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" v-model.trim="email">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Hasło" v-model.trim="password"> 
        </div>
      </div>

      <div class="flex items-center justify-between">
        <!-- <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div> -->

        <div class="flex" v-if="mode === 'login'">
        <input @click="check()" id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-blue-500 border-gray-300 rounded">
        <label for="remember_me" class="ml-2 block text-sm text-gray-900">Zapamiętaj mnie</label>
        </div>

        <router-link v-if="mode === 'login'" to="/auth" class="whitespace-nowrap text-base font-medium text-black hover:text-gray-400">Nie pamiętasz hasła ? </router-link>

        <div class="flex" v-if="mode === 'signup'">
        <input id="accept" name="accept" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-blue-500 border-gray-300 rounded">
        <label for="accept" class="ml-2 block text-sm text-gray-900">Akceptuję regulamin i oddaję swoją dusze</label>
        </div>
        

          <!-- <button v-if="!isLoggedIn" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">{{submitButtonCaption}}</button> -->

        <!-- <button v-if="!isLoggedIn" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" type="button" @click="switchAuthMode">{{switchModeButtonCaption }}</button> -->


        <!-- <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div> -->
      </div>
      <button v-if="!isLoggedIn" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-lightblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50" aria-required="true">{{submitButtonCaption}}</button>


      <button v-if="mode === 'login'" @click="switchAuthMode" class="whitespace-nowrap text-base font-medium text-black hover:text-gray-400">Nie masz konta ? Zarejestruj się</button>

      <button v-if="mode === 'signup'" @click="switchAuthMode" class="whitespace-nowrap text-base font-medium text-black hover:text-gray-400">Masz już konto ? Zaloguj się</button>



      <div>
        
      </div>
    </form>
  </div>
</div>
    <!-- <form v-if="!isLoggedIn" @submit.prevent="submitForm">
        <div class="form-control">
           <label for="email">E-mail</label>
           <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
           <label for="password">Hasło</label>
           <input type="password" id="password" v-model.trim="password"/>
        </div>
        <p v-if="!formIsValid">Dane są nieprawdiłowe! Hasło musi zawierać conajmniej 6 znaków</p>
        <button v-if="!isLoggedIn" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">{{submitButtonCaption}}</button>
        <button v-if="!isLoggedIn" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" type="button" @click="switchAuthMode">{{switchModeButtonCaption }}</button>
    </form> -->
</template>

<script>
export default {
    data () {
        return {
            userName: '',
            email: '',
            password: '',
            formIsValid: true,
            mode: this.$store.state.AuthMode
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        },
        submitButtonCaption() {
            if (this.mode === 'login') {
                return 'Zaloguj się'
            } else {
                return 'Zarejestruj się'
            }
        },
        switchModeButtonCaption() {
            if (this.mode === 'login') {
                return 'lub Zarejestruj się'
            } else {
                return 'lub Zaloguj się'
            }
        },
    },
    methods: {
      check() {
        console.log(this.mode)
        console.log(this.$store.state.AuthMode)
      },
        async submitForm() { 
            this.fromIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }
            if(this.mode === 'login') {
                await this.$store.dispatch('login', {
                    userName: this.userName,
                    email: this.email,
                    password: this.password
                })
            } else {
                this.$store.dispatch('signup', {
                    email: this.email,
                    password: this.password
                })
            }
            this.$router.push('/userpanel')
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup'; 
            } else {
                this.mode = 'login'
            }
        },
    }
}
</script>



