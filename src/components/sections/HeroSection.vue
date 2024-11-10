<script setup>
import PrimaryLinkButton from '@/components/buttons/PrimaryLinkButton.vue'
import IndexHeading from '@/components/headings/IndexHeading.vue'
import IndexTagline from '@/components/headings/IndexTagline.vue'

import { ArrowLongRightIcon } from '@heroicons/vue/16/solid'
</script>

<template lang="pug">
  section.flex.flex-col.justify-center.mx-3(class='h-[75vh]')
    IndexHeading
    IndexTagline
    .flex.flex-wrap.justify-around.gap-1.my-3
      PrimaryLinkButton(to='#' title='View your pets')
        span Your Pets
        ArrowLongRightIcon.mx-1.size-5
</template>
