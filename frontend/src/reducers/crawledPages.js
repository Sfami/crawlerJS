import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (crawledPages = [], action) => {
  switch (action.type) {
  case FETCH_ALL:
    return action.payload;
  // case LIKE:
  //   return crawledPages.map((crawledPage) => (crawledPage._id === action.payload._id ? action.payload : crawledPage));
  case CREATE:
    return [...crawledPages, action.payload];
  case UPDATE:
    return crawledPages.map((crawledPage) => (crawledPage._id === action.payload._id ? action.payload : crawledPage));
  case DELETE:
    return crawledPages.filter((crawledPage) => crawledPage._id !== action.payload);
  default:
    return crawledPages;
  }
};

