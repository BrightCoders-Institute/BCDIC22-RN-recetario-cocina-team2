import { createStore } from 'redux'
import { likeReducer } from './reducer'

const store = createStore(likeReducer)
export default store
