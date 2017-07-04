import algoliasearch    from 'algoliasearch/reactnative'
import axios            from 'axios'
import { AsyncStorage } from 'react-native'
import R                from 'ramda'
import { POSTS, USERS } from '../constants/collections'
import { setValue, getValue }     from '../utils/asyncStorageHelper'

const BASE_URL = 'https://maersk-nucleus-backend.herokuapp.com/api'
const API_VERSION = 'v1'

const apiUrl = endpoint => `${BASE_URL}/${API_VERSION}/${endpoint}`
const client = algoliasearch('3OEXHOBM4X', '1b8e1a06756be357872a2bbfeeada98a', {
  timeout: 4000
})

const setHeaders = headers => axios.defaults.headers.common = headers
getValue('@nukestore:headers').then(setHeaders)

// get :: String -> String -> Promise
const get = collection => (search = '') =>
  client.initIndex(collection).search(search)

// create :: String -> Object -> Promise
const create = R.useWith(axios.post, [apiUrl, R.identity])

const login = async ({ email, password }) => {
  const formdata = new FormData()
  formdata.append('email', email)
  formdata.append('password', password)
  try {
    const response = await axios.post(apiUrl('auth/sign_in'), formdata)
    setHeaders(response.headers)
    setValue('@nukestore:headers', response.headers)
    return response
  } catch (error) {
    throw error
  }
}

export default {
  get: {
    posts: get(POSTS),
    users: get(USERS),
  },
  create: {
    bookmark: create('/bookmarks'),
    comment: create('/comments'),
  },
  user: {
    login
  }
}
