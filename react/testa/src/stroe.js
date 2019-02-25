import {createStore} from 'redux'

const initialState ={
  count:0
}

let store = createStore(()=>{},initialState)

export default store;
