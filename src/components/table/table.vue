<script setup lang="ts">
import { Product } from '../../types'
import TableHead from './tableHead.vue'
import TableBodyRow from './tableBodyRow.vue'

const { columns, data = [] } = defineProps<{ columns?: string[]; data: Product[] }>()
</script>

<template>
  <table class="table">
    <TableHead :columns="columns" />

    <tbody class="table-body">
      <template v-for="item in data">
        <TableBodyRow :item="item" />
      </template>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 8px;
  border: 1px solid var(--grey-light);
  width: 100%;
}
</style>
