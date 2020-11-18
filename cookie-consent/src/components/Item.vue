<template>
  <div class="consent__item">
    <label>
      <input
        type="checkbox"
        v-model="isCheked"
        :disabled="isDisabled"
        @change="repositionSubmitBtn"
      />
      {{ label }}
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

<style scoped lang="scss">
.consent__item {
  margin-bottom: 10px;
}
</style>
