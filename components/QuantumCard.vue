<template>
  <div>
    <div id="quantum_card">
      <div id="card_edge" :style="{ backgroundImage: `url(${card_edge_art})` }"></div>
      <div id="card_header">
        <div id="card_title">{{card.name}}</div>
        <div v-if="show_status" id="card_status">
          <span id="card_status_text" :style="{color:status.color}">{{status[language]}}</span>
        </div>
      </div>
      <div id="card_art" :style="{ backgroundImage: `url(${card_art})` }">
        <div id="playtesting" v-if="card.playtesting">
          {{translate("playtesting")}}
          </div>
        <div id="card_notes" v-if="card.notes">
          <div id="notes_text">
            <div style="margin:1em;">{{card.notes}}</div>
          </div>
          <div id="notes_tag">{{translate("notes")}}</div>
        </div>
        <div
          v-if="changed"
          id="original_tag"
          @mouseover="revert_changes=true"
          @mouseleave="revert_changes=false"
        >{{translate("original")}}</div>
      </div>
      <div id="card_text">{{card.text}}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { quantum_card_status,quantum_card_display_texts} from "~/assets/js/common.js";

export default {
  data: function () {
    return {
      revert_changes: false,
    };
  },
  props: {
    card_info: Object,
    apply_changes_by_default: Boolean,
    show_status: Boolean,
    type: String
  },
  computed: {
    card_edge_art: function(){
      return `/images/${this.type}_edge.png`;
    },
    changed: function () {
      return this.card.status == "chg" || this.card.status == "rev";
    },
    language: function () {
      return this.$store.state.language;
    },
    apply_changes: function () {
      return this.apply_changes_by_default && !this.revert_changes;
    },
    card: function () {
      if (this.apply_changes) {
        return {
          ...this.card_info,
          ...this.card_info[this.language],
          ...this.card_info[this.language].changes,
        };
      }
      return { ...this.card_info, ...this.card_info[this.language] };
    },
    status: function () {
      let st = this.card.status;
      return quantum_card_status[st]
        ? quantum_card_status[st]
        : quantum_card_status["no_status"];
    },
    card_art: function () {
      return (
        "/images/card_arts/" +
        (this.card.art ? this.card.art + ".jpg" : "_no_art.jpg")
      );
    },
  },
  methods: {
    translate: function (text_id) {
      return quantum_card_display_texts[text_id][this.language];
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
  background-image: linear-gradient(
    0deg,
    #303045 25%,
    #202030 25%,
    #202030 50%,
    #303045 50%,
    #303045 75%,
    #202030 75%,
    #202030 100%
  );
  background-size: 8px 8px;
  overflow: hidden;
}

#card_edge {  
  background-size: 100% 100%;  
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
  z-index: 2;
  width: 30%;
}
#card_notes:hover {
  width: 100%;
}

#notes_tag {
  padding-left: 0.5em;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 0px 0px 15px 0px;
}

#notes_text {
  color: white;
  height: 0;
  max-height: 15em;
  width: 100%;
  overflow-y: scroll;
  scrollbar-color: lightgrey darkgrey;
  scrollbar-width: thin;
  background-color: slategrey;
  /*transition: all 0.5s ease-out;*/
}

#card_notes:hover > #notes_text {
  height: auto;
  border-radius: 0px 0px 15px 0px;
}

#card_notes:hover > #notes_tag {
  display: none;
}

#original_tag {
  position: absolute;
  font-size: smaller;
  font-style: italic;
  top: 0px;
  right: 0px;
  color: white;
  z-index: 1;
  width: 35%;
  text-align: right;
  padding-right: 0.5em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 0px 15px;
}

#original_tag:hover {
  background-color: rgba(100, 100, 100, 0.5);
}

#playtesting{
  position: absolute;  
  width:100%;
  text-align:center;
  text-transform: uppercase;  
  font-size: x-large;  
  color: yellow;
  bottom: 0px;
  z-index: 1;
}
</style>