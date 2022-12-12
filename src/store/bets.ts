import create from 'zustand'

type Bet = {
  id: string
  name: string
}

type BetsState = {
  bets: Bet[]
  addBet: (bet: Bet) => void
  removeBet: (bet: Bet) => void
}

export const useBetsStore = create<BetsState>((set) => ({
  bets: [],
  addBet: (bet) => set((state) => ({ ...state, bets: [...state.bets, bet] })),
  removeBet: (bet) =>
    set((state) => ({
      ...state,
      bets: state.bets.filter((b) => b.id !== bet.id),
    })),
}))

export const addBet = (bet: Bet) => {
  useBetsStore.getState().addBet(bet)
}