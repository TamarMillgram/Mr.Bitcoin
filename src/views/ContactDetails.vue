<template>
  <article v-if="contact" class="contact-details">
    <div class="details">
      <h2>{{contact.name}}</h2>
      <h4>{{contact.phone}}</h4>
      <h4>{{contact.email}}</h4>
    </div>
      <RouterLink to="/contacts">
          <button class="back-btn">Back</button>
      </RouterLink>
  </article>
</template>

<script>
import { contactService } from '@/services/contactService'

export default {
  data() {
      return {
          contact: null,
      }
  },
  async created() {
      const contactId = this.$route.params.id
      this.contact = await contactService.get(contactId)  
  }
}
</script>

<style lang="scss">

</style>