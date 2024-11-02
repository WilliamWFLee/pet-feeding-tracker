<script setup>
defineProps(['href', 'class'])
</script>

<template lang="pug">
  a.px-2.py-3.rounded-md.align-middle(:href, :class)
    slot
</template>
