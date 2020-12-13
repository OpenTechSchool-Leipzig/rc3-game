import Vue from "vue";

export enum CustomEvents {
  ResetSubmitBtnPos = "resetSubmitBtnPos",
  ShowThankYouPopup = "showThankYouPopup",
  ShowCookieRain = "showCookieRain"
}

export const EventBus = new Vue();
