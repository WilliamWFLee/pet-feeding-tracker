<script setup>
import LinkButton from './LinkButton.vue'

defineProps(['href'])
</script>

<template lang="pug">
  LinkButton(:href, class='bg-cambridge-blue text-night' )
    slot
</template>
