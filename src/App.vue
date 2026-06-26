<!-- <script setup>
import { useCounterStore } from './stores/counterStore'

const counter = useCounterStore()
</script>

<template>
  <div class="container">
    <h1>Exercise 1: Counter Store</h1>

    <h2>Current Count: {{ counter.count }}</h2>

    <h2>Double Count: {{ counter.doubleCount }}</h2>

    <div class="buttons">
      <button @click="counter.increment">
        Increment
      </button>

      <button @click="counter.decrement">
        Decrement
      </button>

      <button @click="counter.reset">
        Reset
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b883;
}

h2 {
  margin: 20px 0;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 8px;
  font-size: 16px;
  cursor: pointer;
}
</style> -->
<!-- ****************************Ex2*********************************************** -->
 <!-- <script setup>
import { ref } from 'vue'
import { useTodoStore } from './stores/todoStore'

const todoStore = useTodoStore()

const newTodo = ref('')


const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }
}

</script>


<template>
  <div class="container">

    <h1>Todo Store</h1>

    <div class="card">

      <h2>Total: {{ todoStore.totalTodos }}</h2>

      <input
        v-model="newTodo"
        placeholder="Enter todo"
      />

      <button @click="addTodo">
        Add Todo
      </button>


      <ul>
        <li 
          v-for="todo in todoStore.todos"
          :key="todo.id"
        >

          <input
            type="checkbox"
            :checked="todo.completed"
            @change="todoStore.toggleTodo(todo.id)"
          />

          <span :class="{ done: todo.completed }">
            {{ todo.title }}
          </span>

          <button @click="todoStore.deleteTodo(todo.id)">
            Delete
          </button>

        </li>
      </ul>


    </div>

  </div>
</template>


<style scoped>

.container {
  max-width: 500px;
  margin: 40px auto;
  font-family: Arial;
}


h1 {
  text-align: center;
  color: #42b883;
}


.card {
  background: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
}


input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}


button {
  padding: 10px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


li {
  margin: 10px 0;
}


.done {
  text-decoration: line-through;
}

</style> -->



 


<!-- ex3 -->

<!-- <script setup>
import Todo from './components/Todo.vue'

</script>


<template>

<Todo />

</template> -->



<!-- **************************EX4************************************ -->
<!-- <script setup>

import ShoppingCart from './components/ShoppingCart.vue'

</script>


<template>

<ShoppingCart />

</template> -->

<!-- ***********************EX5************************** -->

<script setup>

import Theme from './components/Theme.vue'

</script>


<template>

<Theme />

</template>

