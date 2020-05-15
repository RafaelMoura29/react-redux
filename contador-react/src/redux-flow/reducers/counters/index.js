'use strict'

export default (state, action) => {
    switch (action.type) {
      case 'ADD_COUNTER':
        return state.concat(0)
      case 'REMOVE_COUNTER':
        return state.filter((_, index) => index !== action.index )
      case 'INCREMENT':
        return state.map((counter, index) => index === action.index ? counter + 1 : counter)
    }
}
