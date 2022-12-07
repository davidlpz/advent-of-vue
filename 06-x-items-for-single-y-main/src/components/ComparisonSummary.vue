<template>
  <p v-if="sameItems">These are the same items</p>
  <p v-else class="mx-5 text-center">
    You can get <strong>{{ n }}</strong> <em>{{ sortedProducts[0].title }}</em> for about the same price as a single <em>{{ sortedProducts[1].title }}</em>
  </p>
</template>

<script setup>
import { computed } from 'vue';
import { useItemComparison } from '@/composables/itemComparison';

const { comparison } = useItemComparison();

const sortedProducts = computed(() => comparison.value.sort((a, b) => a.price - b.price));
const sameItems = computed(() => sortedProducts.value[0].id === sortedProducts.value[1].id);
const n = computed(() => Math.trunc(sortedProducts.value[1].price / sortedProducts.value[0].price));
</script>