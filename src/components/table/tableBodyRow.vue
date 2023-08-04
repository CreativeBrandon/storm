<script setup lang="ts">
import Status from '../status.vue'
import { Product } from '../../types'
const { item, selectedRow = null } = defineProps<{ item: Product; selectedRow?: (item: Product) => void }>()

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Enter" && selectedRow) selectedRow(item)
}
</script>

<template>
  <tr class="table-body-row" @keypress="handleKeyPress" @click="() => selectedRow(item)" role="button" tabindex="0">
    <td class="cell-id">{{ item.id }}</td>
    <td class="cell-id"><Status :status="item.status" /></td>
    <td class="cell-id">{{ item.quantity }}</td>
    <td class="cell-id">
      <div class="font-primary">{{ item.product }}</div>
      <span class="font-secondary">{{ item.serial }}</span>
    </td>
    <td class="cell-id">${{ item.total }}</td>
  </tr>
</template>

<style scoped>
.font-secondary {
  font-size: 12px;
}

tr {
  border-bottom: var(--table-border);
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: var(--outline);
  }
}

td:nth-child(1) {
  max-width: 76px;
}

td:nth-child(2) {
  text-align: center;
  max-width: 144px;
}

td:nth-child(3) {
  text-align: center;
  width: 125px;
}

td:nth-child(5) {
  border-left: var(--table-border);
  text-align: right;
  width: 138.5px;
}

td {
  padding: 0 16px;
  height: 56px;
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
}

table.table > tbody > tr > th,
table.table > tbody > tr > td {
  border-top: var(--table-border);
}
</style>
