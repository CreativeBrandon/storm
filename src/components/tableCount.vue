<script setup lang="ts">
const { count = 0 } = defineProps<{ count?: number }>()
</script>
<template>
  <div>
    <h2>Products</h2>
    <span class="count">{{ count }} of {{ count }} results</span>
  </div>
</template>

<style scoped>
h2 {
  display: inline-flex;
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 10px;
  letter-spacing: 0em;
}
.count {
  color: var(--fc-secondary);
  font-family: Nunito Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
}
</style>
