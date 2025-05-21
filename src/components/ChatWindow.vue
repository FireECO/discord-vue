<template>
  <div class="chat-window">
    <div v-if="messages.length === 0">Aucun message</div>
    <div v-for="(msg, index) in messages" :key="index" class="message">
      <strong>{{ msg.author }}</strong> : {{ msg.text }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const messages = computed(() => store.getters.messagesForSelectedChannel)
</script>

<style scoped>
.chat-window {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #36393f;
}

.message {
  margin-bottom: 10px;
  color: white;
}
</style>
