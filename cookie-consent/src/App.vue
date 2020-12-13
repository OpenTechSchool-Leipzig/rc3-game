<template>
  <div id="app">
    <CookieRain />
    <Popup text="Thank you very much! We value your choices!" />
    <CookieConsent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CookieConsent from "./components/CookieConsent.vue";
import CookieRain from "./components/CookieRain.vue";
import Popup from "./components/Popup.vue";

@Component({
  components: {
    CookieConsent,
    CookieRain,
    Popup
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./styles/_variables.scss";

body {
  background-color: $secondary-color;
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2.5rem;
  margin: 0;
  @include font-source-sans;
}
</style>
