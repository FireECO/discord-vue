<template>
  <div class="sidebar">
    <router-link to="/dm" class="circle">💬</router-link>
    <div class="divider" />
    <router-link
      v-for="server in servers"
      :key="server.id"
      :to="{ name: 'Servers' }"
      @click.native="$store.commit('selectServer', server.id)"
      class="circle"
    >
      {{ server.name.charAt(0) }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const servers = computed(() => store.state.servers)
</script>

<style scoped>
.sidebar {
  width: 72px;
  background-color: #202225;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circle {
  width: 48px;
  height: 48px;
  background-color: #5865f2;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  text-decoration: none;
  font-weight: bold;
}
.divider {
  height: 2px;
  width: 32px;
  background-color: #444;
  margin: 12px 0;
}
</style>
