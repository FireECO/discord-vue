<template>
  <div class="friends-list">
    <div v-for="friend in friends" :key="friend.id" class="friend-icon" @click="selectFriend(friend.id)"
      :title="friend.name">
      <img :src="friend.logo" :alt="friend.name" />
    </div>
    <div @click="addFriend()"  class=friend-icon>
      <img src="https://img.icons8.com/?size=100&id=FPUupKT96rDu&format=png&color=000000" alt="Ajouter un ami" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const friends = computed(() => store.state.friends)

const selectFriend = (friendId) => {
  store.commit('setSelectedFriendId', friendId)
}

const addFriend = () => {
  const newFriend = {
    id: "dm" + (store.state.friends.length + 1),
    name: "Friend " + (store.state.friends.length + 1),
    logo: 'https://img.icons8.com/?size=100&id=2ssCjBEHWZuy&format=png&color=000000'
  }
  store.commit('addFriend', newFriend)
}
</script>

<style scoped>
.friends-list {
  width: 72px;
  background-color: #202225;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
}

.friend-icon img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.friend-icon img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 8px #43b581;
}
</style>
