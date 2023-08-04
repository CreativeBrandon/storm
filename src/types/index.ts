export interface Product {
  id: number
  product: string
  quantity: number
  serial: string
  total: number
  status: 'info' | 'success' | 'warning' | 'error'
}
