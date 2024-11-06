<script setup>
import LinkButton from './LinkButton.vue'

defineProps(['to'])
</script>

<template lang="pug">
  LinkButton.bg-cambridge-blue.text-night(:to)
    slot
</template>
