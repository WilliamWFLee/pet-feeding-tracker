<script setup>
defineProps(['to', 'class'])
</script>

<template lang="pug">
  RouterLink.px-5.py-3.rounded-md.align-middle.flex.items-center(:to, :class)
    slot
</template>
