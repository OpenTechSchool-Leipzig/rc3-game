<template>
  <section class="consent__section">
    <h2 class="consent__section-title foo">{{ title }}</h2>

    <Item
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      :isDisabled="disableChoices"
    />
    <Item
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      :isDisabled="disableChoices"
    />
    <Item
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      :isDisabled="disableChoices"
    />
    <Item
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      :isDisabled="disableChoices"
    />
    <Item
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      :isDisabled="disableChoices"
    />
    <Item
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      :isDisabled="disableChoices"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Item from "./Item.vue";

@Component({
  components: {
    Item
  }
})
export default class Section extends Vue {
  @Prop({ required: true })
  title!: string;
  @Prop({ default: false })
  disableChoices!: boolean;
}
</script>

<style scoped lang="scss">
.consent__section {
  margin-bottom: 10px;

  &-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 24px;
  }
}
</style>
