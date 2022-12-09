import React, { useState } from 'react';
import { useUserStore } from '../store/user';

const ZustandBasics = () => {
  const { user } = useUserStore()
  const [newUser, setNewUser] = useState({ name: '', id: ''});
  
  const saveUser = () => {
    const id = Math.random().toString(36).substring(2,9)
    if (!newUser.name.length) {
      setNewUser({ name: 'NO_NAME', id})
    }
    
    useUserStore.setState({ user: { ...newUser, id } })
    setNewUser({ name: '', id: '' })
  }

  const randomId = useUserStore((state) => state.setRandomId)
  

  
  return (
    <div>
      <h1>Zustand Basics</h1>
      <p>
        <strong>Name: </strong>{user.name}<br />
        <strong>Id: </strong>{user.id}
      </p>
      <p className="max-w-sm m-auto">
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
      </p>
    </div>
  )
}

export default ZustandBasics;