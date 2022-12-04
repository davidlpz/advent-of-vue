<template>
  <div class="w-full h-full flex justify-center items-center">
    <div v-if="joke.setup" class="max-w-xs w-full flex flex-col">
      <div 
        data-qa="setup" 
        class="w-3/4 p-4 rounded-2xl bg-teal-800 text-white self-start"
      >
        {{ joke.setup }}
      </div>
      <div 
        v-if="showAnswer" 
        data-qa="delivery" class="w-3/4 mt-2 p-4 rounded-2xl bg-red-800 text-white self-end"
      >
        {{ joke.delivery }}
      </div>
      <button 
        v-if="!showAnswer" 
        class="bg-green col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4"
        @click="showDelivery()"
      >
        Tell Me!
      </button>
      <button 
        v-else
        class="bg-green col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4"
        @click="loadJoke()"
      >
        Another
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let joke = ref({});
let showAnswer = ref(false);

const loadJoke = async () => {
  joke.value = {};
  showAnswer.value = false;
  try {
    joke.value = await fetch('https://v2.jokeapi.dev/joke/christmas').then(response => response.json());
    console.log(joke.value)
  } catch (error) {
    console.error(error)
    alert('Something went wrong!')
  }  
};

loadJoke();

const showDelivery = () => {
  showAnswer.value = true;
}

</script>