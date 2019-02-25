import {createStore} from 'redux';
import reduce from './reduce'

const initialStore = {
  count:10
}

const store = createStore(reduce,initialStore);

export default store;