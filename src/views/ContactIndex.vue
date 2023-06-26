<template>
  <div>
    <UserMsg />
    <div class="filter-add-btn">
      <ContactFilter @filter="onSetFilterBy" />
      <RouterLink to="/contact/edit"
        ><button class="add-btn">Add Contact</button></RouterLink
      >
    </div>
    <ContactList
      @remove="removeContact"
      v-if="contacts"
      :contacts="filteredContacts"
    />
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service";
import { bitcoinService } from "../services/bitcoinService";

import ContactList from "../cmps/ContactList.vue";
import ContactFilter from "../cmps/ContactFilter.vue";
import UserMsg from "../cmps/UserMsg.vue";

export default {
  data() {
    return {
      filterBy: {},
      priceHistory: null,
      avgBlockSize: null,
    };
  },
  methods: {
    async removeContact(contactId) {
      try {
        this.$store.dispatch({ type: "removeContact", contactId });
        const msg = {
          txt: `The contact removed...`,
          type: "success",
          timeout: 2500,
        };
        eventBus.emit("user-msg", msg);
      } catch (err) {
        const msg = {
          txt: `The contact cannot be removed...`,
          type: "fail",
          timeout: 2500,
        };
        eventBus.emit("user-msg", msg);
      }
    },
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.term, "i");
      return this.contacts.filter((contact) =>
        regex.test(contact[this.filterBy.criteria])
      );
    },
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
    this.rate = bitcoinService.getRate();
  },
  components: {
    ContactList,
    ContactFilter,
    UserMsg,
  },
};
</script>

<style lang="scss"></style>
