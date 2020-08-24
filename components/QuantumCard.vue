<template>
  <div class="container">
    <div
      v-if="!use_printing_style"
      class="card_status"
      :style="{color:status.color}"
    >{{status[language]}}</div>
    <div class="quantum_card" :class="quantum_card_class">
      <img v-if="show_art" :src="card_overlay_art" alt="card overlay" class="card_overlay" />
      <div class="edge left">{{translate(type)}}</div>
      <div class="card_body">
        <div class="card_top">
          <div class="card_title">{{card.name}}</div>
        </div>
        <div class="card_middle">
          <img v-if="show_art" class="card_art" :src="card_art" />
          <div
            class="playtesting"
            v-if="card.playtesting&&!revert_changes&&!use_printing_style"
          >{{translate("playtesting")}}</div>
          <div class="original" v-if="revert_changes">{{"("+translate("original")+")"}}</div>
          <div class="card_notes" v-if="card.notes&&!use_printing_style">
            <div class="notes_text">
              <div style="margin:1em;">{{card.notes}}</div>
            </div>
            <div class="notes_tag">{{translate("notes")}}</div>
          </div>
          <div
            v-if="changed&&!use_printing_style"
            class="original_tag"
            @mouseover="revert_changes=true"
            @mouseleave="revert_changes=false"
          >{{translate("see_original")}}</div>
        </div>
        <div class="card_bottom">
          <div class="card_text">{{card.text}}</div>
        </div>
      </div>
      <div class="edge right">{{translate(type)}}</div>
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
    };
  },
  props: {
    card_info: Object,
    apply_changes_by_default: {
      type: Boolean,
      default: true,
    },
    use_printing_style: {
      type: Boolean,
      default: false,
    },
    type: String,
    show_art: {
      type: Boolean,
      default: true,
    },
    background: {
      type: String,
      default: "black",
    },
  },
  computed: {
    quantum_card_class: function () {
      let card_class = {};
      card_class["dark_background"] = this.background == "black";
      card_class["light_background"] = this.background == "white";
      card_class["tactic"] = this.type == "tactic";
      card_class["skill"] = this.type == "skill";
      card_class["no_art"] = !this.show_art;
      card_class["quantum_card_print"] = this.use_printing_style;
      card_class["quantum_card_screen"] = !this.use_printing_style;
      return card_class;
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
.container {
  position: relative;
  display: inline-block;
}

.card_status {
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

.quantum_card {
  display: flex;
  position: relative;
  overflow: hidden;
}

.quantum_card_screen {
  border-radius: 15px;
  box-shadow: 5px 5px 5px lightslategray;
  margin-top: 1em;
  margin-left: 1em;
  width: 22em;
  height: 16em;
}

.quantum_card_print {
  border-style: dashed;
  border-color: grey;
  border-width: 1px;
  margin: 0px;
  width: 88mm;
  height: 63mm;
}

.dark_background {
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
  color: white;
  color-adjust: exact;
}

.light_background {
  background-image: linear-gradient(
    0deg,
    #f7f7f7 25%,
    #ffffff 25%,
    #ffffff 50%,
    #f7f7f7 50%,
    #f7f7f7 75%,
    #ffffff 75%,
    #ffffff 100%
  );
  background-size: 8px 8px;
  color: rgb(0, 0, 0);
  color-adjust: exact;
}

.card_body {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.no_art .card_title {
  font-size: x-large;
}

.card_top {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.skill .card_top {
  flex: 1 0 10%;
}

.tactic .card_top {
  flex: 1 0 20%;
}

.card_title {
  padding: 0.2em;
  width: 100%;
  text-align: center;
  font-size: large;
  font-weight: bold;
  text-transform: uppercase;
}

.card_middle {
  width: 100%;
  background-size: cover;
  position: relative;
  flex: 0 1 50%;
  min-width: 0;
  overflow: hidden;
}

.no_art .card_middle {
  display: none;
}

.card_bottom {
  flex: 1 0 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card_text {
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size: small;
  line-height: 1.25;
  align-self: center;
  width: 100%;
}

.card_notes {
  position: absolute;
  font-size: smaller;
  font-style: italic;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 30%;
}
.card_notes:hover {
  width: 100%;
  height: 100%;
}

.notes_tag {
  padding-left: 0.5em;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 0px 0px 15px 0px;
}

.notes_text {
  height: 0;
  max-height: 15em;
  width: 100%;
  overflow-y: scroll;
  scrollbar-color: lightgrey darkgrey;
  scrollbar-width: thin;
  background-color: slategrey;
  /*transition: all 0.5s ease-out;*/
}

.card_notes:hover > .notes_text {
  height: 100%;
  border-radius: 0px 0px 15px 0px;
}

.card_notes:hover > .notes_tag {
  display: none;
}

.original_tag {
  position: absolute;
  font-size: smaller;
  font-style: italic;
  top: 0px;
  right: 0px;

  z-index: 1;
  width: 35%;
  text-align: right;
  padding-right: 0.5em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 0px 15px;
}

.original_tag:hover {
  background-color: rgba(100, 100, 100, 0.5);
}

.playtesting {
  position: absolute;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: x-large;
  color: yellow;
  color-adjust: exact;
  bottom: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.original {
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

.card_overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
}

.card_art {
  width: 100%;
  height: auto;
}

.skill .card_body {
  flex-basis: 86%;
}

.tactic .card_body {
  flex-basis: 73%;
}

.no_art .card_body {
  flex-basis: 86%;
}

.edge {
  flex-grow: 1;
  align-self: center;
  height: 100%;
  text-align: center;
  font-size: large;
  font-weight: bold;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  padding: 0.5em;
}

.no_art .edge.left {
  background-color: rgba(125, 125, 125, 0.06);
}
.no_art .edge.right {
  display: none;
}
.skill .edge.right {
  display: none;
}

.no_art .card_text {
  font-size: medium;
}

/* next setting is to get correct font color (white) while printing wit firefox
  but it doesn't work  */
/*
@media print {
  * {
    -webkit-print-color-adjust: exact;
    printer-colors: exact !important;
    color-adjust: exact !important;
  }
}*/
</style>