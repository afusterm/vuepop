<template>
  <div>
    <input type="text" name="name" v-model="name" placeholder="Name"/>
    <br>
    <input type="email" name="email" v-model="email" placeholder="Email"/>
    <br>
    <input type="password" name="password" v-model="password" placeholder="Password">
    <br>
    <div class="error">{{ error }}</div>
    <button @click="register">Register</button>
  </div>
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
.error {
  color: red;
}
</style>
