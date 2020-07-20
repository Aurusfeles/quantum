<template>
  <div>
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
.language_button {
  margin: 5px;
  width: 20px;
  height: 15px;
}
</style>


