<template>
  <div
    class="square"
    :class="{
      'is-disabled': isDisabled,
      'player-1': player === 1,
      'player-2': player === 2
    }"
    @click="handleClick"
  >
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  player: Number,
  disabled: Boolean
});

const emit = defineEmits(['click']);

const isDisabled = computed(() => {
  return props.disabled || props.player !== 0;
});

const handleClick = () => {
  if (isDisabled.value) return false;
  emit('click');
};
</script>

<style lang="scss" scoped>
.square {
  position: relative;
  margin: 5px;
  background-color: #78bec5;
  border-radius: 14px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;

  &.is-disabled {
    cursor: initial;
  }

  &.player-1 {
    background: #ffdd57;
    &::after {
      content: 'X';
    }
  }

  &.player-2 {
    background: #eb7eba;
    &::after {
      content: 'O';
    }
  }

  &.player-1::after,
  &.player-2::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-weight: 700;
  }
}
</style>