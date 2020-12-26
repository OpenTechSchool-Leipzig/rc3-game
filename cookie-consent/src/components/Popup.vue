<template>
  <div :class="{ popup: true, 'popup--hidden': this.ishidden }">
    <div class="popup__content">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { EventBus, CustomEvents } from "../EventBus";

@Component
export default class Popup extends Vue {
  @Prop({ required: true })
  text!: string;

  private ishidden = true;

  mounted() {
    EventBus.$on(CustomEvents.ShowThankYouPopup, this.show);
  }

  show() {
    this.ishidden = false;
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

@keyframes border-blink {
  from {
    border-color: $secondary-color;
  }
  to {
    border-color: $tertiary-color;
  }
}

.popup {
  position: fixed;
  width: 400px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -80%);
  z-index: 2;

  color: $secondary-color;
  background-color: $primary-color;
  border: 8px dashed $tertiary-color;
  animation-name: border-blink;
  animation-duration: 500ms;
  animation-iteration-count: infinite;

  &--hidden {
    display: none;
  }

  &__content {
    padding: 2rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
}
</style>
