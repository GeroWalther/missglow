import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  discount: number;
  setDiscount: (discount: number) => void;
};

// add items
// remove items
// clear the cart
// (keep track of cart items)
export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          // this logic updates the quantity if the product is already in the cart
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            const updatedItems = state.items.map((item) => {
              if (item.product.id === product.id) {
                // Assuming item.product.quantity is meant to be updated directly
                return {
                  ...item,
                  product: {
                    ...item.product,
                    quantity: item.product.quantity + 1,
                  },
                };
              }
              return item;
            });
            return { items: updatedItems };
          }
          // When adding a new product, ensure the product has a quantity of 1
          const newProduct = { ...product, quantity: 1 };
          return { items: [...state.items, { product: newProduct }] };
        }),
      removeItem: (id) =>
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.product.id !== id
          );
          return { items: updatedItems };
        }),
      clearCart: () => set({ items: [] }),
      discount: 0,
      setDiscount: (value: number) => set({ discount: value }), // New function to set the discount value directly
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
