<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template lang="pug">
  header
    nav.flex.height-auto
      RouterLink.flex-auto.block.m-1.p-2(to="/") Home
  main.m-2
    RouterView
</template>

<style scoped></style>
