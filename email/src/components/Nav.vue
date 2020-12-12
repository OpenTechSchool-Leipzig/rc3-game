<template>
  <b-sidebar
    class="sidebar"
    title="Sidebar"
    shadow
    visible
    bg-variant="dark"
    text-variant="light"
    no-header
    width="280px"
  >
    <div class="px-3 pt-5">
      <header>
        <img :src="logo" width="30" height="30" />
        <b>Spambox</b>
      </header>
      <section>
        <b-button variant="danger" block>New Message</b-button>
      </section>
      <section>
        <p
          class="my-3 folder"
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
          class="my-3 folder"
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
          class="my-3 folder"
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
      <!-- <section>
        <p>
          <b-link to="about" class="text-white">Contacts</b-link>
        </p>
      </section>
      <section>
        <p>
          <b-link to="about" class="text-white">Settings</b-link>
        </p>
      </section> -->
      <img
        class="check-email"
        src="https://media.giphy.com/media/12Up26fqbaU45W/giphy.gif"
      />
    </div>
  </b-sidebar>
</template>

<script>
import logo from "@/assets/logo.png";

export default {
  name: "Nav",
  data: function() {
    return {
      logo,
    };
  },
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
  position: relative;
  z-index: 50;

  header {
    height: 60px;
    text-align: center;
    text-transform: uppercase;
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

  header img {
    margin-right: 10px;
  }

  img.check-email {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    height: auto;
  }
}
</style>
