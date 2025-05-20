<template>
  <div class="server-view">
    <ChannelList :channels="channels" @select="selectChannel" />
    <ChatWindow :messages="currentMessages" />
    <MessageInput @send="sendMessage" />
  </div>
</template>

<script>
import ChannelList from '../components/ChannelList.vue'
import ChatWindow  from '../components/ChatWindow.vue'
import MessageInput from '../components/MessageInput.vue'
export default {
  props: ['id'],
  components: { ChannelList, ChatWindow, MessageInput },
  data() {
    return { selectedChannel: null }
  },
  computed: {
    channels() {
      return this.$store.state.channels[this.id] || []
    },
    currentMessages() {
      return this.$store.state.messages[this.selectedChannel] || []
    }
  },
  mounted() {
    this.$store.dispatch('fetchChannels', this.id)
  },
  methods: {
    selectChannel(channelId) {
      this.selectedChannel = channelId
    },
    sendMessage(text) {
      this.$store.commit('addMessage', {
        channelId: this.selectedChannel,
        message: { text, author: 'Moi' }
      })
    }
  }
}
</script>