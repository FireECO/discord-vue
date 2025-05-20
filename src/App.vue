<template>
  <div class="app-container">
    <ServerList />
    <ChannelList />
    <div class="chat-area">
      <ChatHeader />
      <ChatWindow />
      <MessageInput />
    </div>
  </div>
</template>

<script setup>
import ServerList from './components/ServerList.vue'
import ChannelList from './components/ChannelList.vue'
import ChatWindow from './components/ChatWindow.vue'
import MessageInput from './components/MessageInput.vue'
import ChatHeader from './components/ChatHeader.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  background-color: #2f3136;
  color: white;
}

.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #36393f;
}
</style>
