import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/api/v1/usuarios', credentials)
  },

  login (credentials) {
    return Api().post('/api/v1/usuarios/authenticate', credentials)
  }
}
