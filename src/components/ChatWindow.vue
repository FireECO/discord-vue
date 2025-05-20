<template>
  <div class="chat-window">
    <div v-for="(message, index) in messages" :key="index">
      <strong>{{ message.author }}:</strong> {{ message.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages']
}
</script>

<style scoped>
.chat-window {
  padding: 1rem;
  background-color: #f5f5f5;
  height: 300px;
  overflow-y: auto;
}
</style>