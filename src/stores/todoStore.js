import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {

  state: () => ({
    todos: [
      {
        id: 1,
        title: "Learn Vue",
        completed: false
      }
    ]
  }),

  actions: {

    addTodo(title) {
      this.todos.push({
        id: Date.now(),
        title: title,
        completed: false
      })
    },

    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },

    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)

      if(todo){
        todo.completed = !todo.completed
      }
    }

  },

  getters: {

    completedTodos(state){
      return state.todos.filter(todo => todo.completed)
    },

    pendingTodos(state){
      return state.todos.filter(todo => !todo.completed)
    },

    totalTodos(state){
      return state.todos.length
    }

  }

})