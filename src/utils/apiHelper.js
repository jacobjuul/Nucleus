import algoliasearch from 'algoliasearch/reactnative'
import { POSTS, USERS } from '../constants/collections'

const client = algoliasearch('3OEXHOBM4X', '1b8e1a06756be357872a2bbfeeada98a', {
  timeout: 4000
})

// get :: String -> (String -> Promise)
export const get = collection => (search = '') =>
  client.initIndex(collection).search(search)

export const add = collection => objects =>
  client.initIndex(collection).addObjects(objects)

export default {
  get: {
    posts: get(POSTS),
    users: get(USERS),
  },
  add: {
    posts: add(POSTS),
    users: add(USERS)
  }
}
