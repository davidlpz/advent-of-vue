<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <p v-if="isLoading">Please wait...</p>
    <template v-else>
      <h1 class="text-4xl font-bold">Select items to compare</h1>
      <div class="flex flex-col gap-5 justify-center">
        <ItemSelect />
        <ItemSelect />
      </div>
      <ComparisonSummary />
    </template>
  </div>
</template>

<script setup>
import ItemSelect from './components/ItemSelect.vue';
import ComparisonSummary from './components/ComparisonSummary.vue';
import { onMounted } from 'vue'; 
import { useItemComparison } from '@/composables/itemComparison.js';

const { products, isLoading, comparison } = useItemComparison();

onMounted(async() => {
  try {
    isLoading.value = true;
    const response = await fetch(`https://dummyjson.com/products`).then(response => response.json());
    products.value = response.products
  } catch (error) {
    console.error(error)
    alert('Something went wrong!')
  } finally {
    isLoading.value = false;
  }
});
</script>