<template>
  <div>
    <div id="quantum_card">
      <div id="card_edge"></div>
      <div id="card_header">
        <div id="card_title">{{card_info[language]['name']}}</div>
        <div id="card_status">
          <span
            class="card_status_unicode_icon"
            :style="{color: status.color}"
          >{{status.unicode_icon}}</span>
          <span id="card_status_text" :style="{color:status.color}">{{status[language]}}</span>
          <span
            class="card_status_unicode_icon"
            :style="{color: status.color}"
          >{{status.unicode_icon}}</span>
        </div>
      </div>
      <div id="card_art" :style="{ backgroundImage: `url(${card_art})` }">
        <div id="card_notes" v-if="card_info[language]['notes']">
          <div id="notes_text">
            <div style="margin:1em;">{{card_info[language]['notes']}}</div>
          </div>
          <div id="notes_tag">notes</div>
        </div>
      </div>
      <div id="card_text">{{card_info[language]['text']}}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { quantum_card_status } from "~/assets/skills.js";
export default {
  props: {
    card_info: Object,
  },
  computed: {
    language: function () {
      return this.$store.state.language;
    },
    status: function () {
      let st = this.card_info[this.language].status;
      return quantum_card_status[st]
        ? quantum_card_status[st]
        : quantum_card_status["no_status"];
    },
    card_art: function () {
      return (
        "/images/card_arts/" +
        (this.card_info.art ? this.card_info.art + ".jpg" : "_no_art.jpg")
      );
    },
  },
};
</script>
<style scoped>
#quantum_card {
  position: relative;
  display: grid;
  grid-template-rows: 2fr 10fr 6fr;
  grid-template-columns: 1fr 6fr;
  border: 1px;
  border-color: lightslategray;
  border-radius: 15px;
  box-shadow: 5px 5px 5px lightslategray;
  margin-top: 1em;
  margin-left: 1em;
  width: 22em;
  height: 16em;
  background-color: #202030;
  overflow: hidden;
}

#card_edge {
  background: url("/images/skill_edge.png");
  background-size: cover;
  grid-column: 1;
  grid-row: 1 / 4;
}

#card_header {
  display: flex;
  width: 100%;
  grid-column: 2;
  grid-row: 1;
}
#card_title {
  margin-left: 15px;
  align-self: flex-start;
  font-size: x-large;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
}

#card_art {
  width: 100%;
  background-size: cover;
  position: relative;
  grid-column: 2;
  grid-row: 2;
}

#card_status {
  margin-left: auto;
  align-self: center;
  font-size: small;
  padding-right: 1em;
  font-weight: bold;
}

#card_status_text {
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
  width: 100%;
  grid-column: 2;
  grid-row: 3;
}

#card_notes {
  position: absolute;
  font-size: smaller;
  font-style: italic;
  top: 0px;
  left: 0px;
  color: white;
  z-index: 1;
  width: 30%;
}
#card_notes:hover {
  width: 100%;
}

#notes_tag {
  padding-left: 1em;
  text-transform: uppercase;
  background-color: slategrey;
  width: 100%;
  border-radius: 0px 0px 15px 0px;
}

#notes_text {
  color: white;
  height: 0;
  width: 100%;
  overflow: hidden;
  background-color: slategrey;
}

#card_notes:hover > #notes_text {
  height: auto;
}
</style>