import Vue from "vue";

export enum CustomEvents {
  ResetSubmitBtnPos = "resetSubmitBtnPos"
}

export const EventBus = new Vue();
