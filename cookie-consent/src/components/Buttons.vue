<template>
  <div class="consent__buttons">
    <button
      type="button"
      class="consent__button consent__button--random"
      @click="selectRandomCookies"
    >
      Random cookies
    </button>
    <div>
      <button
        type="submit"
        class="consent__button consent__button--submit"
        @mouseover="moveButtonAway"
        :style="{
          position: this.position,
          top: `${this.posY}px`,
          left: `${this.posX}px`,
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EventBus, CustomEvents } from "../EventBus";

@Component
export default class Buttons extends Vue {
  @Prop({ default: false })
  allItemsAreChecked!: boolean;

  private position: string;
  private posX: number;
  private posY: number;

  constructor() {
    super();
    this.position = "static";
    this.posX = -1;
    this.posY = -1;
  }

  mounted() {
    EventBus.$on(CustomEvents.ResetSubmitBtnPos, this.resetSubmitBtnPos);
  }

  moveButtonAway(e: MouseEvent) {
    if (this.allItemsAreChecked) {
      return;
    }

    this.position = "fixed";
    this.posX = e.clientX - 130;
    this.posY = e.clientY - 55;
  }

  resetSubmitBtnPos() {
    this.position = "static";
  }

  selectRandomCookies() {
    (window as any).track_event("random-cookies");
    EventBus.$emit(CustomEvents.CheckRandomItems);
    alert("Yay! Achievement 'Random cookies' unlocked!");
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

@keyframes font-color-blink {
  from {
    color: $tertiary-color;
  }
  to {
    color: $primary-color;
  }
}

.consent {
  &__buttons {
    position: sticky;
    bottom: -20px;
    left: 0;
    right: 0;
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -20px;
    padding: 20px;
    background-color: $primary-color;
    white-space: nowrap;
    z-index: 2;

    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 450px) {
      flex-wrap: nowrap;
      justify-content: space-between;
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

    &--random {
      color: $primary-color;
      background-color: $primary-color;
      border: none;
      outline: 0;

      &:hover {
        color: $tertiary-color;
        animation-name: font-color-blink;
        animation-duration: 20ms;
        animation-iteration-count: infinite;
      }
    }
  }
}
</style>
