<template>
  <div>
    <div id="text_content" v-html="text_content"></div>
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
    text_content: function () {
      var file = `Skill_Cards_${this.$store.state.language}.md`;
      let md = require(`~/assets/md/${file}`); /*  ~/assets/md/  allow require to load all md folder as context  */
      return md.html;
    },
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
#text_content {
  margin-left: auto;
  margin-right: auto;
  width: 745px;
}
</style>
