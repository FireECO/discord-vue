<template>
  <div class="chat-window">
    <!-- Aucun message -->
    <div v-if="messages.length === 0">
      <template v-if="isVoiceChannel && currentView === 'servers'">
        🔊 Vous avez rejoint le salon vocal.
      </template>
      <template v-else>
        Aucun message
      </template>
    </div>

    <!-- Liste des messages -->
    <div v-else>
      <div v-for="(msg, index) in messages" :key="index" class="message">
        <div class="meta">
          <strong>{{ msg.author }}</strong> - {{ msg.date }}
        </div>
        <div class="text" v-html="linkify(msg.text)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

function linkify(text) {
  if (!text) return ''
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`)
}

const store = useStore()
const route = useRoute()

const currentView = computed(() => store.getters.currentView)
const isVoiceChannel = computed(() => store.getters.isVoiceChannel)

const messages = computed(() => {
  if (currentView.value === 'servers') {
    return store.getters.messagesForSelectedChannel ?? []
  }
  if (currentView.value === 'messages') {
    return store.getters.messagesForSelectedFriend ?? []
  }
  return []
})
</script>


<style scoped>
.chat-window {
  padding: 1rem;
  font-family: sans-serif;
}

.message {
  margin-bottom: 1rem;
}

.meta {
  color: #5865f2;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.text {
  white-space: pre-line;
}
</style>
