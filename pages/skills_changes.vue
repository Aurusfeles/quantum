<template>
  <div id="container">
    <div id="new_cards">
      <QuantumCard
        v-for="(skill,index) in new_skills"
        :key="index"
        :card_info="skill"
        :language="language"
        :apply_changes="true"
        :show_status="false"
      ></QuantumCard>
    </div>
    <div id="unchanged_cards">
      UNCHANGED CARDS
      <QuantumCard
        v-for="(skill,index) in unchanged_skills"
        :key="index"
        :card_info="skill"
        :language="language"
        :apply_changes="true"
        :show_status="false"
      ></QuantumCard>
    </div>
    <div id="changed_cards">
      CHANGED CARDS
      <table class="card_list">
        <tbody>
          <tr class="skill" v-for="(skill,index) in changed_skills" :key="index">
            <td>
              <QuantumCard
                :card_info="skill"
                :language="language"
                :apply_changes="false"
                :show_status="false"
              ></QuantumCard>
            </td>
            <td>
              <img class="arrow" src="/images/right_arrow.png" alt="right arrow" />
            </td>
            <td>
              <QuantumCard
                :card_info="skill"
                :language="language"
                :apply_changes="true"
                :show_status="false"
              ></QuantumCard>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="removed_cards">
      REMOVED CARDS
      <QuantumCard
        v-for="(skill,index) in removed_skills"
        :key="index"
        :card_info="skill"
        :language="language"
        :apply_changes="true"
        :show_status="false"
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
      skills: quantum_card_skills,
    };
  },
  computed: {
    new_skills: function () {
      return this.skills.filter(
        (skill) =>
          skill[this.language].status == "new" ||
          skill[this.language].status == "tst"
      );
    },
    changed_skills: function () {
      return this.skills.filter(
        (skill) =>
          skill[this.language].status == "rev" ||
          skill[this.language].status == "chg"
      );
    },
    removed_skills: function () {
      return this.skills.filter((skill) => skill[this.language].status == "rm");
    },
    unchanged_skills: function () {
      return this.skills.filter(
        (skill) => skill[this.language].status == "unchg"
      );
    },
  },
  mounted: function () {
    this.$store.commit("changeActivePage", this.$route.path);
  },
};
</script>

<style scoped>
#container {
  background-color: white;
  width: 745px;
  margin-left: auto;
  margin-right: auto;
}

.arrow {
  max-height: 10em;
  margin: 1em;
}

#new_cards {
  background-color: limegreen;
}

#unchanged_cards {
  background-color: lightgreen;
}

#changed_cards {
  background-color: khaki;
}

#removed_cards {
  background-color: indianred;
}
</style>
