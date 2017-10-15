import Api from '@/services/Api'

export default {
  advertisements (params) {
    return Api().get('/api/v1/anuncios', {
      params: {
        token: params.token
      }
    })
  }
}
