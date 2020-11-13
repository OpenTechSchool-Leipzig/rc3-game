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
        <p
          class="my-1 p-2 folder"
          @click="selectFolder('inbox')"
          :class="{ selected: isSelected('inbox') }"
        >
          <b-button variant="secondary" block>
            Inbox
            <span v-if="getCount('inbox') !== 0" class="badge badge-danger">{{
              getCount("inbox")
            }}</span>
            <span v-else class="badge badge-light">{{
              getCount("inbox")
            }}</span>
          </b-button>
        </p>
        <p
          class="my-1 p-2 folder"
          @click="selectFolder('spam')"
          :class="{ selected: isSelected('spam') }"
        >
          <b-button variant="secondary" block>
            Spam
            <span v-if="getCount('spam') !== 0" class="badge badge-danger">{{
              getCount("spam")
            }}</span>
            <span v-else class="badge badge-light">{{ getCount("spam") }}</span>
          </b-button>
        </p>
        <p
          class="my-1 p-2 folder"
          @click="selectFolder('trash')"
          :class="{ selected: isSelected('trash') }"
        >
          <b-button variant="secondary" block>
            Trash
            <span v-if="getCount('trash') !== 0" class="badge badge-danger">{{
              getCount("trash")
            }}</span>
            <span v-else class="badge badge-light">{{
              getCount("trash")
            }}</span>
          </b-button>
        </p>
      </section>
      <section>
        <p>
          <b-link href="#contacts" class="text-white">Contacts</b-link>
        </p>
      </section>
      <section>
        <p>
          <b-link href="#settings" class="text-white">Settings</b-link>
        </p>
      </section>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    selectFolder: function(folder) {
      return this.$store.commit("selectFolder", folder);
    },
    isSelected: function(folder) {
      return this.$store.state.selectedFolder === folder;
    },
    getCount: function(folder) {
      return this.$store.getters.unreadEmails.filter((email) => {
        return folder === email.folder;
      }).length;
    },
  },
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
      margin: 0;
    }

    p.selected button,
    button:focus {
      border-bottom: 1px solid white;
      box-shadow: none !important;
    }
  }
}
</style>
