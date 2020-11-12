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
          Inbox ({{ getCount("inbox") }})
        </p>
        <p
          class="my-1 p-2 folder"
          @click="selectFolder('spam')"
          :class="{ selected: isSelected('spam') }"
        >
          Spam ({{ getCount("spam") }})
        </p>
        <p
          class="my-1 p-2 folder"
          @click="selectFolder('trash')"
          :class="{ selected: isSelected('trash') }"
        >
          Trash ({{ getCount("trash") }})
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
      return this.$store.state.emails.filter((email) => {
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

    p.folder {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.05);
      opacity: 0.5;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    p.selected {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
