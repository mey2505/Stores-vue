import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe',
    age: 20,
    email: 'john@example.com'
  }),

  actions: {
    updateName(newName) {
      this.name = newName
    },

    updateAge(newAge) {
      this.age = newAge
    },

    updateEmail(newEmail) {
      this.email = newEmail
    }
  }
})