<template>
  <div class="chat-header">
    <template v-if="currentView === 'servers' && selectedChannel">
      <h2># {{ selectedChannel.name }}</h2>
    </template>

    <template v-else-if="currentView === 'messages' && selectedFriend">
      <div class="dm-header">
        <img :src="selectedFriend.logo" alt="Avatar" class="avatar" />
        <h2>{{ selectedFriend.name }}</h2>
      </div>
    </template>

    <template v-else>
      <h2>Aucun salon sélectionné</h2>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const currentView = computed(() => store.getters.currentView)
const selectedFriend = computed(() => store.getters.selectedFriend)
const selectedChannel = computed(() => store.getters.selectedChannel)
</script>

<style scoped>
.chat-header {
  padding: 1rem;
  background-color: #36393f;
  border-bottom: 1px solid #ccc;
}
.dm-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>