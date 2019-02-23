import { createContext } from 'react'

const RouterContext = createContext({
  current: window.location.pathname,
})

export default RouterContext