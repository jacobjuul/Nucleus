import algoliasearch from 'algoliasearch/reactnative'
import { POSTS, USERS } from '../constants/collections'

const BASE_URL = 'http://localhost:3000/api'
const API_VERSION = 'v1'
const apiUrl = endpoint => `${BASE_URL}/${API_VERSION}/${endpoint}`

const client = algoliasearch('3OEXHOBM4X', '1b8e1a06756be357872a2bbfeeada98a', {
  timeout: 4000
})

// get :: String -> (String -> Promise)
export const get = collection => (search = '') =>
  client.initIndex(collection).search(search)

export const add = collection => objects =>
  client.initIndex(collection).addObjects(objects)

const login = async ({ email, password }) => {
  try {
    const response = await fetch(apiUrl('auth/sign_in'), {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    return await response.json()
  } catch (error) {
    return error
  }
}

export default {
  get: {
    posts: get(POSTS),
    users: get(USERS),
  },
  add: {
    posts: add(POSTS),
    users: add(USERS)
  },
  user: {
    login
  }
}
