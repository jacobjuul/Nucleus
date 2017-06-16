import algoliasearch from 'algoliasearch/reactnative';
import { POSTS } from '../constants/collections';

const client = algoliasearch('3OEXHOBM4X', '1b8e1a06756be357872a2bbfeeada98a', {
  timeout: 4000
});

// get :: String -> (String -> Promise)
export const get = collection => (search = '') =>
  client.initIndex(collection).search(search);

export default {
  posts: get(POSTS),
};
