<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option 
      v-for="product in products"
      :key="product.id" 
      :value="product"
    >
      {{ product.title }} - ${{ product.price }}
    </option>
  </select>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useItemComparison } from '@/composables/itemComparison';

const { products, comparison } = useItemComparison();
const selected = ref();

watch(selected, (newValue, oldValue) => {
  comparison.value = comparison.value.filter(item => item.id !== oldValue?.id);
  comparison.value.push(newValue);
})

</script>