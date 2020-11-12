<template>
  <div class="email">
    <div v-if="email">
      <h1>{{ email.title }}</h1>
      <p v-html="email.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailView",
  computed: {
    email: function() {
      return this.$store.state.selectedEmail;
    },
  },
};
</script>

<style scoped lang="scss">
.email {
  padding: 20px 50px 50px 50px;
  width: 80%;
  height: 100vh;
}
</style>
