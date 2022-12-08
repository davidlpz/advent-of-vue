<template>
  <div class="w-full h-full flex justify-center items-center">
    <TicTacToe />
  </div>
</template>

<script>
import TicTacToe from '@/components/TicTacToe.vue';

export default {
  components: {
    TicTacToe
  }
};
</script>

<style>
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>