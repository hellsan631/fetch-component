import React from 'react'
import useRouter from './useRouter'

export default function Route({ component: Component, path }) {
  const context = useRouter()
  return (
    <Component {...context} path={path} />
  )
}