<template>
  <div>
    <div class="quantum_card">
      <div class="card_header">
        <span class="card_title">{{card_info[language]['name']}}</span>
        <span
          class="card_status"
          :class="'status_'+status"
          :style="{color:'status_color'}"
        >{{status_text}}</span>
        <span class="card_status_unicode_icon">{{status_unicode_icon}}</span>
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
      return quantum_card_status[st] ? st : "no_status";
    },
    status_text: function() {
      if (this.status != "no_status") {
        let card_status = quantum_card_status[this.status];
        return card_status ? card_status[this.language] : "unknown status";
      } else {
        return "no status";
      }
    },
    status_unicode_icon: function() {
      return "O"; // 🟊🞬⇨?
    },
    card_art: function() {
      return (
        "/images/card_arts/" +
        (this.card_info.art ? this.card_info.art + ".png" : "_no_art.png")
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
  text-align: center;
  font-style: italic;
  font-size: large;
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
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