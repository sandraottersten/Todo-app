<template>
    <article class="todo" :class="{ completed : todo.done }" v-touch:swipe="completed">
        <aside class="done">
            <img src="../assets/check.svg" alt="done">
        </aside>
        <section class="text">
            {{ todo.text }}
        </section>
    </article>
</template>

<script>
export default {
    name: 'todo',
    props: ['todo', 'index'],
    methods: {
      completed(){
        this.$store.commit('updateTodo', this.index)
      }
    }
    }
</script>

<style lang="scss">

.todo {
    background: rgba($color: #000000, $alpha: .1);
    padding: .25rem;
    height: 3rem;
    display: flex;
    border-radius: 999rem;
    margin: 0 0 1rem;

    &.completed {
        .text {
          color: rgba($color: black, $alpha: .4);
          text-decoration: line-through;
          transform: translate3d(0,0,0);
        }

        .done {
          transform: scale(1);
        }
    }

    aside {
        background: rgb(56, 180, 128);
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 999rem;
        transform: scale(0);
        transition: transform .1s ease;
    }

    .text {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
        transform: translate3d(-3rem,0,0);
        transition: transform .1s ease;
    }
}

</style>
