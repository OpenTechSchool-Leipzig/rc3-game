<template>
  <section class="consent__section">
    <h2 class="consent__section-title foo">{{ title }}</h2>
    <div v-for="(itemTitle, i) in items" :key="i">
      <Item :label="itemTitle" :isDisabled="disableChoices" />
    </div>
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
  @Prop({ required: true })
  items!: Array<string>;
  @Prop({ default: false })
  disableChoices!: boolean;
}
</script>

<style lang="scss">
.consent__section {
  margin-bottom: 10px;

  &-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 24px;
  }
}
</style>
