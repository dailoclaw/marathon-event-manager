const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

export { changeState } // Export the reducer for potential combining later
