import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      todos: [],
      activeSlide: 0
  },
  mutations: {
      setTodos(state, todos){
        state.todos = todos;
      },
      updateTodo(state, index){
        state.todos[index].done = !state.todos[index].done;
      },
      swipe(state, activeSlide){
        state.activeSlide = activeSlide;
      }

  },
  actions: {
      async getTodos(ctx){
        let todos = await axios.get('http://localhost:3000/todos');
        ctx.commit('setTodos', todos.data);
      },

      newTodo(ctx, todo){
        if(todo.text !==  ''){
        ctx.commit('addTodo', todo)
      }
    }
  }
})
