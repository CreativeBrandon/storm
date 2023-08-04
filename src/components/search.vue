<script setup lang="ts">
import { Events, ref } from 'vue'
import Button from './buttons/button.vue'
import SearchIcon from './icons/iconSearch.vue'

interface SearchProps {
  defaultValue?: string
  onChange: (term: string) => void
}

const { onChange, defaultValue = '' } = defineProps<SearchProps>()

const term = ref('')

const setTerm = (e: Events['onKeyup']) => {
  const value = (e.target as undefined | HTMLInputElement)?.value || ''
  term.value = value
}

const handleSearch = () => {
  onChange(term.value)
}
</script>

<template>
  <form class="search" @submit.prevent="handleSearch">
    <div class="search-box">
      <SearchIcon class="search-icon" title="product search" />
      <input @keyup="setTerm" placeholder="Search" :defaultValue="defaultValue" />
    </div>
    <Button type="submit" class="button-primary" @click="handleSearch">Search</Button>
  </form>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  gap: 10px;
}
.search-icon {
  padding: 3px;
}
.search-box {
  display: flex;
  align-items: center;
  border: var(--table-border);
  padding: 8px 16px;
  max-height: 44px;
}
input::placeholder,
input {
  border: none;
  height: 20px;
  padding: 0;
  margin: 0 0 0 10px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: rgba(0, 0, 0, 0.3);
  width: 100%;

  &:focus {
    outline: var(--outline);
  }
}
</style>
