<template>
  <div id="navbar">
    <img id="logo" src="/images/logo.jpg" alt="logo" />
    <div id="link_tab">
      <nuxt-link
        class="link"
        v-for="(value,name,index) in menu"
        :to="value.route"
        :key="index"
        :class="{isActive:value.route==activePage}"
        v-text="value.caption[$store.state.language]"
      />
    </div>
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
  data: function () {
    return {
      languages: {
        en: {
          id: "en",
          name: "English",
        },
        fr: {
          id: "fr",
          name: "Français",
        },
      },
      menu: {
        main: {
          route: "/",
          caption: {
            en: "Main",
            fr: "Général",
          },
        },
        rules: {
          route: "/rules",
          caption: {
            en: "Rules",
            fr: "Règles",
          },
        },
        skills: {
          route: "/skills",
          caption: {
            en: "Skills",
            fr: "Compétences",
          },
        },
      },
    };
  },
  props: {
    card_info: Object,
  },
  computed: {
    language: function () {
      return this.$store.state.language;
    },
    activePage: function () {
      return this.$store.state.activePage;
    },
  },
  methods: {
    changeLanguage: function (lng) {
      this.$store.commit("changeLanguage", lng);
    },
  },
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
  border: 1px solid black;
}

#link_tab {
  margin-left: 2em;
  align-self: center;
}
#language_tab {
  margin-left: auto;
  margin-right: 20px;
}

.language_button {
  margin: 5px;
  width: 30px;
  height: 20px;
}

.link {
  font-size: large;
  color: #282828;
  text-decoration: none;
  padding: 0.2em;
  margin: 0.2em;
  text-transform: uppercase;
  font-weight: bold;
}

.isActive {
  color: white;
  background-color: #282828;
  border-radius: 1em;
}
#logo {
  height: 80px;
  margin: 0.4em 1em;
}
</style>


