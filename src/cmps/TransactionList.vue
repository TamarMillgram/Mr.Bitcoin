<template>
  <div class="transactions" v-if="contact">
    <h1>Your transactions</h1>
    <ul v-for="transaction in transactions" :key="transaction.at">
      <li v-if="contact._id === transaction.toId">
        <div>{{ transaction.at }}</div>
        <div>To: {{ transaction.to }}</div>
        <div>{{ transaction.amount }}₿</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { userService } from "../services/userService";
import { contactService } from "../services/contactService";
export default {
  data() {
    return {
      contact: null,
      transactions: null,
    };
  },
  async created() {
    this.transactions = userService.getLoggedInUser().transactions;
    const contactId = this.$route.params.id;
    this.contact = await contactService.get(contactId);
  },
};
</script>

<style></style>
