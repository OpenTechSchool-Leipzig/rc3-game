<template>
  <li @click="handleClick">
    <b-row no-gutters>
      <b-col cols="1">
        <b-form-checkbox name="checkbox-1"> </b-form-checkbox>
      </b-col>
      <b-col>
        <p>
          <b>{{ email.from }}</b>
        </p>
        <p>
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
  methods: {
    handleClick: function() {
      this.$emit("click:email-selected");
    },
  },
};
</script>

<style scoped lang="scss">
li {
  padding: 20px 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

li:nth-child(2n) {
  background-color: rgba(0, 0, 0, 0.01);
}

p {
  margin: 0;
}
</style>
