import React from 'react'
import useUsername from '../hooks/useUsername'

// Uses API
export default function Username() {
  const [username, setUsername] = useUsername()

  return (
    <input
      type="text"
      value={username.title}
      onChange={({ target: { value } }) => setUsername({ ...username, title: value })}
      placeholder="Username (API)"
    />
  )
}