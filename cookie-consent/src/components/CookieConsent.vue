<template>
  <div :class="{ consent: true, 'consent--light': this.isBackground }">
    <div class="consent__content">
      <h1 class="consent__title">Cookie Settings</h1>

      <p class="consent__intro">
        We respect your privacy! Nevertheless, this website uses cookies and
        similar technolgies to save and process personal data.
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
      <form
        action="https://10010011000001000010001000011011.100101.online/"
        method="get"
        @submit.prevent="showThankYouPopup"
      >
        <Section
          title="For a better shopping experience, our following marketing partners will collect personal data to make you custom offers you can't ignore. (Don't worry if you forget to check our marketing cookies! They will track any trace you leave in the internet anyways.)"
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, CustomEvents } from "../EventBus";
import Buttons from "./Buttons.vue";
import Section from "./Section.vue";

@Component({
  components: {
    Buttons,
    Section
  }
})
export default class CookieConsent extends Vue {
  isBackground = false;

  showThankYouPopup($event: Event) {
    this.isBackground = true;
    EventBus.$emit(CustomEvents.ShowThankYouPopup);
    const form: HTMLFormElement = $event.target as HTMLFormElement;
    setTimeout(() => form.submit(), 2000);
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.consent {
  color: $primary-color;
  border: 2px solid $primary-color;
  background-color: $secondary-color;
  padding: 20px;
  height: 80vh;
  max-width: 1200px;
  margin: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
  }

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

  &--light {
    opacity: 0.4;
  }
}
</style>
