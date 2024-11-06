<script setup>
const routes = {
  Home: { name: 'index' },
}
</script>

<template lang="pug">
  nav.flex.height-auto(v-for="(route, text) in routes")
    RouterLink.flex-auto.block.m-1.p-2(:to="route")= text
</template>
