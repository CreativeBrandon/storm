<script setup lang="ts">
import { ref } from 'vue'

interface ButtonProps {
  title?: string
}
const { title = 'button' } = defineProps<ButtonProps>()
const button = ref()

defineExpose({
  button
})
</script>

<template>
  <button ref="button" type="button" class="button" :title="title">
    <template v-if="$slots.start">
      <div class="button-icon-container center"><slot name="start"></slot></div>
    </template>

    <template v-if="$slots.label">
      <span class="button-label center">
        <slot name="label"></slot>
      </span>
    </template>

    <slot v-if="$slots.default"></slot>
  </button>
</template>

<style>
button {
  background: transparent;
  border: none;
  padding: 0;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &.button {
    display: flex;
    align-items: center;
  }

  &.icon {
    height: var(--button-size);
    width: var(--button-size);
  }
}

.button-primary,
.button-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  min-width: 97px;
  height: 44px;
  padding: 12px 24px;
  border-radius: 4px;
}

.button-primary {
  color: rgba(255, 255, 255, 0.87);
  background-color: var(--primary-main);

  &:hover,
  &:focus {
    color: #fff;
    background-color: var(--primary-dark);
  }
}

.button-secondary {
  background-color: var(--secondary-main);
  font-weight: 500;
}

.button-icon-container {
  height: var(--button-size);
  width: var(--button-size);

  svg {
    height: var(--icon-size);
    width: var(--icon-size);
  }
}
</style>
