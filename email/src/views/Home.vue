<template>
  <b-container fluid class="bv-example-row">
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
    <b-row no-gutters style="margin-left: 305px;">
      <b-col cols="4" class="vertical-border">
        <ul class="email-list">
          <li>
            <b-row no-gutters>
              <b-col cols="1">
                <b-form-checkbox name="checkbox-1"> </b-form-checkbox>
              </b-col>
              <b-col>
                <p><b>Facebook</b></p>
                <p>
                  Andi posted in Vegan Community
                </p>
              </b-col>
            </b-row>
          </li>
          <li>
            <b-row no-gutters>
              <b-col cols="1">
                <b-form-checkbox name="checkbox-1"> </b-form-checkbox>
              </b-col>
              <b-col>
                <p><b>Instagram</b></p>
                <p>
                  Updates on privacy policy
                </p>
              </b-col>
            </b-row>
          </li>
        </ul>
      </b-col>
      <b-col class="vertical-border">
        <div class="email">
          <h1>Email title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
            justo, gravida sit amet sagittis a, sodales non nisl. Integer
            ultrices sit amet risus ac bibendum. Integer ac feugiat arcu, sit
            amet vehicula urna. Donec efficitur nisi ut nibh tincidunt faucibus.
            Etiam nisi nunc, auctor sed lobortis eu, semper laoreet erat.
            Suspendisse blandit mi ut blandit viverra. Nam aliquet ex hendrerit
            neque viverra, et eleifend urna ornare. Donec finibus justo tellus,
            ac sagittis orci vehicula in. Mauris porta auctor feugiat. Nam
            bibendum maximus convallis. Phasellus faucibus vitae ipsum quis
            lacinia. Vivamus id enim nec tellus tempus aliquam. Quisque tempus
            velit laoreet finibus interdum. Etiam ac orci ut neque aliquet
            malesuada sed in nibh. Aliquam placerat rutrum augue quis dictum.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
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

.vertical-border {
  border-left: 8px solid rgba(0, 0, 0, 0.05);
}

.email-list {
  margin: 0;
  padding: 0;
  list-style-type: none;

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
}

.email {
  padding: 20px 50px 50px 50px;
  width: 80%;
  height: 100vh;
}
</style>
