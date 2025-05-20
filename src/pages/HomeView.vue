<template>
  <div>
    <h1>Bienvenue !</h1>
    <p>Voici l'accueil de ton app type Discord.</p>
    <router-link :to="{ name: 'server', params: { id: '1' } }">
      Aller au serveur Général
    </router-link>
  </div>
</template>
