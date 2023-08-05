<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import Header from '../components/Header.vue'
import Dialog from '../components/dialog.vue'
import TableCount from '../components/tableCount.vue'
import Table from '../components/table/table.vue'
import { Product } from '../types'
import { store } from '../store'

const selectedProduct = ref<Product>()

const tableColumns = ['ID', 'Status', 'Quantity', 'Product name', 'Prices']

const handleClose = () => {
  selectedProduct.value = undefined
}

const handleSelectedRow = (value: Product) => {
  selectedProduct.value = value
}

const data = computed(() => (store.searchTerm.length > 0 ? store.results : store.data))

onMounted(async () => {
  try {
    const response = await fetch('../data.json')
    const results = await response.json()
    store.data = results
  } catch (error) {
    console.error('Error fetching data! This message would show in a toast message but is not within scope')
  }
})
</script>

<template>
  <main class="container">
    <Header />

    <TableCount :count="data.length" />

    <Table :columns="tableColumns" :data="data" :selected-row="handleSelectedRow" />

    <Dialog v-if="!!selectedProduct" :title="selectedProduct?.product" :handle-close="handleClose" />
  </main>
</template>

<style scoped>
@media screen and (max-width: 1186px) {
  .container {
    padding: 0 26px;
  }
}
</style>
