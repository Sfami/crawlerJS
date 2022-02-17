/* eslint-disable no-console */
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCrawledPages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCrawledPages();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCrawledPage = (url) => async (dispatch) => {
  try {
    const { data } = await api.createCrawledPage(url);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCrawledPage = (id, url) => async (dispatch) => {
  try {
    const { data } = await api.updateCrawledPage(id, url);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteCrawledPage = (id) => async (dispatch) => {
  try {
    await api.deleteCrawledPage(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
