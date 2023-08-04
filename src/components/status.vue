<script setup lang="ts">
import { Product } from '../types'

const { status = 'info' } = defineProps<{ status?: Product['status'] }>()
</script>

<template>
  <div
    :class="{
      status: true,
      info: status === 'info',
      success: status === 'success',
      warning: status === 'warning',
      error: status === 'error'
    }"
  >
    {{ status }}
</div>
</template>

<style scoped>
.status {
  border-radius: 12px;
  padding: 4px 24px;
  max-width: 83px;
  margin: 0 auto;
  text-transform: capitalize;
}
.error {
  background-color: var(--red-light);
  color: var(--red-medium);
}

.info {
  background-color: var(--violet);
  color: var(--primary-main);
}

.success {
  background-color: var(--green-light);
  color: var(--green);
}

.warning {
  background-color: var(--orange-light);
  color: var(--orange);
}
</style>
