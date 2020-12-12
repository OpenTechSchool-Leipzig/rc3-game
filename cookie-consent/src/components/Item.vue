<template>
  <div class="consent__item">
    <label class="checkbox">
      <span class="checkbox__input">
        <input
          type="checkbox"
          v-model="isCheked"
          :disabled="isDisabled"
          @change="repositionSubmitBtn"
        />
        <span class="checkbox__control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
      </span>
      <span class="checkbox__label">{{ label }}d</span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { EventBus, CustomEvents } from "../EventBus";

@Component
export default class Item extends Vue {
  @Prop({ required: true })
  label!: string;
  @Prop({ default: false })
  isDisabled!: boolean;

  isCheked = false;

  mounted() {
    if (this.isDisabled) {
      this.isCheked = true;
    }
  }

  repositionSubmitBtn(e: MouseEvent) {
    const checkbox: HTMLInputElement = e.target as HTMLInputElement;
    if (checkbox.checked) {
      EventBus.$emit(CustomEvents.ResetSubmitBtnPos);
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.consent__item {
  margin-bottom: 10px;
  color: $tertiary-color;
}

.checkbox {
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.5rem;
  color: $tertiary-color;

  &__input {
    display: grid;
    grid-template-areas: "checkbox";

    > * {
      grid-area: checkbox;
    }

    input {
      opacity: 0;
      width: 1em;
      height: 1em;

      &:checked + .checkbox__control svg {
        transform: scale(1);
      }

      &:disabled + .checkbox__control {
        color: $primary-color;
      }
    }
  }

  &__control {
    display: inline-grid;
    width: 1em;
    height: 1em;
    border-radius: 0.25em;
    border: 0.1em solid currentColor;

    svg {
      transition: transform 0.1s ease-in 25ms;
      transform: scale(0);
      transform-origin: bottom left;
    }
  }
}
</style>
