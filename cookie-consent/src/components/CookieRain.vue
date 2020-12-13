<template>
  <div
    :class="{ 'cookie-rain': true, 'cookie-rain--hidden': this.ishidden }"
    @click="this.hide"
  >
    <img
      ref="img"
      id="cookie-img"
      src="../assets/images/cookie-30x30.png"
      width="30"
      height="30"
      class="cookie-rain--hidden"
    />
    <canvas ref="rainCanvas" class="cookie-rain__canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, CustomEvents } from "../EventBus";

@Component
export default class CookieRain extends Vue {
  ishidden = true;
  lastTick = 0;
  position = { x: 0, y: 0 };
  img!: CanvasImageSource;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  mounted() {
    EventBus.$on(CustomEvents.ShowCookieRain, this.init);
    this.img = this.$refs.img as CanvasImageSource;
    this.canvas = this.$refs.rainCanvas as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  init() {
    this.show();
    (window as any).requestAnimationFrame(this.loop);
  }

  update(gameTime: any) {
    this.position.x += (120 * gameTime.diff) / 1000;
    this.position.y += (150 * gameTime.diff) / 1000;
    if (this.position.x > this.canvas.width) {
      this.position.x = 0;
    }

    if (this.position.y > this.canvas.height) {
      this.position.y = 0;
    }
  }

  loop(tick: number) {
    const diff = tick - this.lastTick;
    const gameTime: object = { tick: tick, diff: diff };
    this.update(gameTime);
    this.draw();
    requestAnimationFrame(this.loop as FrameRequestCallback);
    this.lastTick = tick;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.img, this.position.x, this.position.y, 20, 20);
    this.ctx.drawImage(
      this.img,
      this.position.x - this.canvas.width,
      this.position.y,
      20,
      20
    );
    this.ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y - this.canvas.height,
      20,
      20
    );
    this.ctx.drawImage(
      this.img,
      this.position.x - this.canvas.width,
      this.position.y - this.canvas.height,
      20,
      20
    );
  }

  show() {
    this.ishidden = false;
  }

  hide() {
    this.ishidden = true;
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.cookie-rain {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background-color: transparent;

  &__canvas {
    width: 100vw;
    height: 100vh;
  }

  &--hidden {
    display: none;
  }
}
</style>
