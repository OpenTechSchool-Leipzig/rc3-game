<template>
  <section class="consent__section">
    <h2 class="consent__section-title">{{ title }}</h2>
    <div v-for="(itemTitle, i) in items" :key="i">
      <Item :label="itemTitle" :isDisabled="disableChoices" />
    </div>
    <template v-if="appendCookieRainItem">
      <CookieRainItem />
    </template>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Item from "./checkItem/Item.vue";
import CookieRainItem from "./checkItem/CookieRainItem.vue";

@Component({
  components: {
    Item,
    CookieRainItem
  }
})
export default class Section extends Vue {
  @Prop({ required: true })
  title!: string;
  @Prop({ required: true })
  items!: Array<string>;
  @Prop({ default: false })
  disableChoices!: boolean;
  @Prop({ default: false })
  appendCookieRainItem!: boolean;
}
</script>

<style lang="scss">
.consent__section {
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 1.5rem;
  }

  &-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 24px;
  }
}
</style>
