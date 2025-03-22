<script lang="ts" setup>
import SectionCard from '@/components/SectionCard.vue'
import Link from '@/components/AppLink.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <SectionCard>
    <div class="flex flex-col items-center justify-center space-y-4">
      <h1 class="text-4xl font-bold text-center">404</h1>
      <p class="text-lg text-center">Oops! The page you are looking for does not exist.</p>

      <Link class="text-center flex items-center gap-2" to="/">
        <Icon icon="carbon:arrow-left" /> Go back to home</Link
      >
    </div>
  </SectionCard>
</template>

<style scoped></style>
