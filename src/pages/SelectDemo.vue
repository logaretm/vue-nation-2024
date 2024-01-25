<script setup lang="ts">
import { reactive } from 'vue';
import InputSelect from '@/components/InputSelect.vue';
import speakers from '@/data/speakers.json';
import tags from '@/data/tags.json';
import countries from '@/data/countries.json';

const form = reactive({
  speaker: undefined,
  category: undefined,
  country: undefined,
});
</script>

<template>
  <div class="grid grid-cols-3">
    <InputSelect
      v-model="form.speaker"
      label="Speaker"
      placeholder="Select a speaker"
      :options="speakers"
      :optionLabel="(s) => s.name"
    />

    <InputSelect
      v-model="form.category"
      label="Category"
      placeholder="Select a technology"
      :options="tags"
    />

    <InputSelect
      v-model="form.country"
      label="Country"
      placeholder="Select a country"
      :options="countries"
    >
      <template #option="{ option }">
        {{ option.flag }} {{ option.country }}
      </template>
    </InputSelect>

    <div class="mt-10 col-span-3 bg-gray-100 rounded p-4 overflow-x-auto">
      <pre>{{ form }}</pre>
    </div>
  </div>
</template>
