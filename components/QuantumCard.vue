<template>
  <div>
    <div class="quantum_card">
      <div class="title" :class="card_info[language]['status']">{{card_info[language]['name']}}</div>
      <div>
        <img class="card_art" :src="image_path" alt="card art" />
      </div>
      <div class="text">{{card_info[language]['text']}}</div>
      <p class="notes">{{card_info[language]['notes']}}</p>
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
          return require("~/assets/images/card_arts/" +
            this.card_info.art +
            ".png");
        } catch (e) {
          if (e.code !== "MODULE_NOT_FOUND") {
            throw e;
          }
          return require("~/assets/images/card_arts/_no_art.png");
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
  min-height: 200px;
  background-color: #202030;
}
.title {
  text-align: center;
  font-size: xx-large;
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

.notes {
  padding: 1em;
  color: lightslategray;
  font-style: italic;
}
.card_art {
  width: 100%;
}

.text {
  text-align: center;
  padding: 1em;
  font-size: large;
  line-height: 1.25;
  font-weight: 600;
  color: white;
}
</style>