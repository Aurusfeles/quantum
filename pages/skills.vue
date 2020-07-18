<template>
  <div class="card_list">
    <QuantumCard
      v-for="(skill,index) in skills"
      :key="index"
      :card_info="skill"
      :language="language"
    ></QuantumCard>
  </div>
</template>

<script>
import { quantum_card_skills } from "~/assets/skills.js";
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
      skills: quantum_card_skills
    };
  },
  computed: {}
};
</script>

<style>
body {
  background-color: white;
}
.card_list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
