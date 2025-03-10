<script lang="ts" setup>
import SocialIcons from '@/components/social-icons/SocialIcons.vue'
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
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank">
              Contact Me 📩
            </a>
          </button>
        </p>

        <!--        social icons-->
        <SocialIcons />
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
