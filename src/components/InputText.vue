<template>
  <div class="flex flex-col">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="model"
      :type="type"
      @input="updateValue"
      @change="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'text' | 'number';
  label: string;
}>();

const id = crypto.randomUUID();
const model = defineModel<string | number>();

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  model.value = target.value;
}
</script>

<style lang="postcss" scoped>
label {
  @apply block text-sm font-medium mb-0.5;
}

input {
  @apply px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md border border-gray-300 text-sm;
}
</style>
