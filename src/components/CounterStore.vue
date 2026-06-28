<script setup>
import { useCounterStore } from "../stores/counterStore";

const counter = useCounterStore();
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>Counter Store</h1>

      <div class="number">
        {{ counter.count }}
      </div>

      <div class="double">
        Double Count: <strong>{{ counter.doubleCount }}</strong>
      </div>

      <div class="buttons">
        <button class="btn decrease" @click="counter.decrement">
          − Decrement
        </button>

        <button class="btn reset" @click="counter.reset">
          Reset
        </button>

        <button class="btn increase" @click="counter.increment">
          + Increment
        </button>
      </div>
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
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card {
  width: 420px;
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

h1 {
  margin-bottom: 25px;
  color: #333;
}

.number {
  font-size: 70px;
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 20px;
}

.double {
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
}

.buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
}

.btn:hover {
  transform: translateY(-3px);
}

.increase {
  background: #22c55e;
}

.decrease {
  background: #ef4444;
}

.reset {
  background: #3b82f6;
}
</style>