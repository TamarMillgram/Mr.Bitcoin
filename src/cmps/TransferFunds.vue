<template>
  <div>
    <UserMsg />
    <form @submit.prevent="transfer">
      <input
        class="input"
        v-model="amount"
        type="number"
        placeholder="Please Enter Amount to transfer... "
      />
      <button>Transfer</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service";
import { userService } from "../services/userService";
import UserMsg from "../cmps/UserMsg.vue";
import { contactService } from "../services/contactService";
export default {
  data() {
    return {
      contact: null,
      amount: 0,
    };
  },
  methods: {
    transfer() {
      let user = this.$store.getters.user;
      if (user.balance < this.amount) {
        const msg = {
          txt: `Sorry, you don't have enough balance to make the transaction`,
          type: "fail",
          timeout: 2500,
        };
        eventBus.emit("user-msg", msg);
      } else {
        userService.transferFunds(
          this.amount,
          this.contact._id,
          this.contact.name
        );
      }
    },
  },
  async created() {
    const contactId = this.$route.params.id;
    this.contact = await contactService.get(contactId);
  },
  components: {
    UserMsg,
  },
};
</script>

<style></style>
