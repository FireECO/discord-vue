import { createStore } from 'vuex'
import { playSound } from '../utils/sound.js'

export default createStore({
  state: {
    currentView: 'servers',
    selectedServerId: 1,
    selectedTextChannel: '💬 Général',
    selectedFriendId: 'dm1',
    messages: {
      1: {
        "💬 Général": [
          { author: 'Ludo', date: '20/05/2025 22:03', text: 'Qui chaud pour une game ?' },
          { author: 'Chloé', date: '20/05/2025 22:04', text: 'Vsy ! Rocket ou LoL ?' },
          { author: 'Ludo', date: '20/05/2025 22:05', text: 'Je lance Rocket XD' },
          { author: 'Chloé', date: '20/05/2025 22:05', text: 'Parfait' },
          { author: 'Thé00', date: '20/05/2025 22:09', text: 'Je lance aussi vous en êtes ou ?' },
          { author: 'Ludo', date: '20/05/2025 22:09', text: 'On t’attend :)' }
        ],
        "🎵 Musique": [
          { author: 'Thé00', date: '20/05/2025 18:44', text: 'J’écoute ça en boucle 🔁 https://open.spotify.com/playlist/37i9dQZF1DXdvyLcddcaVU' },
          { author: 'Chloé', date: '20/05/2025 18:46', text: 'Mdrrr' }
        ],
        "🎥 Clips": [
          { author: 'Mimoule', date: '20/05/2025 20:17', text: 'Best clutch CS2 🔥 https://www.youtube.com/shorts/8gAcxqkj5TU' }
        ]
      },
      2: {
        "💬 Général": [
          { author: 'Mélissa', date: '20/05/2025 21:10', text: 'Yo les streamers ✌️' },
          { author: 'Mini', date: '20/05/2025 21:11', text: 'Salut 👋 tu lives ce soir ?' },
          { author: 'Mélissa', date: '20/05/2025 21:12', text: 'Ouais, 22h sur https://www.twitch.tv/tieflingmelissa 💜' }
        ],
        "📰 News": [
          { author: 'Bot-News', date: '18/05/2025 09:00', text: '**Twitch change son algorithme de recommandation — Plus d’infos :** https://blog.twitch.tv/en/tags/news/' },
          { author: 'Bot-News', date: '19/05/2025 09:00', text: '**Twitch change son algorithme de recommandation — Plus d’infos :** https://blog.twitch.tv/en/tags/news/' },
          { author: 'Bot-News', date: '20/05/2025 09:00', text: '**Twitch change son algorithme de recommandation — Plus d’infos :** https://blog.twitch.tv/en/tags/news/' },
          { author: 'Moi', date: '20/05/2025 09:26', text: 'Faut kill le bot, il spam' }
        ],
        "📢 Annonces live": [
          { author: 'Mini', date: '20/05/2025 20:00', text: '🟣 En live dans 5 minutes ! Venez chill : https://www.twitch.tv/miniminter' }
        ],
        "💬 blabla": [
          { author: 'Zaza420', date: '20/05/2025 14:55', text: 'Quelqu’un a testé Schedule 1 ?' },
          { author: 'Nico', date: '20/05/2025 15:01', text: 'Pourquoi ça m’étonnes pas ?? XD' }
        ]
      },
      3: {
        "💬 Général": [
          { author: 'Moi', date: '20/05/2025 10:23', text: 'Réu de suivi projet à 14h sur vocal 🕑' }
        ],
        "🔄 Mises à jour": [
          { author: 'Sébastien', date: '20/05/2025 11:07', text: 'Patch 1.3.2 dispo, changelog ici : https://github.com/nombersDev/casemove' }
        ],
        "💻 Tech": [
          { author: 'Amina', date: '20/05/2025 12:48', text: 'J’ai intégré OpenTelemetry avec NestJS ✅' }
        ],
        "🗣 Feedbacks": [
          { author: 'Moi', date: '20/05/2025 17:21', text: 'L’UX de la page d’accueil est beaucoup plus fluide, bien joué 🙌' }
        ]
      },
      4: {
        "💬 Général": [
          { author: 'Thibault', date: '20/05/2025 13:33', text: 'Quelqu’un up pour un quiz de culture G ce soir ? 🤓' }
        ],
        "👋 Présentation": [
          { author: 'Elena', date: '20/05/2025 09:17', text: 'Hello ! Moi c’est Elena, étudiante en design 🎨' }
        ],
        "🛠 Tips & Tricks": [
          { author: 'Max', date: '20/05/2025 08:45', text: 'Sur OBS, cochez “rescale output” pour les clips TikTok !' }
        ],
        "📸 Screenshots": [
          { author: 'Tomasz', date: '20/05/2025 16:03', text: 'Mes dernières illus : https://www.behance.net/gallery/178976073/Illustrations-for-The-Economist' }
        ],
        "🎉 Événements": [
          { author: 'Admin', date: '20/05/2025 11:00', text: '🎉 Soirée Among Us dimanche 20h — inscrivez-vous ici : https://www.facebook.com/Bignoux/posts/soir%C3%A9e-espa%C3%A7adosnous-nous-retrouvons-pour-ce-vendredi-16-mainous-vous-proposons-/1137622665073674/' }
        ]
      },
      5: {
        "💬 Général": [
          { author: 'Moi', date: '20/05/2025 09:00', text: 'Salut à tous dans le Tech Hub 👋' },
          { author: 'Léa', date: '20/05/2025 09:04', text: 'Quelqu’un maîtrise Kubernetes ici ? J’ai une question 😅' }
        ],
        "📢 Annonces": [
          { author: 'Bot-Tech', date: '20/05/2025 08:00', text: '🧪 La v2 du backend passe en test. Infos : https://gitlab.com/techhub/v2-release' }
        ],
        "📚 Tutoriels": [
          { author: 'Romain', date: '20/05/2025 15:36', text: 'Tuto ultra simple pour React + Tailwind : https://dev.to/romain/simple-react-tailwind-setup' }
        ],
        "🔍 Code Review": [
          { author: 'Camille', date: '20/05/2025 16:15', text: 'Merci pour les reviews 🙏 j’ai mergé sur `main`' }
        ],
        "💬 Off Topic": [
          { author: 'Moi', date: '20/05/2025 19:52', text: 'J’ai testé le jeu “Manor Lords”, c’est pépite 🔥' }
        ]
      }
    },
    privateMessages: {
      dm1: [
        { author: 'Spider-Man', date: '20/05/2025 21:03', text: "Yo, j’ai croisé le Lézard à Brooklyn. Il a pas changé." },
        { author: 'Moi', date: '20/05/2025 21:05', text: "T’as besoin d’un coup de main ?" },
        { author: 'Spider-Man', date: '20/05/2025 21:06', text: "T’inquiète, j’ai balancé deux toiles et il est tombé dans une benne." }
      ],
      dm2: [
        { author: 'Captain America', date: '20/05/2025 19:42', text: "Briefing stratégique à 22h. Sois à l’heure." },
        { author: 'Moi', date: '20/05/2025 19:45', text: "Compris, Cap. Je prépare mon rapport." },
        { author: 'Captain America', date: '20/05/2025 19:46', text: "Excellent. N’oublie pas que chaque détail compte." }
      ],
      dm3: [
        { author: 'Hulk', date: '20/05/2025 18:22', text: "HULK FAIM." },
        { author: 'Moi', date: '20/05/2025 18:23', text: "Encore ? T’as déjà mangé deux vaches ce matin !" },
        { author: 'Hulk', date: '20/05/2025 18:24', text: "HULK PAS COMPTÉ." }
      ],
      dm4: [
        { author: 'Iron Man', date: '20/05/2025 20:10', text: "J’ai ajouté une IA qui te répond avec des blagues. Tente un 'salut'." },
        { author: 'Moi', date: '20/05/2025 20:11', text: "Salut" },
        { author: 'Iron Man', date: '20/05/2025 20:11', text: "Pourquoi Iron Man ne joue jamais à cache-cache ? Parce qu’il se fait toujours repérer." }
      ],
      dm5: [
        { author: 'Thor', date: '20/05/2025 17:55', text: "Midgard a de bons festins. Ce tacos… quel enchantement !" },
        { author: 'Moi', date: '20/05/2025 17:57', text: "Tu veux que je t’en livre une douzaine ?" },
        { author: 'Thor', date: '20/05/2025 17:58', text: "Par Odin, oui !" }
      ],
      dm6: [
        { author: 'Black Widow', date: '20/05/2025 16:30', text: "Mission à Prague. Tu peux t’occuper de la couverture réseau ?" },
        { author: 'Moi', date: '20/05/2025 16:31', text: "Je m’en charge. Tu as un point d’entrée ?" },
        { author: 'Black Widow', date: '20/05/2025 16:32', text: "Rue Kampa, face à la Vltava. Discret mais efficace." }
      ],
      dm7: [
        { author: 'Doctor Strange', date: '20/05/2025 15:01', text: "La boucle temporelle est instable. Il faut recalibrer le sort." },
        { author: 'Moi', date: '20/05/2025 15:03', text: "Je t’apporte le grimoire de Yelmir." },
        { author: 'Doctor Strange', date: '20/05/2025 15:04', text: "Parfait. N’ouvre pas la page 67. Jamais." }
      ]
    },
    servers: [
      {
        id: 1,
        name: 'Le Club esport',
        logo: 'https://img.icons8.com/?size=100&id=79047&format=png&color=000000',
        textChannels: ['💬 Général', '🎵 Musique', '🎥 Clips'],
        voiceChannels: ['🌸 Général', '🧍 League of Legends', '🔫 Counter-Strike 2', '🚗 Rocket League', '🥚 Dofus', '🛡 Overwatch 2', '🐉 Pokémon', '🍔 Le Mod de Garry', '⚔ TeamFightTactics']
      },
      {
        id: 2,
        name: 'Stream Team',
        logo: 'https://img.icons8.com/?size=100&id=aGCNGCWg7dbJ&format=png&color=000000',
        textChannels: ['💬 Général', '📰 News', '📢 Annonces live', '💬 blabla'],
        voiceChannels: ['🎙 Général', '🛡 Modos', '🎥 Streamers', '⭐ VIPs', '🎟 Abonnés']
      },
      {
        id: 3,
        name: 'Projet',
        logo: 'https://img.icons8.com/?size=100&id=AD01G5KrjXaH&format=png&color=000000',
        textChannels: ['💬 Général', '🔄 Mises à jour', '💻 Tech', '🗣 Feedbacks'],
        voiceChannels: ['🏢 Salle de réunion', '👨‍💻 Dev Talk', '🆘 Support', '💡 Brainstorm', '☕ Pause']
      },
      {
        id: 4,
        name: 'Le Lounge',
        logo: 'https://img.icons8.com/?size=100&id=zvaW0LEBqXt0&format=png&color=000000',
        textChannels: ['💬 Général', '👋 Présentation', '🛠 Tips & Tricks', '📸 Screenshots', '🎉 Événements'],
        voiceChannels: ['😌 Chill', '⚔ Compétitif', '🛡 Raid', '📺 Streaming', '🎊 Party']
      },
      {
        id: 5,
        name: 'Tech Hub',
        logo: 'https://img.icons8.com/?size=100&id=oQqxFH13r8pR&format=png&color=000000',
        textChannels: ['💬 Général', '📢 Annonces', '📚 Tutoriels', '🔍 Code Review', '💬 Off Topic'],
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
      state.selectedTextChannel = '💬 Général'
    },
    setCurrentView(state, view) {
      state.currentView = view
    },
    selectTextChannel(state, channel) {
      state.selectedTextChannel = channel

      const server = state.servers.find(s => s.id === state.selectedServerId)
      const isVoice = server && server.voiceChannels.includes(channel)

      if (isVoice) {
        playSound('voicejoin')
      }
    },
    setSelectedFriendId(state, friendId) {
      state.selectedFriendId = friendId
    },
    sendMessage(state, { serverId, channelName, message }) {
      if (!state.messages[serverId]) {
        state.messages[serverId] = {}
      }
      if (!state.messages[serverId][channelName]) {
        state.messages[serverId][channelName] = []
      }
      state.messages[serverId][channelName].push(message)
    },
    sendPrivateMessage(state, { friendId, message }) {
      if (!state.privateMessages[friendId]) {
        state.privateMessages[friendId] = []
      }
      state.privateMessages[friendId].push(message)
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
    selectedVoiceChannel(state, getters) {
      if (getters.isVoiceChannel) {
        return state.selectedTextChannel
      }
      return null
    },
    selectedFriend(state) {
      return state.friends.find(f => f.id === state.selectedFriendId) || null
    },
    messagesForSelectedChannel(state) {
      const serverId = state.selectedServerId
      const channelName = state.selectedTextChannel
      if (!serverId || !channelName) return []

      return (
        (state.messages[serverId] &&
          state.messages[serverId][channelName]) ||
        []
      )
    },
    messagesForSelectedFriend(state) {
      const selected = state.selectedFriendId
      return selected ? state.privateMessages[selected] || [] : []
    },
    isVoiceChannel(state, getters) {
      const server = getters.selectedServer
      const channelName = state.selectedTextChannel
      if (!server || !channelName) return false
      return server.voiceChannels.includes(channelName)
    },
    isTextChannel(state, getters) {
      const server = getters.selectedServer
      const channelName = state.selectedTextChannel
      if (!server || !channelName) return false
      return server.textChannels.includes(channelName)
    }
  }
})
