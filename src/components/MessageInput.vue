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

const send = () => {
  if (message.value.trim() && store.state.selectedTextChannel) {
    store.commit('sendMessage', {
      channelName: store.state.selectedTextChannel,
      message: {
        author: 'Moi',
        text: message.value
      }
    })
    message.value = ''
  }
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