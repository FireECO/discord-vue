<template>
  <div class="chat-header">
    <!-- Serveur : salon textuel ou vocal -->
    <template v-if="currentView === 'servers' && selectedTextChannel">
      <h2>
        {{ isVoiceChannel ? '🔊' : '#' }} {{ selectedTextChannel }}
      </h2>
    </template>

    <!-- Message privé -->
    <template v-else-if="currentView === 'messages' && selectedFriend">
      <div class="dm-header">
        <img :src="selectedFriend.logo" alt="Avatar" class="avatar" />
        <h2>{{ selectedFriend.name }}</h2>
      </div>
    </template>

    <!-- Aucun salon sélectionné -->
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
const selectedTextChannel = computed(() => store.getters.selectedTextChannel)
const isVoiceChannel = computed(() => store.getters.isVoiceChannel)
</script>

<style scoped>
.chat-header {
  padding: 1rem;
  background-color: #36393f;
  border-bottom: 1px solid #ccc;
  color: white;
}
.dm-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
</style>
