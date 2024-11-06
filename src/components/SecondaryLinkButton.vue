<script setup>
import LinkButton from './LinkButton.vue'

defineProps(['to'])
</script>

<template lang="pug">
  LinkButton.bg-rose-taupe.text-magnolia(:to)
    slot
</template>
