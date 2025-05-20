<template>
  <form @submit.prevent="submitMessage">
    <input
      v-model="newMessage"
      type="text"
      placeholder="Écris un message..."
      required
    />
    <button type="submit">Envoyer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    submitMessage() {
      this.$emit('send', this.newMessage)
      this.newMessage = ''
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  gap: 0.5rem;
}
input {
  flex-grow: 1;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>
