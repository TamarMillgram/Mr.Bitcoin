<template>
  <article v-if="contact" class="contact-details">
    <img
      class="robo-img"
      :src="`https://robohash.org/${contact._id}?set=set1&size=200x200`"
      :alt="contact.name"
    />
    <div class="details">
      <h2>{{ contact.name }}</h2>
      <h4>{{ contact.phone }}</h4>
      <h4>{{ contact.email }}</h4>
      <RouterLink to="/contacts">
        <button class="back-btn">Back</button>
      </RouterLink>
    </div>
  </article>
  <TransferFunds />
  <TransactionsList />
</template>

<script>
import { contactService } from "@/services/contactService";
import TransferFunds from "../cmps/TransferFunds.vue";
import TransactionsList from "../cmps/TransactionList.vue";

export default {
  components: { TransferFunds, TransactionsList },
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params.id;
    this.contact = await contactService.get(contactId);
  },
};
</script>

<style lang="scss"></style>
