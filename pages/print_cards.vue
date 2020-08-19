<template>
  <div>
    <div class="card_list">
      <QuantumCard
        v-for="(skill,index) in skills"
        :key="index"
        :card_info="skill"
        :language="language"
        :apply_changes_by_default="true"
        :use_printing_style="true"
        type="skill"
      ></QuantumCard>
    </div>
    <div class="card_list">
      <QuantumCard
        v-for="(tactic,index) in tactics"
        :key="index"
        :card_info="tactic"
        :language="language"
        :apply_changes_by_default="true"
        :use_printing_style="true"
        type="tactic"
      ></QuantumCard>
    </div>
  </div>
</template>

<script>
import { quantum_card_skills } from "~/assets/js/skills.js";
import { quantum_card_tactics } from "~/assets/js/tactics.js";
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
    tactics: function () {
      return quantum_card_tactics.filter(
        (tactic) => tactic[this.language].status != "rm"
      );
    },
  },
  mounted: function () {
    this.$store.commit("changeActivePage", this.$route.path);
  },
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>
