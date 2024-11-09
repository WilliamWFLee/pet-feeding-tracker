<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(RouterLink.props)

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template lang="pug">
  a.flex.flex-wrap.align-middle.items-center(v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank" rel="noreferrer noopener")
    slot
  RouterLink.flex.flex-wrap.align-middle.items-center(v-else v-bind="$props")
    slot
</template>
