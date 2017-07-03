import algoliasearch from 'algoliasearch/reactnative'
import axios from 'axios'
import { POSTS, USERS } from '../constants/collections'

const BASE_URL = 'https://maersk-nucleus-backend.herokuapp.com/api'
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
  const formdata = new FormData()
  formdata.append('email', email)
  formdata.append('password', password)
  try {
    const response = await fetch(apiUrl('auth/sign_in'), {
      method: 'POST',
      'Content-Type': 'application/json',
      body: formdata,
    })
    if (!response.ok) throw response
    return response.json()
  } catch (error) {
    throw error
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
