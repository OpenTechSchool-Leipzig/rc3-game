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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 10px;
  // position: relative;
}
</style>
