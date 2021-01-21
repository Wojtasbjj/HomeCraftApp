<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
           <label for="email">E-mail</label>
           <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
           <label for="password">Hasło</label>
           <input type="password" id="password" v-model.trim="password"/>
        </div>
        <p v-if="!formIsValid">Dane są nieprawdiłowe! Hasło musi zawierać conajmniej 6 znaków</p>
        <button>{{submitButtonCaption}}</button>
        <button type="button" @click="switchAuthMode">{{switchModeButtonCaption }}</button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login'
        }
    },
    computed: {
        submitButtonCaption() {
            if (this.mode === 'login') {
                return 'Zaloguj się'
            } else {
                return 'Zarejestruj się'
            }
        },
        switchModeButtonCaption() {
            if (this.mode === 'login') {
                return 'nie masz konta? Zarejestruj się'
            } else {
                return 'masz konto? Zaloguj się'
            }
        },
    },
    methods: {
        submitForm() { 
            this.fromIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }
            if(this.mode === 'login') {
                //...
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

