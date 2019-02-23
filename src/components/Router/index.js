import React, { useReducer, useContext, useEffect } from 'react'
import RouterContext from './context'
import RouterReducer from './reducer'

export default function Router({ children }) {
  const context = useContext(RouterContext)
  const [state, dispatch] = useReducer(RouterReducer, context)

  const navigateHandler = () => {
    dispatch({ type: 'BACK', payload: window.location.pathname })
	}

  useEffect(() => {
    window.addEventListener('popstate', navigateHandler);

    return () => window.removeEventListener('popstate', navigateHandler)
  }, [state])

  return (
    <RouterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RouterContext.Provider>
  )
}
