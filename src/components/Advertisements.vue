<template>
  <v-layout column>
    <v-flex row wrap>
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Advertisements</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-for="advertisement in advertisements"
            :key="advertisement._id">
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                :src="advertisement.foto">
                
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline">{{advertisement.nombre}}</h3>
                  <div>{{advertisement.precio}} €</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AdvertisementService from '@/services/AdvertisementService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      advertisements: null
    }
  },
  async mounted () {
    let response = await AdvertisementService.advertisements({ token: this.$store.state.token })
    this.advertisements = response.data.rows
  }
}
</script>
