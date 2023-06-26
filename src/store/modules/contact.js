import { contactService } from '../../services/contactService'

export default {
    state() {
        return {
            contacts: null,
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                const contacts = await contactService.query()
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.error(err)
            }
        },
        async removeContact({ commit }, { contactId }) {
            try {
                await contactService.remove(contactId)
                commit({ type: 'removeContact', contactId })
            } catch (err) {
                console.error(err)
            }
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        getContact: (state) => (contactId) => state.contacts.find(contact => contact._id === contactId)
    },
}
