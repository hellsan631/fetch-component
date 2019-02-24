
export const RouterFunctions = {
  navigate(path) {
    path = path ? path : ''
    window.history.pushState(null, null, path)
  }
}

const RouterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'MATCH':
      return { ...state, current: payload }
    case 'BACK':
      return { ...state, current: payload }
    case 'GO':
      RouterFunctions.navigate(payload)
      return { ...state, current: payload }
    default:
      return state
  }
}

export default RouterReducer