<template>
  <main class="login">
    <h1>Login</h1>
    <form class="contact-edit">
      <input
        class="input"
        v-model="username"
        type="text"
        placeholder="Name"
        required
      />
      <p v-if="emptyLogin">Please enter user name</p>
      <button @click.prevent="signup">Login</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      emptyLogin: false,
    };
  },
  methods: {
    signup() {
      if (this.username) {
        this.$store.dispatch({ type: "userLogin", username: this.username });
        this.$router.push("/home");
      } else {
        this.emptyLogin = true;
      }
    },
  },
};
</script>

<style></style>
