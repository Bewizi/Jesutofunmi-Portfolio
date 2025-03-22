<script lang="ts" setup>
import SectionCard from '@/components/SectionCard.vue'
import AppLink from '@/components/AppLink.vue'
import { ref, type Ref } from 'vue'
import type { KeyProps, MyWorkProps } from '@/types'
import { Icon } from '@iconify/vue'

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
    path: 'wakala',
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

const designProcess: Ref<KeyProps[]> = ref([
  {
    icon: 'carbon:text-link-analysis',
    text: 'Emphatize',
  },
  {
    icon: 'fluent:calendar-search-16-regular',
    text: 'Define',
  },
  {
    icon: 'icons8:idea',
    text: 'Ideate',
  },
  {
    icon: 'fluent:design-ideas-16-regular',
    text: 'Design',
  },
  {
    icon: 'file-icons:testcafe',
    text: 'Test',
  },
])
</script>

<template>
  <!--  hero section-->
  <section class="barca-hero-img bg-cover h-screen"></section>
  <section class="max-w-7xl mx-auto px-5 lg:px-8 mt-10 flex flex-wrap items-center gap-20">
    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-sm lg:text-xl mb-3">Role</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-lg lg:text-2xl">Ui/Ux Designer</p>
    </div>

    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-sm lg:text-xl mb-3">Tools</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-lg lg:text-2xl">Figma</p>
    </div>

    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-sm lg:text-xl mb-3">TimeFrame</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-lg lg:text-2xl">4weeks</p>
    </div>

    <div>
      <h6 class="text-[#7D7D7D] font-medium font-switzer-md text-sm lg:text-xl mb-3">Team Size</h6>
      <p class="text-[#0C0C0C] font-switzer-md font-medium text-lg lg:text-2xl">7 Members</p>
    </div>
  </section>
  <!--  hero section-->

  <!--  Barca exam Platform-->
  <SectionCard class="mt-32">
    <h1 class="font-switzer-sm-bold text-2xl lg:text-4xl">
      Barca- The Ultimate Exam Preparation Platform
    </h1>
    <p class="font-switzer-regular mt-5 leading-loose lg:leading-loose lg:text-lg">
      BARCA is an online learning platform that helps students excel in international exams like
      IELTS, <br />
      TOEFL, SAT, and GRE. It offers study materials, practice questions, interactive quizzes,
      progress <br />
      tracking, and personalized recommendations—all in a user-friendly, feature-rich app designed
      for different academic levels.
    </p>

    <!--    button hire me-->
    <div class="my-20">
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

    <!--    image-->
    <figure>
      <img alt="Barca Exam Platform" src="/image/Barca/Barca-Edu-Platform.png" />
    </figure>
    <!--    image-->

    <!--    problem and solution-->
    <section
      class="max-w-4xl mx-auto mt-32 flex flex-col lg:flex-row items-center justify-center gap-20"
    >
      <!--      problem-->
      <div>
        <h4 class="text-[#0C0C0C] font-switzer-sm-bold text-2xl lg:text-4xl mb-8">
          Problem Statement
        </h4>
        <p class="text-[#484848] text-lg font-switzer-regular">
          Students preparing for international exams struggle with limited access to high-quality
          study materials, personalized guidance, and interactive practice tools. Many resources
          lack comprehensive coverage and tailored learning experiences, making it harder for them
          to focus on strengths, address weaknesses, and achieve optimal results.
        </p>
      </div>
      <!--      problem-->

      <!--      solution-->
      <div>
        <h4 class="text-[#0C0C0C] font-switzer-sm-bold text-2xl lg:text-4xl mb-8">
          Proposed Solution
        </h4>
        <p class="text-[#484848] text-lg font-switzer-regular">
          To address these challenges, there is a need for a comprehensive exam preparation platform
          that offers personalized learning, high-quality study materials, interactive practice
          tools, progress tracking, time management features, and a collaborative space for
          students. This solution will help students excel in international exams, unlock
          opportunities, and achieve their academic and professional goals
        </p>
      </div>
      <!--      solution-->
    </section>
    <!--    problem and solution-->

    <!--    design progress-->
    <section class="mt-32">
      <h4 class="text-[#0C0C0C] font-switzer-sm-bold text-center text-2xl lg:text-4xl mb-10">
        DESIGN PROCESS
      </h4>

      <section class="flex flex-wrap items-center justify-between gap-20 mt-20">
        <div v-for="(items, index) in designProcess" :key="index">
          <!--          icon-->
          <div class="relative left-5">
            <Icon :icon="items.icon" class="w-[46.36px] h-[46.36px] text-[#8631F4]" />
          </div>
          <!--          icon-->

          <h4 class="text-[#0C0C0C] mt-5 font-switzer-sm-bold text-[32px]">{{ items.text }}</h4>
        </div>
      </section>
    </section>
    <!--    design progress-->
  </SectionCard>
  <!--  Barca exam Platform-->

  <!--  User Search-->
  <SectionCard class="mt-32">
    <div>
      <h4 class="font-switzer-md text-2xl lg:text-4xl mb-8">User ReSearch</h4>
      <p
        class="font-switzer-regular mt-5 leading-loose lg:leading-loose lg:text-lg text-[#484848] max-w-3xl"
      >
        To gain deeper insights into the problem statement and better understand the motivations and
        needs of the users, a comprehensive research process was initiated. The research began with
        quantitative analysis, leveraging an online survey that garnered
        <strong class="font-switzer-sm-bold text-[#8631F4]">12 RESPONSES</strong> from the target
        audience, comprising high school students, university students, and professionals who have
        either prepared for or had previously taken international exams. These diverse range of
        participants allowed for valuable insights into their experiences and perceptions regarding
        exam preparation. Below are some of the responses we got from our online survey :
      </p>
    </div>

    <!--    image-->
    <section class="flex flex-col lg:flex-row items-center justify-between gap-20 mt-20">
      <figure>
        <img alt="User Research Pie Chart" src="/image/Barca/Barca-Edu-Chart.png" />
      </figure>
      <figure>
        <img alt="User Research Record" src="/image/Barca/Barca-Edu-Record.png" />
      </figure>
    </section>
    <!--    image-->

    <p
      class="text-[#292D32] font-switzer-regular mt-20 leading-normal lg:leading-normal lg:text-lg"
    >
      After analyzing the findings from our quantitative survey, we opted to conduct in-depth
      interviews with users to delve deeper into their experiences using exam preparation apps,
      uncovering challenges they encountered and potential areas for improvement. A total of 5
      individuals were interviewed, yielding a wealth of insightful responses. Through our research,
      we identified several issues faced by users in relation to exam preparation
    </p>
  </SectionCard>
  <!--  User Search-->

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
.barca-hero-img {
  background-image: url('/image/Barca/Barca-Hero-Image.png');
}
</style>
