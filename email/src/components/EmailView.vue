<template>
  <div class="email">
    <div v-if="email">
      <header>
        <p class="font-weight-bold">
          {{ email.from }}
        </p>
        <p class="text-info font-weight-light">{{ email.title }}</p>
        <p v-if="attachment" class="attachment-link">
          <a @click="openAttachment">
            <svg
              width="20px"
              viewBox="0 0 16 16"
              class="bi bi-paperclip"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
              />
            </svg>
            Attachment
          </a>
        </p>
      </header>
      <p class="content" v-html="email.content"></p>
    </div>
    <div v-else>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-envelope"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
        />
      </svg>
    </div>
    <b-modal
      id="attachment-modal"
      v-model="modalShow"
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
    >
      <template #modal-title>Attachment</template>
      <p class="modal-image">
        <img :src="attachmentImage" />
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "EmailView",
  data() {
    return {
      modalShow: false,
    };
  },
  computed: {
    email: function() {
      return this.$store.state.selectedEmail;
    },
    attachment: function() {
      return this.email && this.email.attachment;
    },
    attachmentImage: function() {
      if (this.attachment) {
        return require(`@/assets/${this.attachment}`);
      } else {
        return "";
      }
    },
  },
  methods: {
    openAttachment: function() {
      if (this.email.attachment === "attachment-downloading.gif") {
        window.track_event("email-attachment");
      }
      this.$bvModal.show("attachment-modal");
    },
  },
};
</script>

<style scoped lang="scss">
.email {
  header {
    background-color: rgba(0, 0, 0, 0.01);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 20px;
  }

  .content {
    padding: 20px;
    max-width: 700px;
  }

  .attachment-link {
    font-size: 14px;
    margin-top: 10px;

    a {
      cursor: pointer;
    }
  }

  p {
    margin: 0;
  }

  .bi-envelope {
    display: block;
    font-size: 120px;
    margin: 200px auto;
    opacity: 0.05;
  }
}

.modal-image {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
