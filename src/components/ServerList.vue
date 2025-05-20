<template>
  <ul>
    <li v-for="server in servers" :key="server.id">
      <router-link :to="{ name: 'server', params: { id: server.id } }">
        {{ server.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['servers'])
  },
  mounted() {
    this.$store.dispatch('fetchServers')
  }
}
</script>