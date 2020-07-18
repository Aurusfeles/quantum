<template>
  <div>
    <div>
      <!--  fonctionne->  <img src="~assets/images/agile.png" alt />  -->
    </div>
    <div class="quantum_card" :style="{ 'background-image': 'url(\'' + image_path + '\')'}">
      <div class="content">
        <div class="title" :class="card_info[language]['status']">{{card_info[language]['name']}}</div>
        <div class="text">{{card_info[language]['text']}}</div>
        <p class="notes">{{card_info[language]['notes']}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card_info: Object,
    language: String
  },
  computed: {
    image_path: function() {
      if (this.card_info.art) {
        try {
          return require("~/assets/images/" + this.card_info.art + ".png");
        } catch (e) {
          if (e.code !== "MODULE_NOT_FOUND") {
            throw e;
          }
          return "";
        }
      }
    }
  }
};
</script>
<style scoped>
.quantum_card {
  border: 1px;
  border-color: lightslategray;
  border-radius: 25px;
  box-shadow: 5px 5px 5px lightslategray;
  margin-top: 2em;
  margin-left: 2em;
  max-width: 600px;
  padding: 2em;
}

.content {
  margin-top: 1em;
}

.title {
  font-weight: bold;
  text-transform: uppercase;
  color: indigo;
}

.notes {
  margin-top: 0.5em;
  color: lightslategray;
  font-style: italic;
}

.text {
  margin-top: 0.25em;
  font-size: large;
  line-height: 1.25;
  font-weight: 600;
}
</style>