<template>
  <div>
    <div id="printing_options">
      <p>
        <label for="card_art">Include card arts:</label>
        <input type="checkbox" v-model="arts" id="card_art" checked />
      </p>
      <p>
        Background:
        <input type="radio" v-model="background" value="black" id="background_black" />
        <label for="background_black">black</label>
        <input type="radio" v-model="background" value="white" id="background_white" checked />
        <label for="background_white">White</label>
      </p>

      <p>
        Cards:
        <input type="radio" v-model="card_list" value="all" id="list_all" checked />
        <label for="list_all">All</label>
        <input type="radio" v-model="card_list" value="skills" id="list_skills" />
        <label for="list_skills">Skills</label>
        <input type="radio" v-model="card_list" value="tactics" id="list_tactics" />
        <label for="list_tactics">Tactics</label>
      </p>
      <input type="button" value="Print the cards!" @click="print" />
    </div>
    <div id="cards">
      <div class="card_list" v-if="card_list!='tactics'">
        <QuantumCard
          v-for="(skill,index) in skills"
          :key="index"
          :card_info="skill"
          :language="language"
          :apply_changes_by_default="true"
          :use_printing_style="true"
          :background="background"
          :show_art="arts"
          type="skill"
        ></QuantumCard>
      </div>
      <div class="card_list" v-if="card_list!='skills'">
        <QuantumCard
          v-for="(tactic,index) in tactics"
          :key="index"
          :card_info="tactic"
          :language="language"
          :apply_changes_by_default="true"
          :use_printing_style="true"
          :background="background"
          :show_art="arts"
          type="tactic"
        ></QuantumCard>
      </div>
    </div>
  </div>
</template>

<script>
import { quantum_card_skills } from "~/assets/js/skills.js";
import { quantum_card_tactics } from "~/assets/js/tactics.js";
export default {
  data: function () {
    return {
      language: "fr",
      arts: true,
      background: "black",
      card_list: "all",
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
  methods: {
    print: function () {
      print();
    },
  },
};
</script>

<style scoped>
#printing_options {
  margin: 2em;
}

p {
  padding: 0.5em;
}

.card_list {
  font-size: 0; /* to prevent white space between card rows */
}

@media print {
  #printing_options {
    display: none;
  }
}
</style>
