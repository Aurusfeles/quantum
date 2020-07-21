<template>
  <div id="navbar">
    <div id="language_tab">
      <input
        v-for="(lang,index) in languages"
        :key="index"
        type="image"
        :alt="lang.name"
        class="language_button"
        @click="changeLanguage(lang.id)"
        :src="'/images/languages/'+lang.id + '.png'"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { quantum_card_status } from "~/assets/skills.js";
export default {
  data: function() {
    return {
      languages: {
        en: {
          id: "en",
          name: "English"
        },
        fr: {
          id: "fr",
          name: "Français"
        }
      }
    };
  },
  props: {
    card_info: Object
  },
  computed: {
    language: function() {
      return this.$store.state.language;
    }
  },
  methods: {
    changeLanguage: function(lng) {
      this.$store.commit("changeLanguage", lng);
    }
  }
};
</script>

<style scoped>
#navbar {
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
}

#language_tab {
  margin-left: auto;
  margin-right: 20px;
}
.language_button {
  align: right;
  margin: 5px;
  width: 20px;
  height: 15px;
}
</style>


