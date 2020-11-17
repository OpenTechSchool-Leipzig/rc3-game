<template>
  <b-modal
    id="new-message-modal"
    v-model="modalShow"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    size="sm"
  >
    <template #modal-title>You got mail</template>
    <div class="icon text-center">
      📬
    </div>
    <div class="my-4 d-block text-center">
      You got a new email!
    </div>
    <b-button block @click="onClick" @click.alt="onClickCtrl"
      >Great, take me to the inbox</b-button
    >
  </b-modal>
</template>

<script>
const delay = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

const randomNumber = () => {
  return Math.floor(Math.random() * (10000 - 3000) + 3000);
};

export default {
  name: "NewEmail",
  data() {
    return {
      modalShow: false,
      stopIncomingEmails: false,
    };
  },
  async mounted() {
    await delay(randomNumber());
    this.createIncomingEmail();
  },
  methods: {
    onClick: function() {
      this.$store.commit("selectFolder", "inbox");
      this.$bvModal.hide("new-message-modal");
    },
    onClickCtrl: function() {
      this.stopIncomingEmails = true;
      this.$bvModal.hide("new-message-modal");
    },
    createIncomingEmail: async function() {
      if (this.stopIncomingEmails) {
        return;
      }

      const incomingEmailCount = this.$store.state.incomingEmails.length;
      if (incomingEmailCount > 0) {
        const email = this.$store.state.incomingEmails[0];
        this.$store.commit("addIncomingEmail", email);
        this.modalShow = true;
      }
      if (incomingEmailCount > 1) {
        await delay(randomNumber());
        this.createIncomingEmail();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.icon {
  font-size: 40px;
}
</style>
