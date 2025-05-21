<template>
  <div class="layout">
    <Sidebar />
    <FriendsList />
    <div class="main">
      <ChatWindow />
      <MessageInput />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import FriendsList from '../components/FriendList.vue'
import ChatWindow from '../components/ChatWindow.vue'
import MessageInput from '../components/MessageInput.vue'
</script>
