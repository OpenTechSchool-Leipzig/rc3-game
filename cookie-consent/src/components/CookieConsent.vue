<template>
  <div class="consent">
    <h1 class="consent__title">Cookie Settings</h1>

    <p class="consent__intro">
      We respect your privacy! Nevertheless, this website uses cookies and
      similar technolgies to save and process personal user data.
    </p>
    <Section
      title="Obviously, we need your consent for the following functional cookies in order to keep this page running"
      :disableChoices="true"
      :items="[
        'Access to collected data by the NSA',
        'Access to collected data by the CIA',
        'Access to collected data by the BND',
        'Access to collected data by the FSB',
        'Saving and processing your login credentials',
        'Saving and processing session information'
      ]"
    />
    <form action="https://hardcore-borg-141238.netlify.app/" method="get">
      <Section
        title="For a better shopping experence, our following marketing partners will collect personal data to make you custom offers you can't ignore. (Dont't worry if you forget to check our marketing cookies! They will track any trace you leave in the internet anyways.)"
        :items="[
          'Google Analytics',
          'Facebook Analytics',
          'Amazon Analytics',
          'Twitter Analytics',
          'Cambridge Analytics'
        ]"
      />
      <Section
        title="For an extraordinary surfing experience, you may want to check the following advertising cookies"
        :items="['foo', 'bar']"
      />
      <Section
        title="Since our website is solely funded by ads, please consider to give consent to the following cookies"
        :items="['foo', 'bar']"
      />
      <Section
        title="Some extra nice-to-know data that we would love to keep about you"
        :items="[
          'Shoe size',
          'Favourite vacation destinations',
          'Number of houses in the street you live',
          'Preferred eye color of you sexual partner(s)',
          'Names of your elementary school teachers',
          'Date your mother ate an apple for the first time in her life '
        ]"
      />
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
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0 0 16px $tertiary-color;
    margin-top: 0;
  }

  &__intro {
    color: $tertiary-color;
  }
}
</style>
