<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { Icon } from '@iconify/vue'

interface IconProps {
  icon: string
  link?: string
}

const socailIcon: Ref<Array<IconProps>> = ref([
  {
    icon: 'uil:behance',
    link: 'https://www.behance.net/oluwalajesutof',
  },
  {
    icon: 'pajamas:twitter',
    link: 'https://x.com/OluwaladeJesut1?t=a2IkmNn7P9iD59nbOhTs0g&s=09',
  },
  {
    icon: 'uil:dribbble',
    link: 'https://dribbble.com/Bendito',
  },
  {
    icon: 'uil:instagram',
    link: 'https://www.instagram.com/benditodsg/',
  },
])
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <section v-for="(icons, index) in socailIcon" :key="index">
      <a :href="icons.link" target="_blank">
        <Icon
          :icon="icons.icon"
          class="bg-[#F2F2F2] p-2 rounded-full"
          color="#191919"
          height="40"
          width="40"
        />
      </a>
    </section>
  </div>
</template>

<style scoped></style>
