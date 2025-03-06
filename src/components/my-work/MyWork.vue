<script lang="ts" setup>
import { ref, type Ref } from 'vue'

interface Props {
  image: string
  title: string
}

const myWorkImg: Ref<Array<Props>> = ref([
  {
    image: '/image/Astradrop.png',
    title: 'Astradrop',
  },
  {
    image: '/image/Wakala.png',
    title: 'Wakala',
  },
  {
    image: '/image/Barca-Edtech.png',
    title: 'Barca-Edtech',
  },
  {
    image: '/image/Eco-Eat.png',
    title: 'Eco-Eat',
  },
])
</script>

<template>
  <section id="project" class="container max-w-7xl mx-auto px-5 lg:px-2 mt-40">
    <section class="grid place-items-center text-center">
      <!--      main header-->
      <div>
        <h1 class="font-switzer-md text-4xl text-[#0C0C0C] mb-5">Explore My Works</h1>
        <p class="text-[#484848] font-switzer-md text-xl leading-normal">
          Step into My Design Journey: Discover how I solve problems through <br />
          immersive case studies, interactive prototypes, and polished designs
        </p>
      </div>
      <!--      main header-->

      <!--      images-->
      <section class="grid grid-cols-2 gap-4 mt-5">
        <figure v-for="(mywork, index) in myWorkImg" :key="index">
          <img :alt="mywork.title" :src="mywork.image" />
        </figure>
      </section>
      <!--      images-->
    </section>

    <!--    link to view all work-->
    <div class="mt-10 flex items-center justify-center">
      <button class="text-[#8631F4] font-switzer-md text-xl underline">
        Click to see more of my case studies
      </button>
    </div>
    <!--    link to view all work-->
  </section>
</template>

<style scoped></style>
