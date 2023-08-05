<script setup lang="ts">
const { columns = [] } = defineProps<{ columns?: string[] }>()
</script>

<template>
  <thead class="table-head">
    <tr>
      <template v-for="column in columns" :key="column">
        <th scope="col">{{ column }}</th>
      </template>
    </tr>
  </thead>
</template>

<style scoped>
.table-head {
  text-align: left;
  height: 56px;
  border: var(--table-border);
}

th:nth-child(2),
th:nth-child(3),
th:nth-child(4),
th:nth-child(5) {
  text-align: center;
}

th:nth-child(5) {
  border-left: var(--table-border);
}

th {
  padding: 0 16px;
  text-align: left;

  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
}
</style>
