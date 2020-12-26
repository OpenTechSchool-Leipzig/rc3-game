import Vue from "vue";

export enum CustomEvents {
  ResetSubmitBtnPos = "resetSubmitBtnPos",
  ShowThankYouPopup = "showThankYouPopup",
  ShowCookieRain = "showCookieRain",
  CheckRandomItems = "checkRandomItems",
  IncreaseCheckedItemsCount = "increaseCheckedItemsCount",
  DecreaseCheckedItemsCount = "decreaseCheckedItemsCount"
}

export const EventBus = new Vue();
