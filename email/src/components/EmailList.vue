<template>
  <ul>
    <EmailListRow
      v-for="email in emails"
      :email="email"
      :key="email.id"
    ></EmailListRow>
  </ul>
</template>

<script>
import EmailListRow from "@/components/EmailListRow.vue";

export default {
  name: "EmailList",
  props: ["emails"],
  components: { EmailListRow },
};
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
