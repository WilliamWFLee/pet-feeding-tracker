<script setup>
import LinkButton from './LinkButton.vue'

defineProps(['href'])
</script>

<template lang="pug">
  LinkButton(:href class='bg-rose-taupe text-magnolia')
    slot
</template>
