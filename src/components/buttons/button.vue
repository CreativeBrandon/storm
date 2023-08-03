<script setup lang="ts">
const { title = 'button' } = defineProps<{ title?: string }>()
</script>

<template>
  <button type="button" class="button" :title="title">
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

.button-icon-container {
  height: var(--button-size);
  width: var(--button-size);

  svg {
    height: var(--icon-size);
    width: var(--icon-size);
  }
}
</style>
