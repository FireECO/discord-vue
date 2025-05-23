<template>
  <div class="sidebar">
    <!-- Lien générique vers la section DM -->
    <router-link to="/messages" class="circle">💬</router-link>
    <div class="divider" />

    <!-- Liste des amis (DMs) -->
    <router-link v-for="friend in friends" :key="friend.id" :to="{ name: 'Chat', params: { dmId: friend.id } }"
      class="circle" :title="friend.name">
      <img :src="friend.logo" alt="avatar" class="avatar" />
    </router-link>

    <div class="divider" />

    <!-- Liste des serveurs -->
    <router-link v-for="server in servers" :key="server.id" :to="{ name: 'Servers' }"
      @click.native="$store.commit('selectServer', server.id)" class="circle" :title="server.name">
      {{ server.name.charAt(0) }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const servers = computed(() => store.state.servers)
const friends = computed(() => store.state.friends)
</script>

<style scoped>
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

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
