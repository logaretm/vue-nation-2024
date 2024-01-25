<script setup lang="ts">
import { isEqual } from '@/utils';

type Option = {
  id: string;
  label: string;
  extras?: Record<string, any>;
};

defineProps<{
  label: string;
  options: Option[];
  placeholder?: string;
}>();

const model = defineModel<Option>();

function onChange(event: Event) {
  // Specific to selectlist spec
  const target = event.target as HTMLSelectElement & {
    selectedOption: { _value?: Option; value: Option };
  };

  const option = target.selectedOption;
  model.value = '_value' in option ? option._value : option.value;
}
</script>

<template>
  <div class="InputSelect">
    <label :for="label">{{ label }}</label>

    <selectlist class="InputSelect__Control" :id="label" @change="onChange">
      <button :type="('selectlist' as any)" class="InputSelect__btn">
        <slot
          v-if="modelValue && $slots.selectedOption"
          name="selectedOption"
          :option="modelValue"
        >
          <selectedoption></selectedoption>
        </slot>

        <selectedoption v-else></selectedoption>
      </button>

      <listbox>
        <option disabled value="" class="InputSelect__opt">
          {{ placeholder || 'Select an option' }}
        </option>

        <option
          v-for="opt in options"
          :key="opt.id"
          :value="opt"
          class="InputSelect__opt"
          :aria-selected="isEqual(opt, modelValue)"
        >
          <slot
            name="option"
            :option="opt"
            :selected="isEqual(opt, modelValue)"
          >
            {{ opt.label }}
          </slot>
        </option>
      </listbox>
    </selectlist>
  </div>
</template>

<style scoped lang="postcss">
.InputSelect {
  & label {
    display: block;
    @apply text-sm font-medium;
    margin-bottom: 4px;
  }

  & selectlist {
    @apply border border-gray-200 rounded-md;

    &:open {
      @apply border-blue-500;
    }
  }

  & .InputSelect__btn {
    display: flex;
    @apply flex items-center  justify-between w-full bg-white cursor-pointer px-2 py-1.5 rounded-md text-xs;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:hover {
      @apply bg-gray-100;
    }
  }

  & listbox {
    border: 1px solid gray;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    transform: translateY(4px);
    max-height: 320px;
  }

  & option {
    @apply border border-transparent flex items-center px-4 py-1 rounded cursor-pointer;

    &[aria-selected='true'] {
      @apply bg-blue-200;
    }

    &:hover {
      @apply bg-gray-100;
    }
  }

  option + option {
    @apply mt-0.5;
  }
}
</style>
