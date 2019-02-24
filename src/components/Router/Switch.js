import React from 'react'
import matchPath from './matchPath';
import useRouter from './useRouter';

export default function Switch({ children }) {
  const context = useRouter()
  let element = null
  let match = false 

  React.Children.forEach(children, (child) => {
    const { path, ...options } = child.props
    if (!match) {
      match = matchPath(path, options)

      if (match) {
        element = child
        if (context.current.path !== match.path) {
          context.dispatch({ type: 'MATCH', payload: match })
        }
      }
    }
    if (element === null) {
      element = child
    }
  })

  return (
    element
  )
}