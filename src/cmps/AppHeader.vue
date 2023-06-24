<template>
    <header class="app-header">
        <img class="title" :src="imgUrl" alt="">
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
            imgUrl: 'src/assets/img/bitcoin-logo.png'
        }
    }
}
</script>

<style lang="scss">

</style>
