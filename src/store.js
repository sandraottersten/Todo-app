import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    activeSlide: 0

  },
  mutations: {

      updateTodo(state, index){
        state.todos[index].done = !state.todos[index].done;
      },
      swipe(state, activeSlide){
        state.activeSlide = activeSlide;
      },
      setTodos(state, todos){
        state.todos.push(todos);
        console.log(state.todos)
      }

  },
  actions: {
      newTodo(ctx, todo){
        if(todo.text !==  ''){
        ctx.commit('addTodo', todo)
        }
      },
      addTodo(ctx, todo){
        let arr = this.state.todos
        arr.push(todo);
        console.log(arr)
        localStorage.setItem('todos', JSON.stringify(arr));
      },
      getTodos(ctx){
        let todos = localStorage.getItem('todos');
        ctx.commit('setTodos', JSON.parse(todos));
        console.log(todos)
      }
  }
})
