<template>
    <form v-if="!isLoggedIn" @submit.prevent="submitForm">
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
    </form>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
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
        async submitForm() { 
            this.fromIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }
            if(this.mode === 'login') {
                await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
            } else {
                this.$store.dispatch('signup', {
                    email: this.email,
                    password: this.password
                })
            }
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup'; 
            } else {
                this.mode = 'login'
            }
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

