<template>
  <div class="consent">
    <h1 class="consent__title">Cookie Settings</h1>
    <Section title="Functional cookies" :disableChoices="true" />
    <form action="/" method="get">
      <Section title="Lorem Ipsum" />
      <Section title="Lorem Ipsum" />
      <Section title="Lorem Ipsum" />
      <Section title="Lorem Ipsum" />
      <Section title="Lorem Ipsum" />
      <Buttons />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Section from "./Section.vue";
import Buttons from "./Buttons.vue";

@Component({
  components: {
    Buttons,
    Section
  }
})
export default class CookieConsent extends Vue {}
</script>

<style scoped lang="scss">
.consent {
  background-color: #fff;
  padding: 20px;
  color: #009900;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid #009900;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0 20px lightgray;

  height: 90vh;
  /*
  position: absolute;
  top: 5vh;
  left: 50%;
  width: 800px;
  max-width: 90%;
  transform: translateX(-50%);
  */

  &__title {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: -5px 5px 5px lightgray;
    margin-top: 0;
  }
}
</style>
