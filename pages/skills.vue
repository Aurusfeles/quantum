<template>
  <div>
    <div class="text_content" v-html="new_skill_cards_text"></div>
    <div class="card_list">
      <QuantumCard
        v-for="(skill,index) in skills"
        :key="index"
        :card_info="skill"
        :language="language"
        type="skill"
      ></QuantumCard>
    </div>
    <div class="text_content" v-html="removed_skill_cards_text"></div>
    <div class="card_list">
      <QuantumCard
        v-for="(skill,index) in removed_skills"
        :key="index"
        :card_info="skill"
        :language="language"
        type="skill"
      ></QuantumCard>
    </div>
  </div>
</template>

<script>
import { quantum_card_skills } from "~/assets/js/skills.js";
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
    new_skill_cards_text: function () {
      let md = require(`~/assets/md/${this.$store.state.language}/New_Skill_Cards.md`); /*  ~/assets/md/  allow require to load all md folder as context  */
      return md.html;
    },
    removed_skill_cards_text: function () {
      let md = require(`~/assets/md/${this.$store.state.language}/Removed_Skill_Cards.md`); /*  ~/assets/md/  allow require to load all md folder as context  */
      return md.html;
    },
    skills: function () {
      return quantum_card_skills.filter(
        (skill) => skill[this.language].status != "rm"
      );
    },
    removed_skills: function () {
      return quantum_card_skills.filter(
        (skill) => skill[this.language].status == "rm"
      );
    },
  },
  mounted: function () {
    this.$store.commit("changeActivePage", this.$route.path);
  },
};
</script>

<style scoped>
</style>
