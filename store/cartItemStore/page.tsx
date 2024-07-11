// /store/cartItemsStore.ts
import { create } from 'zustand';

const useCartItemsStore = create((set) => ({
  cartItems: [],
  setCartItems: (items:any) => set({ cartItems: items }),
  updateCartItem: (id:any, quantity:any) => set((state:any) => ({
    cartItems: state.cartItems.map((item:any) =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
}));

export default useCartItemsStore;
