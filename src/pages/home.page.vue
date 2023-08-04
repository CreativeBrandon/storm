<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '../components/Header.vue'
import TableCount from '../components/tableCount.vue'
import { Product } from '../types'

const data = ref<Product[]>([])

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
  <main class="container">
    <Header />

    <TableCount :count="data.length" />
  </main>
</template>

<style scoped></style>
