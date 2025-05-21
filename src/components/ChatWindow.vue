<template>
  <div class="chat-window">
    <div v-if="messages.length === 0">Aucun message</div>
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

// Fonction pour transformer les URLs en liens HTML cliquables
function linkify(text) {
  if (!text) return ''
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`)
}

const store = useStore()
const route = useRoute()

const currentView = computed(() => store.getters.currentView)

const messages = computed(() => {
  if (currentView.value === 'servers') {
    // Retourne les messages du canal sélectionné sur le serveur
    return store.getters.messagesForSelectedChannel ?? []
  }
  if (currentView.value === 'messages') {
    // Retourne les messages privés de l'ami sélectionné
    return store.getters.messagesForSelectedFriend ?? []
  }
  // Aucun message à afficher si la vue n'est ni 'servers' ni 'messages'
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
  /* Discord blurple */
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.text {
  white-space: pre-line;
}
</style>
