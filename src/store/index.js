import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedServerId: null,
    servers: [
      {
        id: 1,
        name: 'Le Club esport',
        logo: 'https://img.icons8.com/?size=100&id=79047&format=png&color=000000',
        textChannels: [
          '💬 Général',
          '🎵 Musique',
          '🎥 Clips'
        ],
        voiceChannels: [
          '🌸 Général',
          '🧍 League of Legends',
          '🔫 Counter-Strike 2',
          '🚗 Rocket League',
          '🥚 Dofus',
          '🛡 Overwatch 2',
          '🐉 Pokémon',
          '🍔 Le Mod de Garry',
          '⚔ TeamFightTactics'
        ]
      },
      {
        id: 2,
        name: 'Stream Team',
        logo: 'https://img.icons8.com/?size=100&id=aGCNGCWg7dbJ&format=png&color=000000',
        textChannels: [
          '📰 News',
          '📢 Annonces live',
          '💬 blabla'
        ],
        voiceChannels: [
          '🎙 Général',
          '🛡 Modos',
          '🎥 Streamers',
          '⭐ VIPs',
          '🎟 Abonnés'
        ]
      },
      {
        id: 3,
        name: 'Projet',
        logo: 'https://img.icons8.com/?size=100&id=21148&format=png&color=000000',
        textChannels: [
          '🔄 Mises à jour',
          '💻 Tech',
          '🗣 Feedbacks'
        ],
        voiceChannels: [
          '🏢 Salle de réunion',
          '👨‍💻 Dev Talk',
          '🆘 Support',
          '💡 Brainstorm',
          '☕ Pause'
        ]
      },
      {
        id: 4,
        name: 'Le Lounge',
        logo: 'https://img.icons8.com/?size=100&id=VHT1F5Z5saAk&format=png&color=000000',
        textChannels: [
          '👋 Présentation',
          '🛠 Tips & Tricks',
          '📸 Screenshots',
          '🎉 Événements'
        ],
        voiceChannels: [
          '😌 Chill',
          '⚔ Compétitif',
          '🛡 Raid',
          '📺 Streaming',
          '🎊 Party'
        ]
      },
      {
        id: 5,
        name: 'Tech Hub',
        logo: 'https://img.icons8.com/?size=100&id=QePgltTHCtyQ&format=png&color=000000',
        textChannels: [
          '📢 Annonces',
          '📚 Tutoriels',
          '🔍 Code Review',
          '💬 Off Topic'
        ],
        voiceChannels: [
          '👨‍💻 Développement',
          '🖥 SysAdmin',
          '⚙ DevOps',
          '🌍 Projets Open Source'
        ]
      }
    ]
  },
  getters: {
    selectedServer(state) {
      return state.servers.find(s => s.id === state.selectedServerId) || null
    }
  },
  mutations: {
    selectServer(state, serverId) {
      state.selectedServerId = serverId
    }
  }
})
