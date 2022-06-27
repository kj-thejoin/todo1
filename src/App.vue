


<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput />
    <TodoController />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoTitle from "./components/TodoTitle.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoController from "./components/TodoController.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
}
</script>
  

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// @import "./assets/style/reset";
// @import "./assets/style/mixins";

$color: #f0f0f0;
.list{
  background: $color;

  &__text {
    font-weight : bold;
  }
}

.header{
  // color: $my-var;
}

.title {
  max-width: $max-width;
  margin: 0 auto;
  letter-spacing: 0.03rem;
  color: #fff;
 
  &__message {
    font-size: 1.6rem;
  }
 
  &__task {
    margin-top: 3.5rem;
    margin-bottom: 5rem;
    font-weight: bold;
 
    &-top {
      display: block;
      font-size: 2.6rem;
    }
 
    &-total {
      font-size: 5.4rem;
      line-height: 110%;
    }
  }
}




.footer{
  @include flexbox;
  @include ellipsis(3);

}

</style>
