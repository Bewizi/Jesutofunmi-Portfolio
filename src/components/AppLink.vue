<script lang="ts" setup>
import { RouterLink } from 'vue-router'

interface LinkProps {
  to: string
}

defineProps<LinkProps>()
</script>

<template>
  <RouterLink :to="to">
    <slot></slot>
  </RouterLink>
</template>

<style scoped></style>
