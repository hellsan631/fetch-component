import React, { useContext } from 'react'
import RouterContext from './context'

export default function Switch({ children }) {
  const context = useContext(RouterContext)
  let element = null

  React.Children.forEach(children, (child) => {
    if (element === null) {
      element = child
    } else if (child.props.path === context.current) {
      element = child
    }
  })

  return (
    element
  )
}