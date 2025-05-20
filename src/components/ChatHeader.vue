<template>
  <div class="chat-header">
    # {{ channel }}
  </div>
</template>

<script setup>
defineProps(['channel'])
</script>

<style scoped>
.chat-header {
  height: 48px;
  background-color: #36393f;
  padding: 12px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid #202225;
  color: white;
}
</style>