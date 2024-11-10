<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template lang="pug">
  header
    NavigationBar
  main(class='m-4 md:m-6')
    RouterView
</template>
