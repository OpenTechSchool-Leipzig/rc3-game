<template>
  <b-container fluid class="home">
    <Nav />
    <b-row no-gutters style="margin-left: 265px;">
      <b-col cols="4" class="vertical-border scroll-bar">
        <EmailList />
      </b-col>
      <b-col class="vertical-border scroll-bar">
        <EmailView />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Nav from "@/components/Nav.vue";
import EmailList from "@/components/EmailList.vue";
import EmailView from "@/components/EmailView.vue";

export default {
  name: "Home",
  components: { Nav, EmailList, EmailView },
};
</script>

<style lang="scss" scoped>
.home {
  padding-right: 0;

  .scroll-bar {
    height: 100vh;
    overflow: scroll;
  }

  .vertical-border {
    border-left: 8px solid rgba(0, 0, 0, 0.05);
  }
}
</style>
