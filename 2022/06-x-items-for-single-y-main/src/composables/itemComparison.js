import { ref } from 'vue';

const products = ref([]);
const isLoading = ref(false);
const comparison = ref([]);

export const useItemComparison = () => ({
  products,
  isLoading,
  comparison
});