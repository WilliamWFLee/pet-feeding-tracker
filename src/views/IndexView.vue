<script setup>
import PrimaryLinkButton from '@/components/buttons/PrimaryLinkButton.vue'

import { ArrowLongRightIcon } from '@heroicons/vue/16/solid'
</script>

<template lang="pug">
  section.flex.flex-col.justify-center.mx-3(class='h-[75vh]')
    h1.text-center.text-4xl.text-rose-taupe(class='sm:text-6xl') Pet Feeding Tracker
    h2.text-center.text-xl.my-7(class='sm:text-3xl') Never forget to feed your pet again
    .flex.flex-wrap.justify-around.gap-1.my-3
      PrimaryLinkButton(to='#')
        span Sign Up
        ArrowLongRightIcon.mx-1.size-5
</template>
