<template>
  <div class="layout">
    <Sidebar />
    <ChannelList />
    <div class="main">
      <ChatWindow />
      <MessageInput />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import ChannelList from '../components/ChannelList.vue'
import ChatWindow from '../components/ChatWindow.vue'
import MessageInput from '../components/MessageInput.vue'
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
