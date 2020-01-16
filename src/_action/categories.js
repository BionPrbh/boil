import { GET_ALL_CATEGORIES } from '../config/constants'
import axios from 'axios'

export const getAllCategories = () => {
  return {
    type: GET_ALL_CATEGORIES,
    payload: axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/category/${category_id}`
    })
  }
}