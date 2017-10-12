<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <form name="login-form" autocomplete="off">
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="Email"
              v-model="email"/>
            <br>

            <v-text-field
              name="input-10-1"
              label="Password"
              v-model="password"
              min="8"
              type="password"
              autocomplete="new-password"
            ></v-text-field>
            <br>
            <div class="error-message">{{ error }}</div>
            <v-btn class="cyan" @click="login">Login</v-btn>
          </div>
        </form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import UserService from '@/services/UserService'
  export default {
    data () {
      return {
        name: '',
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          this.error = null
          const response = await UserService.login({
            email: this.email,
            clave: this.password
          })

          this.$store.dispatch('setToken', response.data.token)
          this.$router.push({ name: 'advertisements' })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

