<template>
  <div class="consent__buttons">
    <button type="reset" @click="resetSubmitBtnPos">
      Only functional cookies
    </button>
    <button
      type="submit"
      class="consent__buttons-submit"
      @mouseover="moveButtonAway"
      :style="{
        position: this.position,
        top: `${this.posY}px`,
        left: `${this.posX}px`
      }"
    >
      Confirm my choices
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
    this.position = "fixed";
    this.posX = e.clientX - 130;
    this.posY = e.clientY - 55;
  }

  resetSubmitBtnPos() {
    this.position = "static";
    this.posX = -1;
    this.posY = -1;
  }
}
</script>

<style scoped lang="scss">
.consent__buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  background-color: #804d00;

  display: flex;
  justify-content: flex-start;

  &-submit {
    padding: 5px;
  }

  > * {
    margin-left: 10px;
  }
}
</style>
