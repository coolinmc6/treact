import create from 'zustand';

export type UserState = {
  isLoggedIn: boolean;
  user: {
    id: string;
    name: string;
  }
  setRandomId: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  user: {
    id: '',
    name: '',
  },
  setRandomId: () => set((state) => ({ ...state, user: { ...state.user, id: Math.random().toString(36).substring(7)}}))
}))