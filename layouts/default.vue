<template>
  <div>
    <TheNavBar />
    <Nuxt />
  </div>
</template>
<script>
import TheNavBar from "~/components/TheNavBar.vue";
export default {
  components: {
    TheNavBar: TheNavBar,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0px;
  background-color: white;
}

* {
  box-sizing: border-box;
}

a {
  color: darkblue;
  text-decoration: none;
  font-weight: bold;
}

.text_content {
  margin-left: auto;
  margin-right: auto;
  overflow-wrap: break-all;
  width: 745px;
}

@media all and (max-width: 800px) {
  .text_content {
    margin-left: 1em;
    margin-right: 1em;
    width: auto;
  }
}
</style>


