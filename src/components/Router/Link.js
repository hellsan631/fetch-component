import React, { useContext } from 'react'
import RouterContext from './context'

export default function Link({ href, children }) {
  const context = useContext(RouterContext)
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