<template>
  <ul>
    <EmailListRow
      v-for="email in filteredEmails"
      :email="email"
      :key="email.id"
    ></EmailListRow>
  </ul>
</template>

<script>
import EmailListRow from "@/components/EmailListRow.vue";

export default {
  name: "EmailList",
  components: { EmailListRow },
  computed: {
    filteredEmails: function() {
      return this.$store.state.emails.filter((email) => {
        return email.folder === this.$store.state.selectedFolder;
      });
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
