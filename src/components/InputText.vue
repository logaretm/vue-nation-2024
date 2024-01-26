<template>
  <div class="flex flex-col">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="model"
      :type="(type as TType)"
      @input="updateValue"
      @change="updateValue"
    />
  </div>
</template>

<script setup lang="ts" generic="TType extends 'text' | 'number'">
const props = defineProps<{
  type: TType;
  label: string;
}>();

type Value = TType extends 'number' ? number : string;

const id = crypto.randomUUID();
const model = defineModel<Value>();

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  if (props.type === 'number') {
    model.value = Number(target.value) as Value;
    return;
  }

  model.value = String(target.value) as Value;
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
