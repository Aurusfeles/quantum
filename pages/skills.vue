<template>
  <div>
    <div
      class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 p-8"
      v-for="(skill,index) in skills"
      :key="index"
    >
      <div class="md:flex">
        <div class="md:flex-shrink-0"></div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <div
            class="uppercase tracking-wide text-sm text-indigo-600 font-bold"
          >{{skill[language]['name']}}</div>
          <div
            class="block mt-1 text-lg leading-tight font-semibold text-gray-900"
          >{{skill[language]['text']}}</div>
          <p class="mt-2 text-gray-600">{{skill[language]['notes']}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from "~/assets/skills.js";
export default {
  head() {
    return {
      title: "Skills",
      link: [
        /*{
          rel: "stylesheet",
          href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        }*/
      ]
    };
  },
  data: function() {
    return {
      language: "fr",
      skills: skills
    };
  },
  computed: {}
};
</script>

<style>
</style>
