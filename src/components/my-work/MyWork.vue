<script lang="ts" setup>
import { ref, type Ref } from 'vue'

interface Props {
  image: string
  title: string
  mainHeader: string
  subText: string
  path: string
}

const myWorkImg: Ref<Array<Props>> = ref([
  {
    image: '/image/Astradrop.png',
    title: 'Astradrop',
    mainHeader: 'Astradrop',
    subText:
      "Designing Seamless Logistics: Explore my work on Astradrop's website, web app, and mobile application, crafted to simplify delivery experiences",
    path: 'https://astradrop.com/',
  },
  {
    image: '/image/Wakala.png',
    title: 'Wakala',
    mainHeader: 'WakalaPay',
    subText:
      'WakalaPay: Bridging the Crypto Gap. Explore how I designed a seamless crypto conversion app, solving real-world problems in the Web3 space',
    path: '',
  },
  {
    image: '/image/Barca-Edtech.png',
    title: 'Barca-Edtech',
    mainHeader: 'Barca EdTech',
    subText:
      "Designing Seamless Logistics: Explore my work on Astradrop's website, web app, and mobile application, crafted to simplify delivery experiences",
    path: '',
  },
  {
    image: '/image/Eco-Eat.png',
    title: 'Eco-Eat',
    mainHeader: 'EcoEat',
    subText:
      'Effortless Local Food Delivery. I crafted intuitive user flows and tailored design elements to deliver a seamless food ordering experience.',
    path: '',
  },
])
</script>

<template>
  <section id="project" class="container max-w-7xl mx-auto px-5 lg:px-2 mt-40">
    <section class="grid place-items-center text-center">
      <!--      main header-->
      <div class="mb-14">
        <h1 class="font-switzer-md text-4xl text-[#0C0C0C] mb-5">Explore My Works</h1>
        <p class="text-[#484848] font-switzer-md text-xl leading-normal">
          Step into My Design Journey: Discover how I solve problems through <br />
          immersive case studies, interactive prototypes, and polished designs
        </p>
      </div>
      <!--      main header-->

      <!--      images-->
      <section class="grid grid-cols-2 gap-8 mt-5">
        <figure v-for="(mywork, index) in myWorkImg" :key="index" class="group relative">
          <img
            ref="imagevw"
            :alt="mywork.title"
            :src="mywork.image"
            class="group-hover:blur-[4px] group-hover:brightness-75 transition-all duration-500 ease-in-out"
          />
          <a
            :href="mywork.path"
            class="absolute inset-0 top-20 px-12 text-start flex flex-col flex-wrap items-start justify-start opacity-0 invisible group-hover:visible group-hover:text-white group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-9999"
            target="_blank"
          >
            <h1 class="font-switzer-sm-bold text-4xl mb-8">{{ mywork.mainHeader }}</h1>
            <p class="font-switzer-md text-2xl leading-normal">{{ mywork.subText }}</p>
          </a>
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
