<template>
    <main id="todos">
        <header>
            <img src="../assets/logo.png" alt="logo">
            <h1>TeflonBrain</h1>
            <p>Make it stick</p>
        </header>
        <section class="content">
            <todo v-for="(todoData, index) in todos" :key="index" :todo="todoData" :index="index"/>
        </section>
        <footer>
            <a href="#" class="btn" v-touch:swipe.left="swipe">Slide to add new</a>
        </footer>
    </main>
</template>

<script>

import todo from '@/components/Todo';

export default {
    name: 'todos',
    computed: {
      todos(){
      return this.$store.state.todos
      }
    },
    components: {
        todo
    },
    methods: {
      swipe(){
         this.$store.commit('swipe', 1);
      }
    }
}
</script>

<style lang="scss">

    #todos {

        header {

            h1 {
                margin: 0;
                padding: 0;
                font-weight: 700;
            }

            p {
                margin: 0;
                font-style: italic;
            }

            img {
                width: 2rem;
            }
        }

        footer {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            a.btn {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #222;
                color: white;
                font-weight: 700;
                text-decoration: none;
                height: 3rem;
                border-radius: 99rem;
            }
        }
    }

</style>
