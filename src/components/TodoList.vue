<script setup>

import { ref } from "vue";
import { useTodoStore } from "../stores/todoStore";


const todoStore = useTodoStore();

const newTodo = ref("");


const addTask = () => {

  if(newTodo.value.trim()){

    todoStore.addTodo(newTodo.value);

    newTodo.value = "";

  }

};


</script>


<template>

<div class="container">

<div class="card">


<h1>Todo Application</h1>


<!-- Statistics -->

<div class="stats">

<div>
<h3>{{todoStore.totalTodos}}</h3>
<p>Total</p>
</div>


<div>
<h3>{{todoStore.completedTodos.length}}</h3>
<p>Completed</p>
</div>


<div>
<h3>{{todoStore.pendingTodos.length}}</h3>
<p>Pending</p>
</div>


</div>



<!-- Add Todo -->

<div class="add-box">

<input
v-model="newTodo"
placeholder="Add new task..."
/>


<button @click="addTask">
Add
</button>

</div>




<!-- Todo List -->


<div class="todo-list">


<div
v-for="todo in todoStore.todos"
:key="todo.id"
class="todo"
>


<input
type="checkbox"
:checked="todo.completed"
@click="todoStore.toggleTodo(todo.id)"
/>


<span
:class="{done: todo.completed}"
>
{{todo.title}}
</span>



<button
@click="todoStore.deleteTodo(todo.id)"
>
Delete
</button>


</div>


</div>



</div>

</div>


</template>



<style scoped>

*{
margin:0;
padding:0;
box-sizing:border-box;
}


.container{

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:linear-gradient(
135deg,
#667eea,
#764ba2
);

}


.card{

width:500px;

background:white;

padding:35px;

border-radius:20px;

box-shadow:0 15px 35px rgba(0,0,0,.2);

}


h1{

text-align:center;

margin-bottom:25px;

color:#333;

}



.stats{

display:flex;

justify-content:space-between;

margin-bottom:25px;

}


.stats div{

background:#f3f4ff;

padding:15px;

border-radius:12px;

text-align:center;

width:30%;

}


.stats h3{

font-size:25px;

color:#4f46e5;

}



.add-box{

display:flex;

gap:10px;

margin-bottom:25px;

}



input{

flex:1;

padding:12px;

border-radius:10px;

border:1px solid #ddd;

font-size:15px;

}



.add-box button{

background:#4f46e5;

color:white;

border:none;

padding:12px 20px;

border-radius:10px;

cursor:pointer;

}



.todo{

display:flex;

align-items:center;

gap:12px;

background:#f8fafc;

padding:12px;

margin-bottom:10px;

border-radius:10px;

}



.todo span{

flex:1;

}



.done{

text-decoration:line-through;

color:#999;

}



.todo button{

background:#ef4444;

color:white;

border:none;

padding:8px 12px;

border-radius:8px;

cursor:pointer;

}


</style>