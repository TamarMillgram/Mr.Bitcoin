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
import { contactService } from "../services/contactService";
import { eventBus } from "../services/eventBus.service";

import ContactList from "../cmps/ContactList.vue";
import ContactFilter from "../cmps/ContactFilter.vue";
import UserMsg from "../cmps/UserMsg.vue";
import { bitcoinService } from "../services/bitcoinService";

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
      priceHistory: null,
      avgBlockSize: null,
    };
  },
  methods: {
    async removeContact(contactId) {
      const contact = await contactService.get(contactId);
      const msg = {
        txt: `The contact ${contact.name} removed...`,
        type: "success",
        timeout: 2500,
      };
      await contactService.remove(contactId);

      const idx = this.contacts.findIndex(
        (contact) => contact.id === contactId
      );
      this.contacts.splice(idx, 1);
      eventBus.emit("user-msg", msg);
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
    getContacts() {
      return this.contacts;
    },
  },
  async created() {
    this.contacts = await contactService.query();
    this.rate = bitcoinService.getRate();
    this.priceHistory = bitcoinService.getMarketPriceHistory();
    this.avgBlockSize = bitcoinService.getAvgBlockSize();
  },
  components: {
    ContactList,
    ContactFilter,
    UserMsg,
  },
};
</script>

<style lang="scss"></style>
