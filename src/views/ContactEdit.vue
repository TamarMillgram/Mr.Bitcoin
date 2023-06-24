<template>
  <form @submit.prevent="save" v-if="contact" class="contact-edit">
    <input class="input" v-model="contact.name" type="text" placeholder="Name" required>
      <input class="input" v-model="contact.phone" type="tel" placeholder="Phone number" required>
      <input class="input" v-model.number="contact.email" type="email" placeholder="Email address" required>
      <button>Save</button>
  </form>
</template>

<script>
import { contactService } from '@/services/contactService'

export default {
  data() {
      return {
          contact: null,
      }
  },
  methods: {
      async save() {
          await contactService.save(this.contact)
          this.$router.push('/contacts')
      }
  },
  async created() {
      const contactId = this.$route.params.id
      if(contactId) {
          this.contact = await contactService.get(contactId)
      } else {
          this.contact = contactService.getEmptyContact()
      }
  }
}
</script>

<style lang="scss">

</style>