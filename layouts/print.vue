<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "print_layout", // layouts pollute each others, so you have to define and use a global class in layouts bodies as a workaround
    },
  },
};
</script>

<style>
.print_layout html {
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

.print_layout body {
  margin: 0px;
  background-color: white;
}

.print_layout * {
  box-sizing: border-box;
}

.print_layout a {
  color: darkblue;
  text-decoration: none;
  font-weight: bold;
}

.print_layout .text_content {
  margin-left: 1em;
  margin-right: 1em;
  width: auto;
}
</style>


