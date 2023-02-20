import create from 'zustand';

type Bagel = {
  id: string;
  flavor: 'everything' | 'plain' | 'sesame' | 'poppyseed';
  topping: 'cream cheese' | 'butter' | 'none';
  toasted: boolean;
  price: number;
}

type BagelState = {
  bagels: Bagel[];
  addBagel: (bagel: Bagel) => void;
}

export const useBagelStore = create<BagelState>((set) => ({
  bagels: [],
  addBagel: (bagel) => set((state) => ({ ...state, bagels: [...state.bagels, bagel] })),
}))

export const addBagel = (bagel: Bagel) => useBagelStore.getState().addBagel(bagel)