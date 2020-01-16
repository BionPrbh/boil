import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from './middleware'

import { categories } from '../_reducer/categories'

const rootReducers = combineReducers({
  categories
})

const store = createStore(rootReducers, 
  applyMiddleware(promise, logger)  
)

export default store