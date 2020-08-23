<template>
  <div id="navbar">
    <img id="logo" :src="require('~/assets/images/logo.jpg')" alt="logo" />
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
        :src="require(`~/assets/images/languages/${lang.id}.png`)"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
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
            en: "Skill cards",
            fr: "Cartes Compétence",
          },
        },
        tactics: {
          route: "/tactics",
          caption: {
            en: "Tactic cards",
            fr: "Cartes Tactique",
          },
        },
        print: {
          route: "/print_cards",
          caption: {
            en: "Print",
            fr: "Imprimer",
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
  mounted: function () {
    let lng =
      navigator.language ||
      navigator.browserLanguage ||
      (navigator.languages || ["en"])[0];

    lng = lng.split("-")[0];
    if (this.languages[lng]) {
      this.$store.commit("changeLanguage", lng);
    }
  },
};
</script>

<style scoped>
#navbar {
  position: sticky;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  border: 1px solid black;
}

#link_tab {
  flex: 1 0 auto;
  align-self: center;
  display: flex;
  justify-content: space-evenly;
}
#language_tab {
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  align-self: flex-start;
}

.language_button {
  margin: 5px;
  width: 30px;
  height: 20px;
}

.link {
  flex: 0 0 auto;
  font-size: large;
  color: #282828;
  text-decoration: none;
  padding: 0.2em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  text-transform: uppercase;
  font-weight: bold;
}

.isActive {
  color: white;
  background-color: #282828;
  border-radius: 1em;
}
#logo {
  height: 5em;
  width: auto;
  margin: 0.4em 1em;
}

@media all and (max-width: 1024px) {
  #logo {
    width: 10em;
    height: auto;
  }

  #navbar {
    position: unset;
  }

  #link_tab {
    order: 1;
    width: 100%;
    flex-direction: column;
  }
}

@media print {
  #navbar {
    display: none;
  }
}
</style>


