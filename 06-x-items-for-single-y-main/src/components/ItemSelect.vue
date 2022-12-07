<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option 
      v-for="product in products"
      :key="product.id" 
    >
      {{ product.title }} - ${{ product.price }}
    </option>
  </select>
</template>

<script setup>
import { ref, watch } from 'vue';

const { products, comparison } = useItemComparison();
const selected = ref();

</script>