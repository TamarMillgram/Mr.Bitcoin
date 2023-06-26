<template>
  <header class="app-header">
    <RouterLink class="gray" to="/"
      ><img class="title" :src="imgUrl" alt="logo"
    /></RouterLink>
    <nav class="main-nav">
      <RouterLink class="gray" to="/">Home</RouterLink>
      <RouterLink class="gray" to="/contacts">Contacts</RouterLink>
      <RouterLink class="gray" to="/statistics">Statistics</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "public/bitcoin-logo.png",
      // imgUrl: "src/assets/img/bitcoin-logo.png",
    };
  },
};
</script>

<style lang="scss"></style>
