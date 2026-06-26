<script setup>

import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'


const todoStore = useTodoStore()

const title = ref('')


function addTodo(){

  if(title.value.trim()){

    todoStore.addTodo(title.value)

    title.value = ''

  }

}

</script>


<template>

<div>

<h1>Todo List</h1>


<input 
v-model="title"
placeholder="Enter todo"
/>


<button @click="addTodo">
Add
</button>


<ul>

<li 
v-for="todo in todoStore.todos"
:key="todo.id"
>


<input
type="checkbox"
:checked="todo.completed"
@click="todoStore.toggleTodo(todo.id)"
>


<span
:style="{textDecoration: todo.completed ? 'line-through' : 'none'}"
>
{{ todo.title }}
</span>


<button 
@click="todoStore.deleteTodo(todo.id)"
>
Delete
</button>


</li>

</ul>


<h3>Statistics</h3>

<p>
Total: {{ todoStore.totalTodos }}
</p>

<p>
Completed: {{ todoStore.completedTodos.length }}
</p>

<p>
Pending: {{ todoStore.pendingTodos.length }}
</p>


</div>

</template>