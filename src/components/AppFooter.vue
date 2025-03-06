<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ref, type Ref } from 'vue'

const socailIcon: Ref<Array<string>> = ref([
  'uil:behance',
  'pajamas:twitter',
  'uil:dribbble',
  'uil:instagram',
])
</script>

<template>
  <section class="bg-[#F9F9F9] p-10 mt-32">
    <section class="container max-w-7xl mx-auto px-5 lg:px-2">
      <div class="mb-10">
        <h1 class="font-switzer-md text-4xl">Let’s build something great together👨🏾‍💻</h1>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4">
        <p class="font-switzer-regular text-2xl">
          <span> Have a project in mind? </span>
          <button class="btn text-white rounded-full px-6 py-4 font-switzer-regular text-lg">
            Contact Me 📩
          </button>
        </p>

        <!--        social icons-->
        <div class="flex items-center gap-4">
          <template v-for="(icon, index) in socailIcon" :key="index">
            <Icon
              :icon="icon"
              class="bg-[#F2F2F2] p-2 rounded-full"
              color="#191919"
              height="40"
              width="40"
            />
          </template>
        </div>
        <!--        social icons-->
      </div>
    </section>
  </section>
</template>

<style scoped>
.btn {
  @apply bg-gradient-to-b from-[#D8C3F4] to-[#8631F4];
}
</style>
