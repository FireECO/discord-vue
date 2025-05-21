import { createStore } from 'vuex'

export default createStore({
  state: {
    currentView: 'servers',
    selectedServerId: null,
    selectedTextChannel: null,
    selectedFriendId: null,
    messages: { "Général": [{ author: 'Moi', text: 'salut' }] },
    servers: [
      {
        id: 1,
        name: 'Le Club esport',
        logo: 'https://img.icons8.com/?size=100&id=79047&format=png&color=000000',
        textChannels: ['Général', '🎵 Musique', '🎥 Clips'],
        voiceChannels: ['🌸 Général', '🧍 League of Legends', '🔫 Counter-Strike 2', '🚗 Rocket League', '🥚 Dofus', '🛡 Overwatch 2', '🐉 Pokémon', '🍔 Le Mod de Garry', '⚔ TeamFightTactics']
      },
      {
        id: 2,
        name: 'Stream Team',
        logo: 'https://img.icons8.com/?size=100&id=aGCNGCWg7dbJ&format=png&color=000000',
        textChannels: ['Général', '📰 News', '📢 Annonces live', '💬 blabla'],
        voiceChannels: ['🎙 Général', '🛡 Modos', '🎥 Streamers', '⭐ VIPs', '🎟 Abonnés']
      },
      {
        id: 3,
        name: 'Projet',
        logo: 'https://img.icons8.com/?size=100&id=21148&format=png&color=000000',
        textChannels: ['Général', '🔄 Mises à jour', '💻 Tech', '🗣 Feedbacks'],
        voiceChannels: ['🏢 Salle de réunion', '👨‍💻 Dev Talk', '🆘 Support', '💡 Brainstorm', '☕ Pause']
      },
      {
        id: 4,
        name: 'Le Lounge',
        logo: 'https://img.icons8.com/?size=100&id=VHT1F5Z5saAk&format=png&color=000000',
        textChannels: ['Général', '👋 Présentation', '🛠 Tips & Tricks', '📸 Screenshots', '🎉 Événements'],
        voiceChannels: ['😌 Chill', '⚔ Compétitif', '🛡 Raid', '📺 Streaming', '🎊 Party']
      },
      {
        id: 5,
        name: 'Tech Hub',
        logo: 'https://img.icons8.com/?size=100&id=QePgltTHCtyQ&format=png&color=000000',
        textChannels: ['Général', '📢 Annonces', '📚 Tutoriels', '🔍 Code Review', '💬 Off Topic'],
        voiceChannels: ['👨‍💻 Développement', '🖥 SysAdmin', '⚙ DevOps', '🌍 Projets Open Source']
      }
    ],
    friends: [
      {
        id: 'dm1',
        name: 'Spider-Man',
        logo: 'https://preview.redd.it/a165wzt085zb1.jpg?auto=webp&s=613be8a74dbe9cd41463b42b1de212e66bdf93f2'
      },
      {
        id: 'dm2',
        name: 'Captain America',
        logo: 'https://i.pinimg.com/736x/5a/28/b8/5a28b8c7093d00ad2e4982baa8269cce.jpg'
      },
      {
        id: 'dm3',
        name: 'Hulk',
        logo: 'https://www.marvel-cineverse.fr/medias/images/hulk-shehulk-cardvignette.jpg'
      },
      {
        id: 'dm4',
        name: 'Iron Man',
        logo: 'https://i.pinimg.com/736x/88/ee/0b/88ee0be40867024043771f7bd8bc1840.jpg'
      },
      {
        id: 'dm5',
        name: 'Thor',
        logo: 'https://m.media-amazon.com/images/I/51TXbYM+4TL._AC_UF1000,1000_QL80_.jpg'
      },
      {
        id: 'dm6',
        name: 'Black Widow',
        logo: 'https://i.pinimg.com/474x/77/84/7b/77847b6f7f83d2c523209030aca5b4d5.jpg'
      },
      {
        id: 'dm7',
        name: 'Doctor Strange',
        logo: 'https://www.zbrushcentral.com/uploads/default/original/4X/6/8/8/6880124715565287f025f0f70a7fff949fe02c09.jpeg'
      }
    ]
  },

  mutations: {
    selectServer(state, serverId) {
      state.selectedServerId = serverId
      state.selectedTextChannel = null
    },
    setCurrentView(state, view) {
      state.currentView = view
    },
    setSelectedTextChannel(state, channel) {
      state.selectedTextChannel = channel
      if (!state.messagesByChannel[channel]) {
        state.messagesByChannel[channel] = []
      }
    },
    sendMessage(state, { channel, message }) {
      state.messagesByChannel[channel].push(message)
    }
  },

  getters: {
    currentView: state => state.currentView,
    selectedServer(state) {
      return state.servers.find(s => s.id === state.selectedServerId) || null
    },
    selectedTextChannel(state) {
      return state.selectedTextChannel
    },
    messagesForSelectedChannel(state) {
      return state.selectedTextChannel
        ? state.messagesByChannel[state.selectedTextChannel] || []
        : []
    }
  }
})
