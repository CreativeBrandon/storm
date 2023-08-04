<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '../components/Header.vue'
import Dialog from '../components/dialog.vue'
import TableCount from '../components/tableCount.vue'
import Table from '../components/table/table.vue'
import { Product } from '../types'

const data = ref<Product[]>([])
const selectedProduct = ref<Product>()

const tableColumns = ['ID', 'Status', 'Quantity', 'Product name', 'Prices']

const handleClose = () => {
  selectedProduct.value = undefined
}

const handleSelectedRow = (value: Product) => {
  selectedProduct.value =value
}

onMounted(async () => {
  try {
    const response = await fetch('../data.json')
    const results = await response.json()
    data.value = results
  } catch (error) {
    console.error('Error fetching data! This message would show in a toast message but is not within scope')
  }
})
</script>

<template>
  <main :class="{ container: true, 'modal-open': !!selectedProduct }">
    <Header />

    <TableCount :count="data.length" />
    
    <Table :columns="tableColumns" :data="data" :selected-row="handleSelectedRow" />

    <Dialog v-if="!!selectedProduct" :title="selectedProduct?.product" :handle-close="handleClose" />
  </main>
</template>
