<template>
  <div>
    <TheNavBar />
    <Nuxt />
    <footer>
      <p>
        Concept:
        <a href="https://github.com/stolksdorf">stolksdorf</a>
      </p>
      <p>
        Website:
        <a href="https://github.com/aurusfeles">aurusfeles</a>
      </p>
    </footer>
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

blockquote {
  font-style: italic;
}

.text_content {
  margin-left: auto;
  margin-right: auto;
  overflow-wrap: break-all;
  width: 745px;
}

footer {
  background-color: lavender;
  font-style: italic;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 5em;
}

@media all and (max-width: 800px) {
  .text_content {
    margin-left: 1em;
    margin-right: 1em;
    width: auto;
  }
}
</style>


