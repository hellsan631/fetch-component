import React, { useContext } from 'react'
import RouterContext from './context'

export default function Route({ component: Component, path }) {
  const context = useContext(RouterContext)
  return (
    <Component {...context} path={path} />
  )
}