import React, { useState } from 'react';
import { useUserStore } from '../store/user';
import { addBet } from '../store/bets';
import { addItem, clearCart } from '../store/cart';
import Bets from './zustand/Bets'
import Cart from './zustand/Cart'
import { generateId, generateMatchup, generateCartItem } from '../helpers/random';
import '../styles/global.css';

const ZustandBasics = () => {
  const { user } = useUserStore()
  const [newUser, setNewUser] = useState({ name: '', id: ''});
  
  const saveUser = () => {
    const id = generateId()
    if (!newUser.name.length) {
      setNewUser({ name: 'NO_NAME', id})
    }
    
    useUserStore.setState({ user: { ...newUser, id } })
    setNewUser({ name: '', id: '' })
  }

  const randomId = useUserStore((state) => state.setRandomId)

  const saveBet = () => {
    const bet = {
      id: generateId(),
      name: generateMatchup(),
    }
    addBet(bet)
  }

  // add random item to cart store
  const saveItem = () => {
    const item = generateCartItem()
    addItem(item)
  }
  
  return (
    <div>
      <h1 className="text-3xl">Zustand Basics</h1>
      <div>
        <strong>Name: </strong>{user.name}<br />
        <strong>Id: </strong>{user.id}
      </div>
      <div className="max-w-sm m-auto">
        <input 
          className="border-gray-200 ring-1 border-2 p-2 rounded-lg block w-full"
          type="text"
          value={newUser.name}
          name="name"
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          onKeyDown={(e) => e.key === 'Enter' && saveUser()}
        />
        <button 
          className="shadow-md p-4 rounded-lg bg-indigo-500 text-white m-2"
          onClick={saveUser}>
          Save User
        </button>
        <button 
          className="shadow-md p-4 rounded-lg bg-indigo-500 text-white m-2"
          onClick={randomId}
          >
          
          Random Id
        </button>
      </div>
      <div className="border-blue-200 border-2">
        <button 
        className="shadow-md p-4 rounded-lg bg-indigo-500 text-white m-2"
        onClick={saveBet}>Save Bet</button>
        <Bets />
      </div>
      <div className="border-blue-200 border-2">
        <button 
          className="shadow-md p-4 rounded-lg bg-indigo-500 text-white m-2"
          onClick={saveItem}
        >
          Save Item
        </button>
        <button 
          className="shadow-md p-4 rounded-lg bg-red-500 text-white m-2"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
        <Cart />
      </div>
      
    </div>
  )
}

export default ZustandBasics;