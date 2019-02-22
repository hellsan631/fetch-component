import React from 'react'
import useLocalForage from '../hooks/useLocalForage'

// Uses Local Forage
export default function Email() {
  const [email, setEmail] = useLocalForage('email', '')

  return (
    <input
      type="text"
      value={email}
      onChange={({ target: { value } }) => setEmail(value)}
      placeholder="Email (LocalForage)"
    />
  )
}