
<template>
  <div id="content" v-html="content"></div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    content: function () {
      var file = `New_Rules_${this.$store.state.language}.md`;
      let md = require(`~/assets/md/${file}`); /*  ~/assets/md/  allow require to load all md folder as context  */
      return md.html;
    },
  },
  mounted: function () {
    this.$store.commit("changeActivePage", this.$route.path);
  },
};
</script>

<style>
</style>
