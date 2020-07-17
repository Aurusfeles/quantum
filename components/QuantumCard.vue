<template>
  <div
    class="bg-local rounded overflow-hidden border border-gray-400 shadow-md mt-8 ml-8 max-w-3xl p-4 p-8"
    :style="{'background-image': image_path}"
  >
    <div class="md:flex">
      <div class="mt-4 md:mt-0 md:ml-6">
        <div
          class="uppercase tracking-wide text-sm text-indigo-600 font-bold"
          :class="card_info[language]['status']"
        >{{card_info[language]['name']}}</div>
        <div
          class="block mt-1 text-lg leading-tight font-semibold text-gray-800"
        >{{card_info[language]['text']}}</div>
        <p class="mt-2 text-gray-500 italic">{{card_info[language]['notes']}}</p>
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
      return "~/static/images/" + this.card_info.art + ".png";
    }
  }
};
</script>