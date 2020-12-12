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

<style lang="scss">
@import "../styles/_variables.scss";

.consent {
  @include font-source-sans;
  background-color: $secondary-color;
  padding: 20px;
  color: $primary-color;
  border: 2px solid $primary-color;
  overflow-x: hidden;
  overflow-y: scroll;

  height: 80vh;
  /*
  position: absolute;
  top: 5vh;
  left: 50%;
  width: 800px;
  max-width: 90%;
  transform: translateX(-50%);
  */

  &__title {
    @include font-bloody;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 0 16px $tertiary-color;
    margin-top: 0;
  }
}
</style>
