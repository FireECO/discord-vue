<template>
  <div class="chat-header">
    <span v-if="selectedTextChannel"># {{ selectedTextChannel }}</span>
    <span v-else>Aucun salon sélectionné</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const selectedTextChannel = computed(() => store.state.selectedTextChannel)
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