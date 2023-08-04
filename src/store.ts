import { reactive } from 'vue'
import { Product } from './types'

export const store = reactive({
  searchTerm: '',
  data: [] as Product[],
  results: [] as Product[],
  product: null as null | Product
})
