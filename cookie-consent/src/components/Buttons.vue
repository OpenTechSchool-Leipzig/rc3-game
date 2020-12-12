<template>
  <div class="consent__buttons">
    <button
      type="submit"
      class="consent__button consent__button--submit"
      @mouseover="moveButtonAway"
      :style="{
        position: this.position,
        top: `${this.posY}px`,
        left: `${this.posX}px`
      }"
    >
      Confirm my choices
    </button>
    <button
      type="reset"
      class="consent__button consent__button--reset"
      @click="resetSubmitBtnPos"
    >
      Only functional cookies
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, CustomEvents } from "../EventBus";

@Component
export default class Buttons extends Vue {
  private position!: string;
  private posX!: number;
  private posY!: number;

  constructor() {
    super();
    // this.resetSubmitBtnPos();
    this.position = "static";
    this.posX = -1;
    this.posY = -1;
  }

  mounted() {
    EventBus.$on(CustomEvents.ResetSubmitBtnPos, this.resetSubmitBtnPos);
  }

  moveButtonAway(e: MouseEvent) {
    if (this.allCheckboxesAreChecked()) {
      return;
    }

    this.position = "fixed";
    this.posX = e.clientX - 130;
    this.posY = e.clientY - 55;
  }

  resetSubmitBtnPos() {
    this.position = "static";
  }

  allCheckboxesAreChecked() {
    const checkboxes = Array.from(
      document.querySelectorAll(".checkbox__input input")
    );
    const allCheckboxesAreChecked: boolean = checkboxes.every(
      (checkbox: Element) => (checkbox as HTMLInputElement).checked
    );
    return allCheckboxesAreChecked;
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.consent {
  &__buttons {
    position: sticky;
    bottom: -20px;
    left: 0;
    right: 0;
    margin-left: -20px;
    margin-right: -20px;
    padding: 20px;
    background-color: $primary-color;
    white-space: nowrap;
    z-index: 2;

    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 450px) {
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
    }
  }

  &__button {
    font-size: 1rem;
    margin-right: 10px;
    padding: 8px 10px;
    text-decoration: none;
    border: 2px solid $tertiary-color;
    width: 100%;

    @media (min-width: 450px) {
      width: auto;
    }

    &--submit {
      color: $tertiary-color;
      background-color: $primary-color;
    }

    &--reset {
      color: $primary-color;
      background-color: $tertiary-color;
      margin-top: 15px;

      @media (min-width: 450px) {
        margin-top: 0;
      }
    }
  }
}
</style>
