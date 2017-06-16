import algoliasearch from 'algoliasearch/reactnative';
import { POSTS } from '../constants/collections';

const client = algoliasearch('3OEXHOBM4X', '1b8e1a06756be357872a2bbfeeada98a');

export const get = collection => (search = '') => {
  const index = client.initIndex(collection);
  return index.search(search);
};

export default api = {
  posts: get(POSTS),
};
