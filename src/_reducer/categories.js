import { GET_ALL_CATEGORIES } from '../config/constants'

const initialState = {
  categories = []
}

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_CATEGORIES}_PENDING`:  
      return{
        ...state,
        isLoading: false
      }
    case `${GET_ALL_CATEGORIES}_FULFILLED`:
      return{
        ...state,
        categories: action.payload.data,
        isLoading: false
      }
    case `${GET_ALL_CATEGORIES}_REJECTED`:
      return {
        ...state,
        isLoading: false
      }
  
    default:
      return state
  }
}