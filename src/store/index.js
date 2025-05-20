import { createStore } from 'vuex'

export default createStore({
  state: {
    servers: [],
    channels: {},
    messages: {}
  },
  mutations: {
    setServers(state, list) { state.servers = list },
    setChannels(state, { serverId, channels }) { state.channels[serverId] = channels },
    addMessage(state, { channelId, message }) {
      if (!state.messages[channelId]) state.messages[channelId] = []
      state.messages[channelId].push(message)
    }
  },
  actions: {
    fetchServers({ commit }) {
      const data = [ { id: '1', name: 'Général' }, { id: '2', name: 'Jeux' } ]
      commit('setServers', data)
    },
    fetchChannels({ commit }, serverId) {
      const data = [ { id: 'a', name: 'salon-texte' }, { id: 'b', name: 'général' } ]
      commit('setChannels', { serverId, channels: data })
    }
  }
})