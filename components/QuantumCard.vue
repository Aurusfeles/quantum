<template>
  <div>
    <div class="quantum_card">
      <div class="card_header">
        <span class="card_title">{{card_info[language]['name']}}</span>
        <span class="card_status">
          <span
            class="card_status_unicode_icon"
            :style="{color: status.color}"
          >{{status.unicode_icon}}</span>
          <span
            class="card_status_text"
            :class="'status_'+status"
            :style="{color:status.color}"
          >{{status[language]}}</span>
          <span
            class="card_status_unicode_icon"
            :style="{color: status.color}"
          >{{status.unicode_icon}}</span>
        </span>
      </div>
      <div>
        <img class="card_art" :src="card_art" alt="card art" />
      </div>
      <div class="card_text">{{card_info[language]['text']}}</div>
      <p class="card_notes">{{card_info[language]['notes']}}</p>
    </div>
  </div>
</template>
<script>
import { quantum_card_status } from "~/assets/skills.js";
export default {
  props: {
    card_info: Object,
    language: String
  },
  computed: {
    status: function() {
      let st = this.card_info[this.language].status;
      return quantum_card_status[st]
        ? quantum_card_status[st]
        : quantum_card_status["no_status"];
    },
    card_art: function() {
      return (
        "/images/card_arts/" +
        (this.card_info.art ? this.card_info.art + ".jpg" : "_no_art.jpg")
      );
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
.card_title {
  text-align: center;
  font-size: xx-large;
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

.card_notes {
  padding: 1em;
  color: lightslategray;
  font-style: italic;
}
.card_art {
  width: 100%;
}

.card_status {
  font-size: large;
  padding: 1em;
  font-weight: bold;
}

.card_status_text {
  text-align: center;
  font-style: italic;
  color: white;
  text-transform: uppercase;
}

.card_text {
  text-align: center;
  padding: 1em;
  font-size: large;
  line-height: 1.25;
  font-weight: 600;
  color: white;
}
</style>