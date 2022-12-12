import create from 'zustand'
import { persist } from 'zustand/middleware'

type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  clearCart: () => void
  total: number
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      ...state,
      items: [...state.items, item],
      total: state.total + item.price * item.quantity,
    })),
  removeItem: (item) =>
    set((state) => ({
      ...state,
      items: state.items.filter((i) => i.id !== item.id),
      total: state.total - item.price * item.quantity,
    })),
  clearCart: () =>
    set((state) => ({
      ...state,
      items: [],
      total: 0,
    })),
  total: 0,
})))

export const addItem = (item: CartItem) => {
  useCartStore.getState().addItem(item)
}

export const removeItem = (item: CartItem) => {
  useCartStore.getState().removeItem(item)
}

export const clearCart = () => {
  useCartStore.getState().clearCart()
}