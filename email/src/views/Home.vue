<template>
  <b-container fluid class="bv-example-row">
    <Nav />
    <b-row no-gutters style="margin-left: 305px;">
      <b-col cols="4" class="vertical-border">
        <EmailList :emails="emails" />
      </b-col>
      <b-col class="vertical-border">
        <EmailView />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Nav from "@/components/Nav.vue";
import EmailList from "@/components/EmailList.vue";
import EmailView from "@/components/EmailView.vue";
import emails from "@/content/emails.json";

export default {
  name: "Home",
  components: { Nav, EmailList, EmailView },
  data: function() {
    return {
      emails,
    };
  },
};
</script>

<style lang="scss" scoped>
.vertical-border {
  border-left: 8px solid rgba(0, 0, 0, 0.05);
}
</style>
