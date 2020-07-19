<template>
  <div>
    <div id="quantum_card">
      <div id="card_header">
        <span id="card_title">{{card_info[language]['name']}}</span>
        <span id="card_status">
          <span
            class="card_status_unicode_icon"
            :style="{color: status.color}"
          >{{status.unicode_icon}}</span>
          <span id="card_status_text" :style="{color:status.color}">{{status[language]}}</span>
          <span
            class="card_status_unicode_icon"
            :style="{color: status.color}"
          >{{status.unicode_icon}}</span>
        </span>
      </div>
      <div>
        <img id="card_art" :src="card_art" alt="card art" />
      </div>
      <div id="card_text">{{card_info[language]['text']}}</div>
      <!-- <p class="card_notes">{{card_info[language]['notes']}}</p>-->
      <div id="card_notes" v-if="card_info[language]['notes']">
        <div id="notes_tag">notes</div>
        <div id="notes_text">{{card_info[language]['notes']}}</div>
      </div>
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
#quantum_card {
  position: relative;
  border: 1px;
  border-color: lightslategray;
  border-radius: 15px;
  box-shadow: 5px 5px 5px lightslategray;
  margin-top: 1em;
  margin-left: 1em;
  width: 300px;
  height: 250px;
  background-color: #202030;
}
#card_title {
  text-align: center;
  font-size: large;
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

#card_notes {
  padding: 1em;
  font-size: smaller;
  color: lightslategray;
  font-style: italic;
}
#card_art {
  width: 100%;
}

#card_status {
  font-size: small;
  padding: 1em;
  font-weight: bold;
}

#card_status_text {
  text-align: center;
  font-style: italic;
  color: white;
  text-transform: uppercase;
}

#card_text {
  text-align: center;
  padding: 1em;
  font-size: small;
  line-height: 1.25;
  /*font-weight: 400;*/
  color: white;
}

#card_notes {
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: slategrey;
  color: white;
  z-index: 1;
}
#notes_tag {
  /*writing-mode: vertical-rl;*/
}

#notes_text {
  color: white;
  height: 0em;
  overflow: hidden;
  transition-property: height;
  transition: all 0.2s ease-in-out;
}
#card_notes:hover #notes_text {
  height: 4em;
}
</style>