<script setup lang="ts">
import { Product } from '../../types'
import TableHead from './tableHead.vue'
import TableBodyRow from './tableBodyRow.vue'

interface TableProps {
  columns?: string[]
  data: Product[]
  selectedRow?: (item: Product) => void
}

const { columns, data = [], selectedRow } = defineProps<TableProps>()
</script>

<template>
  <table class="table">
    <TableHead :columns="columns" />

    <tbody class="table-body">
      <template v-for="item in data" :key="item.id">
        <TableBodyRow :item="item" :selected-row="selectedRow" />
      </template>
    </tbody>
  </table>
</template>

<style>
.table {
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 8px;
  border: 1px solid var(--grey-light);
  width: 100%;
}

@media screen and (max-width: 768px) {
  th:nth-child(1),
  td:nth-child(1),
  th:nth-child(2),
  td:nth-child(2),
  th:nth-child(3),
  td:nth-child(3),
  th:nth-child(5),
  td:nth-child(5) {
    display: none;
  }
}
</style>
