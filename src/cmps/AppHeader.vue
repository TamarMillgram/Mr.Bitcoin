<template>
  <header class="app-header">
    <RouterLink class="gray" to="/home"
      ><img class="title" :src="imgUrl" alt="logo"
    /></RouterLink>
    <nav class="main-nav" v-if="isLoggedIn">
      <RouterLink class="gray" to="/home">Home</RouterLink>
      <RouterLink class="gray" to="/contacts">Contacts</RouterLink>
      <RouterLink class="gray" to="/statistics">Statistics</RouterLink>
      <RouterLink class="gray" to="/" @click="logout">Logout</RouterLink>
    </nav>
  </header>
</template>

<script>
import { userService } from "../services/userService";
export default {
  data() {
    return {
      imgUrl: "imgs/bitcoin-logo.png",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.user?.name;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("userLogout");
    },
  },
  created() {
    if (!this.$store.getters.user?.name) {
      userService.getLoggedInUser();
      this.$store.dispatch({ type: "loadUser" });
    }
  },
};
</script>

<style lang="scss"></style>
