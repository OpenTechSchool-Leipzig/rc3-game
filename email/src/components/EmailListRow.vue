<template>
  <li @click="handleClick" :class="{ selected: isSelected, unread: isUnread }">
    <b-row no-gutters>
      <b-col cols="1">
        <b-form-checkbox name="checkbox-1"> </b-form-checkbox>
      </b-col>
      <b-col class="text-break">
        <p>
          {{ email.from }}
        </p>
        <p class="title">
          {{ email.title }}
        </p>
      </b-col>
    </b-row>
  </li>
</template>

<script>
export default {
  name: "EmailListRow",
  props: ["email"],
  computed: {
    isSelected: function() {
      if (!this.$store.state.selectedEmail) return false;
      return this.$store.state.selectedEmail.id === this.email.id;
    },
    isUnread: function() {
      return !this.$store.state.readEmails.includes(this.email.id);
    },
  },
  methods: {
    handleClick: function() {
      this.$store.commit("selectEmail", this.email);
    },
  },
};
</script>

<style scoped lang="scss">
li {
  padding: 20px 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .title {
    color: var(--info);
  }

  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.01);
  }

  &.selected,
  &:nth-child(2n).selected {
    background-color: var(--info);
    color: white;
    .title {
      color: white;
    }
  }

  &.unread {
    font-weight: 700;
  }

  p {
    margin: 0;
  }
}
</style>
