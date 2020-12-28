<template>
  <span class="checkbox__label">
    <span class="checkbox__cookie" @click="startCookieRain">
      Cookie Rain
    </span>
    Analytics
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, CustomEvents } from "../../EventBus";

@Component
export default class CookieRainLabel extends Vue {
  startCookieRain() {
    EventBus.$emit(CustomEvents.ShowCookieRain);
    (window as any).track_event("cookie-rain");
    alert("Yay! Achievement 'Cookie rain' unlocked!");
  }
}
</script>

<style lang="scss">
.checkbox__cookie {
  &:hover {
    text-decoration: underline;
  }
}
</style>
