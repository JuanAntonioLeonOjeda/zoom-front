<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          Prueba para el Proyecto 3
          {{ id }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="startStream"
          >
            Start Stream
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      id: ''
    }
  },
  methods: {
    async startStream () {
      this.id = await this.$store.dispatch('startStream')
      this.$router.push({ path: `/stream/${this.id}` })
    }
  }
}
</script>
