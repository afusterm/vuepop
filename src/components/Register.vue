<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="register-form" autocomplete="off">
          <v-text-field
            label="Name"
            v-model="name"/>
          <br>
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
          <v-btn class="cyan" @click="register">Register</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import UserService from '@/services/UserService'
  import Panel from '@/components/Panel'
  export default {
    components: {
      Panel
    },
    data () {
      return {
        name: '',
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        try {
          await UserService.register({
            nombre: this.name,
            email: this.email,
            clave: this.password
          })
        } catch (error) {
          console.error('Error en register', error)
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
