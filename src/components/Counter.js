import React, { useState } from 'react'
import useLocalForage from '../hooks/useLocalForage'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useLocalForage('count', 0)
  const [changeCount, setChangeCount] = useState(1)
  const [changeMin, setChangeMin] = useState(0)
  const [changeMax, setChangeMax] = useState(100)

  const requestChangeCount = (updatedCount) => {
    if (updatedCount > changeMax) {
      return;
    } else if (updatedCount < changeMin) {
      return;
    }
    setCount(updatedCount)
  }

  return (
    <div className="counter">
      <p>{count}</p>
      <button 
        className="button-primary" 
        onClick={() => requestChangeCount(count + changeCount)}
      >Add +</button>
      <button 
        className="button-primary" 
        onClick={() => requestChangeCount(0)}
      >Reset</button>
      <button 
        className="button-primary" 
        onClick={() => requestChangeCount(count - changeCount)}
      >Subtract -</button>

      <div className="counter-options">
        <input 
          type="text"
          value={changeMin}
          onChange={({ target: { value } }) => setChangeMin(Number(value))} 
        />
        <input 
          type="text"
          value={changeCount}
          onChange={({ target: { value } }) => setChangeCount(Number(value))} 
        />
        <input 
          type="text"
          value={changeMax}
          onChange={({ target: { value } }) => setChangeMax(Number(value))} 
        />
      </div>
    </div>
  )
}