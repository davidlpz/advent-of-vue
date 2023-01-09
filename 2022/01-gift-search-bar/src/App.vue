<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="search" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <p v-if="isLoading">Searching...</p>
    <p v-else-if="noResults">No products found.</p>
    <ul v-else class="list-disc">
      <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { debounce } from 'debounce';

const isLoading = ref(false);
const noResults = ref(false);
const searchTerm = ref('');
const products = ref([]);

const findProducts = debounce(async term => {
  noResults.value = false;

  if (term === '') {
    products.value = [];
    return false;
  }

  try {
    isLoading.value = true;
    await fetch(`https://dummyjson.com/products/search?q=${term}`)
      .then(response => response.json())
      .then(response => {
        products.value = response.products;
        noResults.value = !products.value.length;
      });
  } catch (error) {
    products.value = [];
    alert(error)
  } finally {
    isLoading.value = false;
  }
}, 300);

watch(searchTerm, newTerm => findProducts(newTerm));
</script>

<style scoped>
.list-disc {
  max-height: 30vh;
  overflow-y: auto;
}
[type=search] {
  outline: none;
}
</style>