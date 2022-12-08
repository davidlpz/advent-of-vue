<template>
  <div class="tictactoe">
    <Board
      :board="board"
      :isGameOver="isGameOver"
      @onPlayerTurn="onPlayerTurn"
    />
    <div class="info">
      <p>{{ statusText }}</p>
    </div>
    <button @click="resetBoard">Reset</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import Board from '@/components/Board.vue';

let board = reactive([0, 0, 0, 0, 0, 0, 0, 0, 0]);
let currentPlayer = ref(1);
let winner = ref(null);
let isGameOver = ref(false);

const posibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const statusText = computed(() => {
  if (winner.value !== null) {
    return `Player ${winner.value} has won!`;
  } else if (isGameOver.value) {
    return `It's a draw`;
  } else {
    return `It's Player ${currentPlayer.value} turn.`;
  }
});

const turnsLeft = computed(() => {
  return board.filter((elem) => elem === 0).length;
});

const onPlayerTurn = (i) => {
  board[i] = currentPlayer.value;
  if (!checkWin()) {
    currentPlayer.value = (currentPlayer.value % 2) + 1;
  }
};

const checkWin = () => {
  const playerSquares = board.reduce((indexes, current, i) => {
    if (current === currentPlayer.value) {
      indexes.push(i);
    }
    return indexes;
  }, []);

  posibleWins.forEach((combination) => {
    if (combination.every((n) => playerSquares.includes(n))) {
      winner.value = currentPlayer.value;
      isGameOver.value = true;
    }
    if (isGameOver.value) return;
  });

  if (!turnsLeft.value) {
    isGameOver.value = true;
  }

  return isGameOver.value;
};

const resetBoard = () => {
  board.fill(0, 0, 9);
  currentPlayer.value = 1;
  isGameOver.value = false;
  winner.value = null;
};
</script>

<style lang="scss" scoped>
.info {
  margin-top: 1.25em;
  text-align: center;
}
button {
  display: block;
  margin: 1em auto;
  padding: 0.5em 0.75em;
  border: 1px solid #333;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #333;
    color: #fff;
  }
}
</style>