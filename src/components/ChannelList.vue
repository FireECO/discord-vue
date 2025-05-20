<template>
  <ul>
    <li 
      v-for="channel in channels" 
      :key="channel.id" 
      :class="{ selected: channel.id === selectedId }"
      @click="$emit('select', channel.id)"
    >
      # {{ channel.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    channels: {
      type: Array,
      default: () => []
    },
    selectedId: String
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.5rem;
  cursor: pointer;
}
li.selected {
  background-color: #ddd;
  font-weight: bold;
}
</style>