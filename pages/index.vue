
<template>
  <div v-html="text"></div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    text: function () {
      var file = `README_${this.$store.state.language}.md`;
      let md = require(`~/assets/md/${file}`); /*  ~/assets/md/  allow require to load all md folder as context  */
      return md.html;
    },
  },
};
</script>

<style>
</style>
