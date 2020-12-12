<template>
  <div id="app">
    <CookieConsent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CookieConsent from "./components/CookieConsent.vue";

@Component({
  components: {
    CookieConsent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./styles/_variables.scss";

body {
  padding: 0;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 30px;
  margin: 0;
  background-color: $secondary-color;
  // position: relative;
}
</style>
