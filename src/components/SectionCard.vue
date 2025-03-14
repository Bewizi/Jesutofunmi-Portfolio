<script lang="ts" setup>
defineProps({
  defaultClass: {
    type: String,
    default: 'max-w-7xl mx-auto px-5 lg:px-8',
  },
})
</script>

<template>
  <section :class="['class', defaultClass]">
    <slot></slot>
  </section>
</template>

<style scoped></style>
