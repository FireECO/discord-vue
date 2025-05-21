<template>
  <div class="server-list">
    <div v-for="server in servers" :key="server.id" class="server-icon" @click="selectServer(server.id)"
      :title="server.name">
      <img :src="server.logo" :alt="server.name" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['servers'])
  },
  methods: {
    ...mapMutations(['selectServer'])
  }
}
</script>

<style scoped>
.server-list {
  width: 72px;
  background-color: #202225;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
}

.server-icon img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.server-icon img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 8px #7289da;
}
</style>
