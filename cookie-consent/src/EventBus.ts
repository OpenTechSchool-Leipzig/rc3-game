import Vue from "vue";

export enum CustomEvents {
  ResetSubmitBtnPos = "resetSubmitBtnPos",
  ShowThankYouPopup = "showThankYouPopup"
}

export const EventBus = new Vue();
