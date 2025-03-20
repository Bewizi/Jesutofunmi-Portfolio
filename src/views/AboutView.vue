<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="container max-w-2xl mx-auto px-5 lg:px-2 mt-20">
    <!--    main heading-->
    <div class="mb-14">
      <h6 class="font-switzer-md text-sm lg:text-4xl mb-8">Hey there👋🏾!</h6>
      <h1 class="font-switzer-md text-2xl lg:text-6xl">
        I’m <strong class="text-[#8631F4]"> Jesutofunmi, </strong> and it's nice to see you here!
      </h1>
    </div>
    <!--    main heading-->

    <!--    subtext-->

    <div>
      <p class="mb-8 leading-loose text-[#484848]">
        I’ve always been passionate about all things design. My journey started back in high school,
        designing flyers on my smartphone using Canva. Fast forward to my university days, I knew I
        wanted to go beyond visuals and dive into something more impactful—UI/UX design. That moment
        felt like stepping into a whole new world, and I haven’t looked back since!
      </p>

      <p class="mb-8 leading-loose text-[#484848]">
        Now, with 4 years of experience, I work as a Product Designer at Astradrop, helping craft
        intuitive, user-centered experiences. Over the years, I’ve collaborated with
        cross-functional teams on diverse projects, from iOS apps to responsive web platforms, even
        enhancing existing products with thoughtful design improvements.
      </p>

      <p class="mb-8 leading-loose text-[#484848]">
        I’m naturally curious, always eager to explore, investigate, and learn what I don’t know. My
        design approach is a mix of creative exploration and structured problem-solving—balancing
        artistic intuition with a detail-obsessed mindset. Some may call it perfectionism, but I
        like to think of it as refining the magic until everything just clicks!
      </p>

      <p class="mb-8 leading-loose text-[#484848]">
        I’ve completed the Google UX Academy and other bootcamps courses to sharpen my UX skills,
        working on everything from mobile apps to web platforms. Lately, I’ve been diving into AI
        tools, integrating them into my workflow to speed up processes and enhance creativity.
      </p>

      <p class="mb-8 leading-loose text-[#484848]">
        I thrive in remote environments, handling complex projects and tight deadlines while
        collaborating with PMs, engineers, and stakeholders to bring ideas to life. More than
        anything, I believe great design happens in an open, fun, and collaborative space—so I make
        sure every team I work with feels just that!@
      </p>
    </div>
    <!--    subtext-->

    <div>
      <button
        class="btn text-white rounded-full px-6 py-4 font-switzer-regular text-lg flex items-center gap-2"
      >
        View Resume
      </button>
    </div>
  </section>

  <!--    My Quote-->
  <section class="bg-[#F9F9F9] px-5 py-10 mt-40">
    <section class="container max-w-7xl mx-auto px-5 lg:px-2 mt-20">
      <Icon
        class="w-[40px] h-[40px] lg:w-[100px] lg:h-[100px]"
        color="#CACACA"
        icon="hugeicons:quote-up"
      />

      <section class="grid place-items-center text-start">
        <p
          class="leading-normal lg:leading-normal text-[#484848] mt-3 text-2xl lg:text-4xl font-switzer-md"
        >
          I believe <strong class="text-[#A363F6]"> great design </strong> isn’t just about look,
          <br />
          it’s about <strong class="text-[#FDCA00]"> creating experiences </strong> that
          <strong class="text-[#2196F3]">
            guide, <br />
            engage
          </strong>
          , and <strong class="text-[#2196F3]">convert effortlessly</strong> .
        </p>
      </section>

      <div class="flex justify-end">
        <Icon
          class="w-[40px] h-[40px] lg:w-[100px] lg:h-[100px]"
          color="#CACACA"
          icon="hugeicons:quote-down"
        />
      </div>
    </section>
  </section>
  <!--    My Quote-->

  <section class="container max-w-2xl mx-auto px-5 lg:px-2 mt-20">
    <!--    main heading-->
    <div class="mb-14">
      <h4 class="font-switzer-md text-4xl mb-8">My life outside Design</h4>
    </div>
    <!--    main heading-->

    <!--    subtext-->

    <div>
      <p class="mb-8 leading-loose text-[#484848]">
        When I’m not designing, you’ll probably find me exploring new tech trends, binge-watching a
        good series, or lost in a deep dive on YouTube about something completely random (like
        healthy foods to eat 🤯). I have a soft spot forgospel music, and late-night creativity
        sessions where my best ideas seem to appear out of nowhere. I love learning new things,
        whether it’s a new AI tool, a cool design technique, or just a fun fact that I’ll definitely
        bring up in random conversations.
      </p>

      <p class="mb-8 leading-loose text-[#484848]">
        Outside of work, I enjoy hanging out with friends, playing games, or simply unwinding with a
        good book or podcast. Oh, and don’t be surprised if I suddenly disappear into a deep focus
        mode—it’s just my brain working overtime on the next big idea!
      </p>
    </div>
    <!--    subtext-->
  </section>
</template>

<style scoped>
.btn {
  @apply bg-gradient-to-b from-[#D8C3F4] to-[#8631F4];
}
</style>
