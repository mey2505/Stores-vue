<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";

const user = useUserStore();

const name = ref(user.name);
const age = ref(user.age);
const email = ref(user.email);

const updateUser = () => {
  user.updateName(name.value);
  user.updateAge(Number(age.value));
  user.updateEmail(email.value);
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>User Store</h1>

      <div class="profile">
        <h2>{{ user.name }}</h2>
        <p><strong>Age:</strong> {{ user.age }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>

      <form @submit.prevent="updateUser">
        <input
          v-model="name"
          type="text"
          placeholder="Enter your name"
        />

        <input
          v-model="age"
          type="number"
          placeholder="Enter your age"
        />

        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit">
          Update User
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
}

.card {
  width: 420px;
  background: white;
  border-radius: 20px;
  padding: 35px;
  box-shadow: 0 15px 35px rgba(0,0,0,.2);
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #333;
}

.profile {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: #f5f7ff;
  border-radius: 12px;
}

.profile h2 {
  color: #4f46e5;
  margin-bottom: 10px;
}

.profile p {
  margin: 8px 0;
  color: #555;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
}

input:focus {
  border-color: #4f46e5;
}

button {
  padding: 13px;
  border: none;
  border-radius: 10px;
  background: #4f46e5;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: .3s;
}

button:hover {
  background: #3730a3;
  transform: translateY(-2px);
}
</style>