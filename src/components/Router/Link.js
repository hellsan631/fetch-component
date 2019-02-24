import React from 'react'
import useRouter from './useRouter'

export default function Link({ href, children }) {
  const context = useRouter()
  const onClick = (event) => {
    event.preventDefault()
    context.dispatch({ type: 'GO', payload: href })
  }

  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  )
}