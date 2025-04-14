<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
import SectionCard from '@/components/SectionCard.vue'
import type { MobileAppImageProps, MyWorkProps } from '@/types'
import { reactive, ref, type Ref } from 'vue'

const myWorkImg: Ref<MyWorkProps[]> = ref([
  {
    image: '/image/Astradrop.png',
    title: 'Astradrop',
    mainHeader: 'Astradrop',
    subText:
      "Designing Seamless Logistics: Explore my work on Astradrop's website, web app, and mobile application, crafted to simplify delivery experiences",
    path: '/astradrop',
  },
  {
    image: '/image/Wakala.png',
    title: 'Wakala',
    mainHeader: 'WakalaPay',
    subText:
      'WakalaPay: Bridging the Crypto Gap. Explore how I designed a seamless crypto conversion app, solving real-world problems in the Web3 space',
    path: '/wakala',
  },
  {
    image: '/image/Barca-Edtech.png',
    title: 'Barca-Edtech',
    mainHeader: 'Barca EdTech',
    subText:
      "Designing Seamless Logistics: Explore my work on Astradrop's website, web app, and mobile application, crafted to simplify delivery experiences",
    path: '/barca',
  },
])

const visualDesing = reactive<MobileAppImageProps[]>([
  {
    id: 1,
    image: '/image/EcoEat/EcoEat-Signup.png',
    altText: '',
  },
  {
    id: 2,
    image: '/image/EcoEat/EcoEat-LandingPage.png',
    altText: '',
  },
  {
    id: 3,
    image: '/image/EcoEat/EcoEat-Prodct.png',
    altText: '',
  },
  {
    id: 4,
    image: '/image/EcoEat/EcoEat-Cart.png',
    altText: '',
  },
])
</script>

<template>
  <!--  hero section-->
  <section class="ecoEat-hero-img bg-cover h-screen"></section>
  <section class="max-w-7xl mx-auto px-5 lg:px-8 mt-10 flex flex-wrap items-center gap-20">
    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-sm lg:text-xl mb-3">Role</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-lg lg:text-2xl">Ui/Ux Designer</p>
    </div>

    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-sm lg:text-xl mb-3">Tools</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-lg lg:text-2xl">Figma</p>
    </div>
  </section>
  <!--  hero section-->

  <!--  EcoEat UIUX Case Study-->
  <SectionCard class="mt-32">
    <h1 class="font-switzer-sm-bold text-2xl lg:text-4xl">EcoEat UIUX Case Study</h1>
    <p class="font-switzer-regular mt-5 leading-loosgit e lg:leading-loose lg:text-lg">
      Ecoeat is a personal UI/UX project focused on designing a seamless and visually appealing
      platform for fresh <br />
      food delivery. The goal is to create an intuitive user experience that simplifies ordering
      locally sourced, healthy <br />
      meals. This involves optimizing user flows, streamlining the ordering process, and
      incorporating personalized <br />
      recommendations to enhance usability. The project aims to deliver a delightful and
      user-friendly interface for <br />
      effortless fresh food delivery.
    </p>

    <!--    button hire me-->
    <div class="my-14">
      <button
        class="bg-gradient-to-b from-[#D8C3F4] to-[#8631F4] text-white rounded-full px-6 py-4 font-switzer-regular text-lg"
      >
        <a
          class="flex items-center gap-2"
          href="https://mail.google.com/mail/u/1/#inbox?compose=new"
          target="_blank"
        >
          Hire me
        </a>
      </button>
    </div>
    <!--    button hire me-->
  </SectionCard>
  <!--  EcoEat UIUX Case Study-->

  <!-- challenge and approach -->
  <SectionCard class="mt-32">
    <div class="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10 mb-14">
      <!-- challenge -->
      <section>
        <h4 class="font-switzer-md text-2xl lg:text-4xl mb-8">The Challenge⚡</h4>
        <p class="text-[#484848] text-lg font-switzer-regular">
          Ecoeat aims to tackle key challenges in the food delivery industry, including lack of
          convenience, inefficient ordering processes, and limited focus on local sourcing and
          sustainability. Additionally, inconsistent branding and visual appeal impact user
          engagement. This UI/UX project focuses on creating a seamless, user-centered experience
          that enhances convenience, personalization, and sustainability while ensuring a visually
          appealing and cohesive design.
        </p>
      </section>
      <!-- challenge -->

      <!-- approach -->
      <section>
        <h4 class="font-switzer-md text-2xl lg:text-4xl mb-8">My Approach</h4>
        <p class="text-[#484848] text-lg font-switzer-regular">
          Survey insights revealed key challenges like limited fresh meal options, inaccurate
          deliveries, and difficulty finding dietary-specific foods. Users preferred locally sourced
          ingredients, a seamless ordering process, and personalized recommendations. These findings
          shaped a user-centered design focused on convenience and sustainability.
        </p>
      </section>
      <!-- approach -->
    </div>

    <!-- image -->
    <figure>
      <img src="/image/EcoEat/EcoEat-Product.png" alt="" />
    </figure>
    <!-- image -->
  </SectionCard>
  <!-- challenge and approach -->

  <!-- Noteworthy Findings -->
  <SectionCard class="mt-32">
    <h4 class="font-switzer-md text-2xl lg:text-4xl mb-8">Noteworthy Findings</h4>
    <p class="text-[#202020] mb-10">
      Based on the survey responses, several noteworthy findings emerged that shaped my design
      decisions and the user experience for Ecoeat:
    </p>

    <h6>Common pain points expressed by participants included:</h6>
    <ul class="list-disc tetxt-[#202020] mb-14 ml-10">
      <li>Limited availability of healthy and fresh meal options.</li>
      <li>Inaccurate order deliveries and long wait times.</li>
      <li>Difficulty finding specific dietary options or cuisines.</li>
    </ul>

    <h6>Preferences expressed by participants:</h6>
    <ul class="list-disc tetxt-[#202020] ml-10">
      <li>Strong interest in locally sourced ingredients andsustainable food options.</li>
      <li>Desire for a seamless and user-friendly ordering process.</li>
      <li>Appreciation for personalized recommendations based on dietary preferences.</li>
    </ul>

    <figure class="mt-14">
      <img
        src="/public/image/EcoEat/EcoEat-Proto-Persona.jpg"
        alt=""
        class="lg:max-w-4xl lg:mx-auto"
      />
    </figure>
  </SectionCard>
  <!-- Noteworthy Findings -->

  <!-- Wireframes -->
  <SectionCard class="mt-32">
    <h4 class="font-switzer-md text-2xl lg:text-4xl mb-8">Wireframes</h4>
    <p class="leading-loose text-[#202020] mb-10">
      After getting ideas and inspiration and drafting out my mood board i began sketching what
      <br />
      my user flows and navigation will look like through the website on a paper and on Figjam
    </p>

    <section class="flex flex-col gap-4 lg:flex-row lg:gap-8">
      <figure><img src="/image/EcoEat/wireframe-one.png" alt="" /></figure>
      <figure>
        <img src="/image/EcoEat/wireframe-two.png" alt="" />
      </figure>
    </section>

    <figure>
      <img src="/image/EcoEat/case-study.png" alt="" />
    </figure>
  </SectionCard>
  <!-- Wireframes -->

  <!-- Visual Designs -->
  <SectionCard class="mt-32">
    <section class="flex flex-col justify-center items-center mb-10">
      <h4 class="font-switzer-md text-2xl lg:text-4xl mb-5">Visual Designs</h4>
      <p class="text-[#202020]">Sign In and Sign Up Screen</p>
    </section>
    <div class="flex flex-col gap-8 mb-14">
      <figure v-for="items in visualDesing" :key="items.id">
        <img :src="items.image" :alt="items.altText" />
      </figure>
    </div>
  </SectionCard>
  <!-- Visual Designs -->

  <!-- final -->
  <SectionCard class="mt-32">
    <h4 class="font-switzer-md text-2xl lg:text-4xl mb-5">EcoEat</h4>
    <p class="text-[#202020]">
      Ecoeat was designed to bridge the gap between convenience and healthy eating by creating a
      seamless, user-friendly experience. From research to execution, every design decision focused
      on personalization, sustainability, and efficiency. This project showcases my ability to craft
      intuitive solutions that enhance user satisfaction while addressing real-world challenges in
      the food delivery industry.
    </p>
  </SectionCard>
  <!-- final -->

  <!--  see also-->
  <SectionCard class="mt-32">
    <h4 class="font-switzer-md text-2xl lg:text-4xl mb-8">See also</h4>

    <!--      images-->
    <section class="grid grid-col-1 lg:grid-cols-2 gap-8 mt-5">
      <figure v-for="(mywork, index) in myWorkImg" :key="index" class="group relative">
        <img
          ref="imagevw"
          :alt="mywork.title"
          :src="mywork.image"
          class="group-hover:blur-[4px] group-hover:brightness-75 transition-all duration-500 ease-in-out"
        />
        <AppLink
          :to="mywork.path"
          class="absolute top-8 lg:inset-0 lg:top-20 px-12 text-start flex flex-col flex-wrap items-start justify-start opacity-0 invisible group-hover:visible group-hover:text-white group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-9999"
        >
          <h1 class="font-switzer-sm-bold text-2xl lg:text-4xl mb-5 lg:mb-8">
            {{ mywork.mainHeader }}
          </h1>
          <p class="font-switzer-md lg:text-2xl leading-normal">{{ mywork.subText }}</p>
        </AppLink>
      </figure>
    </section>
    <!--      images-->
  </SectionCard>
  <!-- see also -->
</template>

<style scoped>
.ecoEat-hero-img {
  background-image: url('/public/image/EcoEat/EcoEat-Hero.png');
}
</style>
