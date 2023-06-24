<template>
  <article class="contact-preview">
    <img
      class="robo-img"
      :src="`https://robohash.org/${contact._id}?set=set1&size=200x200`"
      :alt="contact.name"
    />
    <div class="contact-info">
      <h2 class="title-contact">{{ contact.name }}</h2>
      <h5 class="phone">
        Phone number: <span>{{ contact.phone }}</span>
      </h5>
      <h5 class="email">
        Email: <span>{{ contact.email }}</span>
      </h5>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    contact: { type: Object, required: true },
  },
  data() {
    return {
      roboImg: "",
    };
  },
};
</script>

<style lang="scss"></style>
