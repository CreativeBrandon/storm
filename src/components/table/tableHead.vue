<script setup lang="ts">
const { columns = [] } = defineProps<{ columns?: string[] }>()
</script>

<template>
  <thead class="table-head">
    <tr>
      <template v-for="column in columns">
        <th>{{ column }}</th>
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

th:nth-child(1) {
  max-width: 43.5px;
}

th:nth-child(2) {
  text-align: center;
}

th:nth-child(3) {
  text-align: center;
}

th:nth-child(4) {
  text-align: center;
}

th:nth-child(5) {
  text-align: center;
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
