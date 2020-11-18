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
  background-color: #ffffcc;
  border-radius: 20px;
  padding: 20px;
  color: #804d00;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 0;
  }
}
</style>
