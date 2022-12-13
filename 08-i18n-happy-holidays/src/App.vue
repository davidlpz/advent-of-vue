<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ $t('happyHolidays') }}
        <span class="i-twemoji-world-map"></span>
      </div>
      
      <span>
        {{ $t('christmasIsComing',  { date: d(christmasDate, 'long') }) }}
        <span class="font-medium text-green-600">
          {{ $t('day', days) }}
        </span>
      </span>

      <div class="flex items-center justify-between w-200px">
        <button class="icon-button" @click="nextLang()">       
          <span class="i-carbon-language" />
        </button>
        
        <div>
          <span :class="flags[locale]"></span>
          {{ $t('language') }}
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n';
const { t, d, locale, availableLocales } = useI18n();

const flags = {
  en: 'i-twemoji-flag-united-states',
  de: 'i-twemoji-flag-germany',
  'ja-JP': 'i-twemoji-flag-japan',
}

const nextLang = () => {
  const index = availableLocales.findIndex(elem => elem === locale.value);
  locale.value = availableLocales[(index + 1) % availableLocales.length];
}

const days = computed(() => {
  return Math.ceil((christmasDate.getTime() - new Date()) / (1000 * 60 * 60 * 24));
});

const christmasDate = new Date('2022/12/25');
</script>

<style scoped>
.icon-button {
  @apply text-xl
    w-32px
    h-32px
    rounded-full
    border-1
    border-transparent
    bg-transparent
    cursor-pointer
    duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>
