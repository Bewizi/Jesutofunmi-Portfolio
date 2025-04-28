<script lang="ts" setup>
import { useFadeInOnScroll } from '@/composables/useFadeInOnScroll.ts'

const { imageRefs } = useFadeInOnScroll()
defineProps<{
  defaultClass?: string
  mainHeader?: string
  mainText?: string
  subText?: string
  image?: string
  imageAlt?: string
}>()
</script>

<template>
  <section :class="['flex justify-between items-center gap-[80px]', defaultClass]">
    <!--    image-->
    <figure v-if="image" ref="imageRefs">
      <img :alt="imageAlt" :src="image" />
    </figure>
    <!--    image-->

    <!--      text-->
    <div>
      <h1 v-if="mainHeader" class="text-[#0C0C0C] font-switzer-md text-2xl lg:text-3xl mb-5">
        {{ mainHeader }}
      </h1>
      <p
        v-if="mainText"
        class="text-[#484848] text-sm lg:text-lg font-switzer-regular leading-normal max-w-4xl mb-8"
      >
        {{ mainText }}
      </p>
      <p
        v-if="subText"
        class="text-[#484848] text-sm lg:text-lg font-switzer-regular leading-normal max-w-4xl"
      >
        {{ subText }}
      </p>
    </div>
    <!--      text-->
  </section>
</template>

<style scoped></style>
