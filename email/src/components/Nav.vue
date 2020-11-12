<template>
  <b-sidebar
    class="sidebar"
    title="Sidebar"
    shadow
    visible
    bg-variant="dark"
    text-variant="light"
    no-header
  >
    <div class="px-3 pt-5">
      <header>
        Welcome back!
      </header>
      <section>
        <b-button variant="danger" block>New Message</b-button>
      </section>
      <section>
        <p class="my-3">
          <b-link href="#foo" class="text-white">Inbox</b-link>
        </p>
        <p class="my-3">
          <b-link href="#foo" class="text-white">Spam</b-link>
        </p>
        <p class="my-3">
          <b-link href="#foo" class="text-white">Trash</b-link>
        </p>
      </section>
      <section>
        <p>
          <b-link href="#foo" class="text-white">Contacts</b-link>
        </p>
      </section>
      <section>
        <p>
          <b-link href="#foo" class="text-white">Settings</b-link>
        </p>
      </section>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped lang="scss">
.sidebar {
  header {
    height: 60px;
    text-align: center;
  }

  section {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px 0 20px;

    p {
      opacity: 0.3;
      margin: 0;
    }
  }
}
</style>
