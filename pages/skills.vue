<template>
  <div class="card_list">
    <QuantumCard
      v-for="(skill,index) in skills"
      :key="index"
      :card_info="skill"
      :language="language"
      :apply_changes_by_default="true"
      :show_status="true"
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
      ],
    };
  },
  data: function () {
    return {
      language: "fr",
    };
  },
  computed: {
    skills: function () {
      return quantum_card_skills.filter(
        (skill) => skill[this.language].status != "rm"
      );
    },
  },
  mounted: function () {
    this.$store.commit("changeActivePage", this.$route.path);
  },
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
