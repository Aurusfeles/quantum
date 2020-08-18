
<template>
  <div class="text_content" v-html="content"></div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    content: function () {
      let md = require(`~/assets/md/${this.$store.state.language}/main.md`); /*  ~/assets/md/  allow require to load all md folder as context  */
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
