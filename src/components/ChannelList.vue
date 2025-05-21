<template>
  <div class="channel-list" v-if="server">
    <div class="server-header">
      <img :src="server.logo" alt="Logo" class="server-logo" />
      <h2>{{ server.name }}</h2>
    </div>

    <div class="channel-section">
      <div class="section-title">Salons textuels</div>
      <ul>
        <li v-for="channel in server.textChannels" :key="channel" @click="selectChannel(channel)"
          :class="{ active: channel === selectedTextChannel }">
          # {{ channel }}
        </li>
      </ul>
    </div>

    <div class="channel-section">
      <div class="section-title">Salons vocaux</div>
      <ul>
        <template v-for="channel in server.voiceChannels" :key="channel">
          <li @click="selectChannel(channel)" :class="{ active: channel === selectedTextChannel }">
            🔊 {{ channel }}
          </li>
          <li v-if="channel === selectedVoiceChannel" class="me-line">
            😊 Moi
          </li>
        </template>
      </ul>

    </div>

  </div>
  <div v-else class="channel-list empty">Sélectionne un serveur</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['selectedServer', 'selectedVoiceChannel']),
    ...mapState(['selectedTextChannel']),
    server() {
      return this.selectedServer
    }
  },
  methods: {
    ...mapMutations(['selectTextChannel']),
    selectChannel(channel) {
      this.selectTextChannel(channel)
    }
  }
}
</script>

<style scoped>
.channel-list {
  background-color: #2f3136;
  width: 260px;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.channel-list.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
}

.channel-section {
  margin-bottom: 1rem;
}

.section-title {
  font-size: 0.9rem;
  font-weight: bold;
  color: #aaa;
  margin-bottom: 0.5rem;
}

.server-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.server-logo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.me-line {
  padding-left: 2rem;
  font-weight: bold;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 4px 0;
  cursor: pointer;
}

li:hover {
  color: #7289da;
}
</style>
