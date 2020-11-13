<template>
  <div class="email">
    <div v-if="email">
      <header>
        <p class="font-weight-bold">
          {{ email.from }}
        </p>
        <p class="text-info font-weight-light">{{ email.title }}</p>
      </header>
      <p class="content" v-html="email.content"></p>
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
  height: 100vh;

  header {
    background-color: rgba(0, 0, 0, 0.01);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 20px;
  }

  .content {
    padding: 20px;
  }

  p {
    margin: 0;
  }
}
</style>
