<template>
  <div class="app-container">
    <div class="sidebar">
      <!-- 🔁 BOUTON POUR CHANGER DE VUE -->
      <div class="server-button" @click="switchView" :title="tooltip">
        <img
          v-if="currentView === 'servers'"
          src="https://img.icons8.com/?size=100&id=0kaKgNsVGdI2&format=png&color=000000"
          alt="Messages privés"
        />
        <img
          v-else
          src="https://img.icons8.com/?size=100&id=2ssCjBEHWZuy&format=png&color=000000"
          alt="Serveurs"
        />
      </div>

      <!-- Liste dynamique selon la vue -->
      <ServerList v-if="currentView === 'servers'" />
      <FriendList v-else />
    </div>

    <ChannelList v-if="currentView === 'servers'" />
    <div class="chat-area">
      <ChatHeader />
      <ChatWindow />
      <MessageInput />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ServerList from './components/ServerList.vue'
import FriendList from './components/FriendList.vue'
import ChannelList from './components/ChannelList.vue'
import ChatWindow from './components/ChatWindow.vue'
import MessageInput from './components/MessageInput.vue'
import ChatHeader from './components/ChatHeader.vue'

const store = useStore()
const currentView = computed(() => store.getters.currentView)

const switchView = () => {
  store.commit('setCurrentView', currentView.value === 'servers' ? 'dm' : 'servers')
}

const tooltip = computed(() =>
  currentView.value === 'servers' ? 'Passer aux messages privés' : 'Revenir aux serveurs'
)
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}
</style>
