<template>
  <div class="message-input">
    <input v-model="text" @keyup.enter="handleSend" placeholder="Envoyer un message" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')

function handleSend() {
  if (text.value.trim() !== '') {
    emit('send', text.value)
    text.value = ''
  }
}

const emit = defineEmits(['send'])
</script>

<style scoped>
.message-input {
  padding: 12px;
  border-top: 1px solid #202225;
  background-color: #40444b;
}

.message-input input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #2f3136;
  color: white;
  font-size: 14px;
}
</style>