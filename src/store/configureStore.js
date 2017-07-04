// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import logger                           from 'redux-logger'
import rootReducer                      from '../reducers/rootReducer'
import { changeAppRoot }                from '../actions/appActions'
import { removeValue }                  from '../utils/asyncStorageHelper'


let midWare: Object[] = [thunk]

if (__DEV__) {
  midWare = [...midWare, logger]
} else {
  midWare = [...midWare]
}

const validateUser = store => next => action => {
  if (action.type === 'USER_INVALID') {
    removeValue('@nukestore:authToken').then(() => {
      store.dispatch(changeAppRoot('login'))
    })
  }
  return next(action)
}

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger, validateUser)
)
// export default function configureStore(initialState: Object) {
//   return createStore(
//     rootReducer,
//     applyMiddleware(...midWare, validateUser)
//   )
// }
