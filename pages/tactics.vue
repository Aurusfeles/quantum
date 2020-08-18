<template>
  <div>
    <div class="text_content" v-html="new_tactic_cards_text"></div>
    <div class="card_list">
      <QuantumCard
        v-for="(tactic,index) in tactics"
        :key="index"
        :card_info="tactic"
        :language="language"
        :apply_changes_by_default="true"
        :show_status="true"
        type="tactic"
      ></QuantumCard>
    </div>
    <div class="text_content" v-html="removed_tactic_cards_text"></div>
    <div class="card_list">
      <QuantumCard
        v-for="(tactic,index) in removed_tactics"
        :key="index"
        :card_info="tactic"
        :language="language"
        :apply_changes_by_default="true"
        :show_status="true"
        type="tactic"
      ></QuantumCard>
    </div>
  </div>
</template>

<script>
import { quantum_card_tactics } from "~/assets/js/tactics.js";
export default {
  head() {
    return {
      title: "Tactics",
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
    new_tactic_cards_text: function () {
      let md = require(`~/assets/md/${this.$store.state.language}/New_Tactic_Cards.md`); /*  ~/assets/md/  allow require to load all md folder as context  */
      return md.html;
    },
    removed_tactic_cards_text: function () {
      let md = require(`~/assets/md/${this.$store.state.language}/Removed_Tactic_Cards.md`); /*  ~/assets/md/  allow require to load all md folder as context  */
      return md.html;
    },
    tactics: function () {
      return quantum_card_tactics.filter(
        (tactic) => tactic[this.language].status != "rm"
      );
    },
    removed_tactics: function () {
      return quantum_card_tactics.filter(
        (tactic) => tactic[this.language].status == "rm"
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
.card_list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
