import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
    {done: false, text: 'Vattna blommorna'},
    {done: false, text: 'Mata katten'},
    {done: true, text: 'Laga middag'}
  ],
  activeSlide: 0

  },
  mutations: {
      addTodo(state, todo){
        state.todos.push(todo)
      },
      updateTodo(state, index){
        state.todos[index].done = !state.todos[index].done;
      },
      swipe(state, activeSlide){
        state.activeSlide = activeSlide;
      }

  },
  actions: {
      newTodo(ctx, todo){
        if(todo.text !==  ''){
        ctx.commit('addTodo', todo)
      }
    }  
  }
})
