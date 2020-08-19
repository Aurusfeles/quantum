<template>
  <div id="container">
    <div
      v-if="!use_printing_style"
      id="card_status"
      :style="{color:status.color}"
    >{{status[language]}}</div>
    <div id="quantum_card" :style="card_style">
      <img :src="card_overlay_art" alt="card overlay" id="card_overlay" />
      <div id="card_top" :style="{'height': title_height}">
        <div id="card_title">{{card.name}}</div>
      </div>
      <div id="card_art" :style="{ backgroundImage: `url(${card_art})` }">
        <div
          id="playtesting"
          v-if="card.playtesting&&!revert_changes&&!use_printing_style"
        >{{translate("playtesting")}}</div>
        <div id="original" v-if="revert_changes">{{"("+translate("original")+")"}}</div>
        <div id="card_notes" v-if="card.notes&&!use_printing_style">
          <div id="notes_text">
            <div style="margin:1em;">{{card.notes}}</div>
          </div>
          <div id="notes_tag">{{translate("notes")}}</div>
        </div>
        <div
          v-if="changed&&!use_printing_style"
          id="original_tag"
          @mouseover="revert_changes=true"
          @mouseleave="revert_changes=false"
        >{{translate("see_original")}}</div>
      </div>
      <div id="card_bottom">
        <div id="card_text">{{card.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import {
  quantum_card_status,
  quantum_card_display_texts,
} from "~/assets/js/common.js";

export default {
  data: function () {
    return {
      revert_changes: false,
      printing_style: {
        "border-radius": "0px",
        "box-shadow": "0px 0px 0px white",
        "margin-top": "1px",
        "margin-left": "1px",
        width: "88mm",
        height: "63mm",
      },
    };
  },
  props: {
    card_info: Object,
    apply_changes_by_default: Boolean,
    use_printing_style: Boolean,
    type: String,
  },
  computed: {
    card_style: function () {
      let card_style = this.use_printing_style
        ? { ...this.printing_style }
        : {};
      card_style["gridTemplateColumns"] =
        this.type == "skill" ? "1fr 6fr 0fr" : "1fr 6fr 1fr";
      return card_style;
    },
    title_height: function () {
      return this.type == "skill" ? "1,5em" : "3em";
    },
    card_overlay_art: function () {
      return require(`~/assets/images/${this.type}_overlay.png`);
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
      return require(`~/assets/images/card_arts/${
        this.card.art ? this.card.art : "_no_art"
      }.jpg`);
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
#container {
  position: relative;
  display: inline-block;
}

#card_status {
  position: absolute;
  right: 1em;
  top: 0.5em;
  font-size: small;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  background-color: #282828;
  border-radius: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  z-index: 10;
}

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
    #151520 25%,
    #202030 25%,
    #202030 50%,
    #151520 50%,
    #151520 75%,
    #202030 75%,
    #202030 100%
  );
  background-size: 8px 8px;
  overflow: hidden;
}
#card_top {
  grid-column: 2;
  grid-row: 1;
  display: flex;
}
#card_title {
  padding: 0.2em;
  align-self: center;
  text-align: center;
  width: 100%;
  text-align: center;
  font-size: large;
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
#card_bottom {
  grid-column: 2;
  grid-row: 3;
  display: flex;
}

#card_text {
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size: small;
  line-height: 1.25;
  align-self: center;
  color: white;
  width: 100%;
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

#playtesting {
  position: absolute;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: x-large;
  color: yellow;
  bottom: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

#original {
  position: absolute;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: x-large;
  color: black;
  bottom: 0px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
}

#card_overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
}
</style>