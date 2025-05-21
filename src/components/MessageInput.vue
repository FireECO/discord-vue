<template>
  <div class="message-input">
    <input v-model="message" @keydown.enter="send" placeholder="Écris un message..." />
    <button @click="send">Envoyer</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const message = ref('')

function formatDate() {
  const date = new Date()
  return date.toLocaleDateString('fr-FR') + ' ' +
    date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

const send = () => {
  if (!message.value.trim()) return;

  if (store.state.currentView === 'servers' && store.state.selectedTextChannel) {
    // Message sur serveur
    store.commit('sendMessage', {
      serverId: store.state.selectedServerId,
      channelName: store.state.selectedTextChannel,
      message: {
        author: 'Moi',
        text: message.value,
        date: formatDate()
      }
    })
  } else if (store.state.currentView === 'messages' && store.state.selectedFriendId) {
    // Message en DM
    store.commit('sendPrivateMessage', {
      friendId: store.state.selectedFriendId,
      message: {
        author: 'Moi',
        text: message.value,
        date: formatDate()
      }
    })
  } else {
    // Aucun canal ni ami sélectionné
    return;
  }

  message.value = ''
}

</script>

<style scoped>
.message-input {
  display: flex;
  padding: 8px;
  background-color: #40444b;
}

input {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
}

button {
  margin-left: 8px;
  background-color: #7289da;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
}
</style>