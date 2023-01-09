<template>
  <div class="board">
    <Square
      v-for="(value, i) in board"
      :key="i"
      :player="value"
      :disabled="isGameOver"
      @click="emit('onPlayerTurn', i)"
    />
  </div>
</template>

<script setup>
import Square from '@/components/Square.vue';

const props = defineProps({
  board: Array,
  isGameOver: Boolean
});

const emit = defineEmits(['onPlayerTurn']);
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 250px;
  height: 250px;
  margin: 0 auto;
}
</style>