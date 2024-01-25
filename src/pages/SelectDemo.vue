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
      :options="
        speakers.map((s) => ({
          id: s.name,
          label: s.name,
          extras: { imageURL: s.imageURL },
        }))
      "
    >
      <template #selectedOption="{ option }">
        <div class="flex items-center space-x-2">
          <img
            :src="option.extras?.imageURL"
            :alt="option.label"
            class="w-4 h-4 rounded-full"
          />
          <span>{{ option.label }}</span>
        </div>
      </template>

      <template #option="{ option }">
        <div class="flex items-center space-x-2">
          <img
            :src="option.extras?.imageURL"
            :alt="option.label"
            class="w-8 h-8 rounded-full"
          />
          <span>{{ option.label }}</span>
        </div>
      </template>
    </InputSelect>

    <InputSelect
      v-model="form.category"
      label="Category"
      placeholder="Select a technology"
      :options="tags.map((t) => ({ id: t, label: t }))"
    />

    <InputSelect
      v-model="form.country"
      label="Country"
      placeholder="Select a country"
      :options="
        countries.map((c) => ({
          id: c.country,
          label: c.country,
          extras: { flag: c.flag },
        }))
      "
    >
      <template #option="{ option }">
        {{ option.extras?.flag }} {{ option.label }}
      </template>
    </InputSelect>

    <div class="mt-10 col-span-3 bg-gray-100 rounded p-4 overflow-x-auto">
      <pre>{{ form }}</pre>
    </div>
  </div>
</template>
